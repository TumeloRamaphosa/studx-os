# studx-os — StudEx Agent Operating System

Local-first operating system for the STUDX agent portfolio.
Orchestration: OpenClaw (Mac 1) + bare-metal Tailscale mesh + QwenCloud/local inference.

## Layers
- **Orchestration OS:** OpenClaw — fleet brain, memory, skills, scheduling
- **Bare-metal mesh:** Tailscale nodes (see `nodes/NODES.md`)
- **Inference:** QwenCloud (cloud) + local Ollama/Swama MLX (bare metal)
- **Autonomous workers:** OpenManus (see `deploy/agents/`)
- **MCP catalog:** `mcp/MCP.md` (links to 131-server catalog)

## Quick links
- `docs/SEATS.md` — proposed agent seat roster (all not connected)
- `nodes/NODES.md` — bare-metal manifest
- `mcp/MCP.md` — MCP integration map
- `deploy/agents/OPENMANUS.md` — OpenManus on bare metal + integration
- `config/` — OS config snapshots
