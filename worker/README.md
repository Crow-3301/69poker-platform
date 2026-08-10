# 69Poker Live API

Cloudflare Worker for the 69Poker OBS broadcast console. It creates one reusable Cloudflare Stream live input, protects its RTMPS credentials behind an admin session, and exposes only safe playback status to viewers.

## Required Worker secrets

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN` with Stream Read and Stream Write permissions
- `CLOUDFLARE_CUSTOMER_CODE` from the Stream dashboard
- `ADMIN_PASSWORD`
- `SESSION_SECRET` (a long random value)

Set each production value with `wrangler secret put NAME`. Never add actual values to `.dev.vars.example` or commit them.

## Routes

- `GET /api/health`
- `GET /api/public/live`
- `POST /api/admin/login`
- `GET /api/admin/credentials`
- `GET /api/admin/status`
- `PUT /api/admin/settings`

The first authenticated credentials request creates the reusable `69poker-main` live input if it does not exist. OBS starts and stops the public broadcast by starting and stopping its stream.
