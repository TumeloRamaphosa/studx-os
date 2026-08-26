# MCP Integration Map

## Catalog
Full catalog: `skills/openclaw-api-list/MCP-SERVERS-APIS-(131)/` (131 servers).
Builder tooling: `mcp-builder`, `mcp-developer` skills.

## Core MCPs in use
- **browser-use** — browser automation (also OpenManus's default MCP server)
- **context7** — code docs (60K+ stars)
- **orgo-mcp** — orchestrate Orgo VMs
- **hermes-mcp** — delegate cron/web/email/docs to local Hermes
- **n8n-mcp** — workflow automation

## Adding OpenManus as MCP capability
OpenManus = autonomous task-loop agent (plan → tool-call → act → repeat).
It is **additive** to the above — none conflict.

### Pattern A (recommended): subprocess worker
Wrap as CLI, agents call via exec:
```bash
# ~/.openclaw/scripts/openmanus-run.sh
#!/bin/bash
cd /path/to/OpenManus && source .venv/bin/activate
python main.py "$@"
```
Use: long-running autonomous research/report tasks. Fleet stays the OS; OpenManus is one tool.

### Pattern B: register as MCP server
Expose OpenManus as an MCP server on the node, register in the MCP layer so
any agent can call it for agentic tasks. Use `mcp-developer`/`mcp-builder` skills.

## Inference routing (avoid paid API)
- Cloud: QwenCloud (`home.qwencloud.com`) — Qwen-Turbo/Plus/Max, free tokens
- Local: Ollama (`ollama/deepseek-v4-flash:cloud` primary) + Swama MLX (M1 Max)
- Point OpenManus at QwenCloud or local Ollama in `config/config.toml`
