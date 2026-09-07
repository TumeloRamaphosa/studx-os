# Launchday operating brief

Source: [Notion — Launchday](https://app.notion.com/p/3af3ef07399280639d5aed4b292ae921)

Status: draft imported into STUDX OS on 2026-09-07. Public claims remain approval-gated.

## Launch asset

A 50-second black-and-gold, futuristic, fast-cut video:

1. **0:00–0:10 — Vision:** StudEx Fleet moved from concept toward deployment in one week.
2. **0:10–0:20 — Stack:** MacBook Pro, local models, agent fleet, and self-hosted Gitea brain.
3. **0:20–0:30 — BUP Slim:** portable multi-boot development and Ollama environment.
4. **0:30–0:40 — Edge fleet:** Legion Go and MSI Claw/Bazzite/Hermes devices.
5. **0:40–0:50 — Agent fleet:** local Ollama agents, marketplace missions, and outcomes.

## Evidence gates before publication

- Confirm the exact number of installed and running local models.
- Confirm the number of provisioned, active, and healthy agents separately.
- Confirm BUP Slim capacity, boot modes, persistence, and current health.
- Confirm the named edge devices have actually joined the managed fleet.
- Demonstrate the HYRVE polling and mission lifecycle.
- Replace any revenue/payment claim with measured evidence or label it as the intended workflow.
- Correct copy and spelling in the final voice-over and captions.

## Source repositories to assess

- [FreeTodo](https://github.com/FreeU-group/FreeTodo)
- [askOkara](https://github.com/askOkara)
- [Google Cloud microservices demo](https://github.com/GoogleCloudPlatform/microservices-demo)
- [Android-Dex](https://github.com/Shrey113/Android-Dex)

These links are candidates, not approved dependencies. Complete license, maintenance, security, and architecture checks before importing code.

## Communications status

The Notion page records a StudEx Meat knowledge post intended for 09:00 SAST and states that FeedHive has returned HTTP 404 since 2026-09-01. Do not claim that the post is scheduled. Verify the connector and API endpoint, then retain the first repaired publication as a reviewed draft.

## Security incident

A Tailscale authentication key was found in plaintext on the source page and redacted. Removing it from Notion does not revoke it. Revoke the exposed key in the Tailscale admin console, review device-authentication events, and issue a new short-lived tagged key only when needed.

## Next actions

1. Revoke and rotate the exposed Tailscale key.
2. Run evidence checks for every numerical/public claim.
3. Diagnose FeedHive using a read-only probe without printing its token.
4. Turn the five blocks into an approved shot list, voice-over, captions, and asset manifest.
5. Publish only after Wensa/Meta identity and human approval are confirmed.
