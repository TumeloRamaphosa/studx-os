# STUDX Start Bot launch

Target checkpoint: **2026-09-07 08:00 Africa/Johannesburg (SAST)**.

The Codex scheduling service was unavailable when registration was attempted, so this document records the intended checkpoint but does not claim that an automation is active.

## Launch objective

Bring the Start Bot online as the coordinator for Huly work, Gitea code, OrbStack development, Ollama inference, Brock Bots collaboration, Wensa/Facebook drafts, and AgentMail drafts.

## Readiness checklist

- [ ] Huly responds and its data stores are healthy.
- [ ] `TumeloRamaphosa/studx-os` is synchronized in Gitea.
- [ ] OrbStack `studx-dev` accepts commands.
- [ ] Ollama API responds and an approved model is installed.
- [ ] Brock Bots repository URL and integration contract are supplied.
- [ ] Exact Wensa Meta Business/Page identities are confirmed.
- [ ] Meta token is stored in Keychain; read probe passes.
- [ ] AgentMail inbox/domain and token are confirmed.
- [ ] First Facebook and email artifacts are drafts awaiting approval.
- [ ] Audit logging and one-command disable path are tested.

## Safe launch mode

Start in observation and drafting mode. The bot can read approved operational state, propose tasks, create Huly/Gitea drafts, and report failures. External sending, publishing, spending, destructive actions, and access grants remain disabled.

## Inputs still needed

1. Brock Bots repository URL(s) and bot names.
2. Clarification of what “Wensa” is and the exact Facebook Page to connect.
3. AgentMail inbox/domain details.
4. The Ollama model name to designate as the default Start Bot model.
