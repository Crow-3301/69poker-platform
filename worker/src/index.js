const DEFAULT_CHANNEL_ID = '69poker-main';
const DEFAULT_TITLE = '69 POKER LIVE GAME';
const DEFAULT_CATEGORY = 'POKER LIVE';
const SESSION_SECONDS = 60 * 60 * 8;

const encoder = new TextEncoder();

function base64Url(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function hmac(value, secret) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(value)));
}

async function digest(value) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}

function timingSafeEqual(left, right) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

async function createSession(secret) {
  const now = Math.floor(Date.now() / 1000);
  const payload = base64Url(encoder.encode(JSON.stringify({ sub: 'studio-admin', iat: now, exp: now + SESSION_SECONDS })));
  const signature = base64Url(await hmac(payload, secret));
  return `${payload}.${signature}`;
}

async function verifySession(token, secret) {
  if (!token || !secret) return false;
  const [payload, signature, extra] = token.split('.');
  if (!payload || !signature || extra) return false;
  try {
    const expected = await hmac(payload, secret);
    if (!timingSafeEqual(expected, fromBase64Url(signature))) return false;
    const session = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
    return session.sub === 'studio-admin' && Number.isFinite(session.exp) && session.exp > Date.now() / 1000;
  } catch {
    return false;
  }
}

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin');
  if (!origin) return '';
  const configured = (env.ALLOWED_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean);
  if (configured.includes(origin)) return origin;
  if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin)) return origin;
  return '';
}

function response(request, env, payload, status = 200, extraHeaders = {}) {
  const origin = allowedOrigin(request, env);
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Vary': 'Origin',
    ...extraHeaders
  });
  if (origin) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Authorization,Content-Type');
  }
  return new Response(JSON.stringify(payload), { status, headers });
}

function assertConfigured(env) {
  const required = ['CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_CUSTOMER_CODE', 'ADMIN_PASSWORD', 'SESSION_SECRET'];
  const missing = required.filter(name => !env[name]);
  if (missing.length) throw new ApiError(503, 'LIVE_API_NOT_CONFIGURED', '直播服务尚未完成安全配置。');
}

class ApiError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

async function cloudflare(env, path, options = {}) {
  const apiBase = env.CLOUDFLARE_API_BASE || 'https://api.cloudflare.com/client/v4';
  const result = await fetch(`${apiBase}/accounts/${env.CLOUDFLARE_ACCOUNT_ID}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
  const payload = await result.json().catch(() => null);
  if (!result.ok || payload?.success === false) {
    const message = payload?.errors?.[0]?.message || `Cloudflare Stream request failed (${result.status})`;
    throw new ApiError(502, 'STREAM_PROVIDER_ERROR', message);
  }
  return payload?.result ?? payload;
}

function channelId(env) {
  return env.CHANNEL_ID || DEFAULT_CHANNEL_ID;
}

async function listInputs(env) {
  const result = await cloudflare(env, '/stream/live_inputs');
  return Array.isArray(result) ? result : result?.liveInputs || [];
}

async function findInput(env) {
  const inputs = await listInputs(env);
  return inputs.find(input => input?.meta?.channelId === channelId(env)) || null;
}

async function retrieveInput(env, uid) {
  return cloudflare(env, `/stream/live_inputs/${encodeURIComponent(uid)}`);
}

async function ensureInput(env) {
  const existing = await findInput(env);
  if (existing?.uid) return retrieveInput(env, existing.uid);
  return cloudflare(env, '/stream/live_inputs', {
    method: 'POST',
    body: JSON.stringify({
      meta: {
        name: '69Poker Main Channel',
        channelId: channelId(env),
        title: DEFAULT_TITLE,
        category: DEFAULT_CATEGORY
      },
      recording: {
        mode: 'automatic',
        requireSignedURLs: false,
        allowedOrigins: ['69poker.club', 'www.69poker.club'],
        hideLiveViewerCount: false,
        timeoutSeconds: 0
      },
      deleteRecordingAfterDays: 30,
      enabled: true,
      preferLowLatency: false
    })
  });
}

async function lifecycle(env, uid) {
  if (!uid) return { live: false, videoUID: null };
  const url = `https://customer-${env.CLOUDFLARE_CUSTOMER_CODE}.cloudflarestream.com/${uid}/lifecycle`;
  const result = await fetch(url, { headers: { Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}` } });
  if (!result.ok) return { live: false, videoUID: null };
  const payload = await result.json().catch(() => ({}));
  return { live: payload.live === true, videoUID: payload.videoUID || null };
}

function publicInput(env, input, state) {
  const uid = input?.uid || null;
  return {
    configured: Boolean(uid),
    live: state?.live === true,
    inputUid: uid,
    videoUid: state?.videoUID || null,
    title: input?.meta?.title || DEFAULT_TITLE,
    category: input?.meta?.category || DEFAULT_CATEGORY,
    playerUrl: uid ? `https://customer-${env.CLOUDFLARE_CUSTOMER_CODE}.cloudflarestream.com/${uid}/iframe` : null
  };
}

async function authenticated(request, env) {
  const token = request.headers.get('Authorization')?.match(/^Bearer\s+(.+)$/i)?.[1];
  return verifySession(token, env.SESSION_SECRET);
}

async function parseJson(request) {
  try {
    return await request.json();
  } catch {
    throw new ApiError(400, 'INVALID_JSON', '请求格式不正确。');
  }
}

export async function handleRequest(request, env) {
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') return response(request, env, {}, 204);

  if (url.pathname === '/api/health' && request.method === 'GET') {
    const required = ['CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_CUSTOMER_CODE', 'ADMIN_PASSWORD', 'SESSION_SECRET'];
    return response(request, env, { ok: true, configured: required.every(name => Boolean(env[name])) });
  }

  assertConfigured(env);

  if (url.pathname === '/api/admin/login' && request.method === 'POST') {
    const body = await parseJson(request);
    const submitted = await digest(String(body.password || ''));
    const expected = await digest(env.ADMIN_PASSWORD);
    if (!timingSafeEqual(submitted, expected)) throw new ApiError(401, 'INVALID_CREDENTIALS', '管理密码不正确。');
    return response(request, env, { token: await createSession(env.SESSION_SECRET), expiresIn: SESSION_SECONDS });
  }

  if (url.pathname.startsWith('/api/admin/')) {
    if (!(await authenticated(request, env))) throw new ApiError(401, 'SESSION_REQUIRED', '管理会话已失效，请重新登录。');

    if (url.pathname === '/api/admin/credentials' && request.method === 'GET') {
      const input = await ensureInput(env);
      const state = await lifecycle(env, input.uid);
      return response(request, env, {
        ...publicInput(env, input, state),
        rtmpsUrl: input?.rtmps?.url || null,
        streamKey: input?.rtmps?.streamKey || null,
        enabled: input?.enabled !== false
      });
    }

    if (url.pathname === '/api/admin/status' && request.method === 'GET') {
      const summary = await findInput(env);
      if (!summary) return response(request, env, publicInput(env, null, null));
      const input = await retrieveInput(env, summary.uid);
      return response(request, env, { ...publicInput(env, input, await lifecycle(env, input.uid)), enabled: input.enabled !== false });
    }

    if (url.pathname === '/api/admin/settings' && request.method === 'PUT') {
      const body = await parseJson(request);
      const title = String(body.title || '').trim().slice(0, 100);
      const category = String(body.category || '').trim().slice(0, 40);
      if (!title || !category) throw new ApiError(400, 'INVALID_SETTINGS', '直播标题与分类不能为空。');
      const current = await ensureInput(env);
      const input = await cloudflare(env, `/stream/live_inputs/${encodeURIComponent(current.uid)}`, {
        method: 'PUT',
        body: JSON.stringify({
          meta: { ...current.meta, channelId: channelId(env), title, category },
          recording: {
            mode: 'automatic',
            requireSignedURLs: false,
            allowedOrigins: ['69poker.club', 'www.69poker.club'],
            hideLiveViewerCount: false,
            timeoutSeconds: 0
          },
          deleteRecordingAfterDays: current.deleteRecordingAfterDays ?? 30,
          enabled: current.enabled !== false,
          preferLowLatency: current.preferLowLatency === true
        })
      });
      return response(request, env, publicInput(env, input, await lifecycle(env, input.uid)));
    }
  }

  if (url.pathname === '/api/public/live' && request.method === 'GET') {
    const input = await findInput(env);
    return response(request, env, publicInput(env, input, input ? await lifecycle(env, input.uid) : null), 200, { 'Cache-Control': 'public, max-age=3' });
  }

  throw new ApiError(404, 'NOT_FOUND', '找不到此接口。');
}

export default {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env);
    } catch (error) {
      if (error instanceof ApiError) return response(request, env, { error: error.code, message: error.message }, error.status);
      console.error(error);
      return response(request, env, { error: 'INTERNAL_ERROR', message: '直播服务暂时无法使用。' }, 500);
    }
  }
};
