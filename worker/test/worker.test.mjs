import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/index.js';

const env = {
  CLOUDFLARE_ACCOUNT_ID: 'account',
  CLOUDFLARE_API_TOKEN: 'token',
  CLOUDFLARE_CUSTOMER_CODE: 'customer',
  ADMIN_PASSWORD: 'strong-password',
  SESSION_SECRET: 'session-secret-at-least-thirty-two-characters',
  ALLOWED_ORIGINS: 'https://69poker.club',
  CHANNEL_ID: '69poker-main',
  CLOUDFLARE_API_BASE: 'https://mock.cloudflare.test/client/v4'
};

const input = {
  uid: 'input-uid',
  enabled: true,
  rtmps: { url: 'rtmps://live.cloudflare.com:443/live/', streamKey: 'secret-key' },
  meta: { channelId: '69poker-main', title: '69 POKER LIVE GAME', category: 'POKER LIVE' },
  recording: { mode: 'automatic' }
};

const originalFetch = globalThis.fetch;

test.after(() => { globalThis.fetch = originalFetch; });

test('protects credentials and removes secrets from the public response', async () => {
  globalThis.fetch = async (url, options = {}) => {
    const value = String(url);
    if (value.endsWith('/stream/live_inputs') && (!options.method || options.method === 'GET')) {
      return Response.json({ success: true, result: { liveInputs: [input] } });
    }
    if (value.endsWith('/stream/live_inputs/input-uid')) return Response.json({ success: true, result: input });
    if (value.endsWith('/input-uid/lifecycle')) return Response.json({ isInput: true, videoUID: 'video-uid', live: true });
    throw new Error(`Unexpected request: ${value}`);
  };

  const denied = await worker.fetch(new Request('https://api.test/api/admin/credentials'), env);
  assert.equal(denied.status, 401);

  const login = await worker.fetch(new Request('https://api.test/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://69poker.club' },
    body: JSON.stringify({ password: 'strong-password' })
  }), env);
  assert.equal(login.status, 200);
  assert.equal(login.headers.get('Access-Control-Allow-Origin'), 'https://69poker.club');
  const { token } = await login.json();

  const credentials = await worker.fetch(new Request('https://api.test/api/admin/credentials', {
    headers: { Authorization: `Bearer ${token}` }
  }), env);
  const privatePayload = await credentials.json();
  assert.equal(privatePayload.streamKey, 'secret-key');
  assert.equal(privatePayload.live, true);

  const publicResult = await worker.fetch(new Request('https://api.test/api/public/live'), env);
  const publicPayload = await publicResult.json();
  assert.equal(publicPayload.live, true);
  assert.equal(publicPayload.playerUrl, 'https://customer-customer.cloudflarestream.com/input-uid/iframe');
  assert.equal('streamKey' in publicPayload, false);
  assert.equal('rtmpsUrl' in publicPayload, false);
});

test('rejects a wrong admin password', async () => {
  const result = await worker.fetch(new Request('https://api.test/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: 'wrong' })
  }), env);
  assert.equal(result.status, 401);
});

test('answers browser CORS preflight with an empty 204 response', async () => {
  const result = await worker.fetch(new Request('https://api.test/api/health', {
    method: 'OPTIONS',
    headers: { Origin: 'https://69poker.club' }
  }), env);
  assert.equal(result.status, 204);
  assert.equal(result.headers.get('Access-Control-Allow-Origin'), 'https://69poker.club');
  assert.equal(await result.text(), '');
});

test('returns a normal offline public state before Stream secrets are configured', async () => {
  const unconfigured = { ALLOWED_ORIGINS: 'https://69poker.club' };
  const result = await worker.fetch(new Request('https://api.test/api/public/live'), unconfigured);
  assert.equal(result.status, 200);
  const payload = await result.json();
  assert.equal(payload.configured, false);
  assert.equal(payload.live, false);
});
