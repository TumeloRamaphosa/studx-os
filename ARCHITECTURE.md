# STUDX OS Architecture

STUDX OS is a registry-first control plane linking existing systems without copying protected data. Huly/ClickUp holds work, Obsidian/Notion/Drive hold knowledge, Gitea holds reviewed code, and Vault or the OS keychain holds secrets.

## Layers

1. Experience: command centre, daily tracker, content, markets, and health surfaces.
2. Coordination: missions, calendars, agent workspaces, task IDs, and approvals.
3. Knowledge: Obsidian brain, project briefs, and data-room indexes.
4. Execution: CLI, MCP, automations, Buzz/Discord, and deployment agents.
5. Infrastructure: laptop, Rwanda VM, approved VMs, local inference, cloud routing, and future data-centre capacity.
6. Trust: Vault/Gatekeeper, least privilege, classification, audit, and human approval gates.

Flow: `human intent → task → Gatekeeper → scoped agent/tool → system of record → audit event → brain summary`. Raw secrets never enter prompts, logs, Git, or browser APIs. Rwanda and other VMs use separate, narrowly scoped identities; production changes require recorded approval and a reversible plan.
