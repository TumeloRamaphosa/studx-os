# STUDX OS

STUDX OS is a local-first operating system for the STUDX portfolio: missions, ventures, agents, knowledge, infrastructure, health, content, and markets. This repository is the safe coordination layer. It stores architecture, registries, templates, and pointers—not credentials or private source datasets.

Huly is the primary STUDX OS collaboration and work layer. The local development environment runs through OrbStack using:

- the existing Huly Docker Compose stack;
- a dedicated isolated Ubuntu machine named `studx-dev`;
- `scripts/studxctl` as the management command.

Start with:

```sh
./scripts/studxctl status
./scripts/studxctl health
./scripts/studxctl shell
```

Multica containers have been removed. Its two data volumes are retained temporarily for recovery and are not attached to STUDX OS.

## Live surfaces

- [STUDEX Valley OS — Mission Control](https://k8l0cdu85cos.space.minimax.io/)
- `agents-nest/index.html` — StudEx Agents Nest cloud boardroom.
- `agents-nest/discord-hub.html` — Discord command hub for agent operations.

## Repository map

- `apps/` — user-facing operating surfaces.
- `agents/` — agent roles, boundaries, and workspace contracts.
- `brain/` — Obsidian-compatible knowledge hub.
- `data-room/` — classification and access policy; no confidential payloads.
- `projects/` — mission and venture briefs.
- `mcp/` and `cli/` — tool contracts and operator commands.
- `infrastructure/` — VM, models, data-centre, and security strategy.
- `automations/` and `cron/` — disabled-by-default schedule specifications.
- `agents-nest/` — standalone agent boardroom and Discord hub interfaces.

See `ARCHITECTURE.md` for the system design and `.env.example` for placeholder-only configuration.
