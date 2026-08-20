# STUDX Workspace Build Plan

## Objective

Build a local-first STUDX operating workspace that discovers and links the user's existing estate without moving source files or exposing credentials.

## Guardrails

- Never copy secrets, token stores, browser profiles, or credential files into the workspace.
- Treat `sources/` as read-only.
- Use metadata links to existing projects. Do not reorganize the user's home directory automatically.
- Keep integrations disabled until explicitly configured through local secret storage.
- Prefer local inference for private work; require approval before cloud actions.

## Phases

- [x] Resolve ambiguous product/model names.
- [x] Inventory the local machine and relevant project roots.
- [x] Define the operating model, roles, permissions, and system registry.
- [x] Build the local dashboard and read-only registry API.
- [x] Add workspace scanner, integration checks, model routing, and cron templates.
- [x] Add Obsidian brain and data-room structures.
- [x] Verify functionality, security boundaries, responsive layout, and visual quality.
- [x] Record final setup and remaining credential-dependent connections.

## Verification record

- Automated tests: 3/3 passing.
- JavaScript syntax: server and client passing.
- Desktop browser: project registry, counts, modal, and connector/model state rendered.
- Mobile browser: 390 × 844 responsive breakpoint passed with no horizontal overflow.
- Security: API output omits secret references and sends restrictive browser headers.

## Architecture decision

One operating shell, multiple systems of record:

- STUDX Workspace: navigation, status, policy, and registry.
- ClickUp/Huly: operational work and task IDs.
- Notion/Obsidian/Drive: durable knowledge and documents.
- GitHub/Gitea: code state.
- Gmail: communications.
- Base44: agent/app integration when a project or API is present.
- Ollama/MLX/Bionic: local inference surfaces.

The workspace stores pointers and health state, not duplicated business data.
