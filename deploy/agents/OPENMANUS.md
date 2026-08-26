# OpenManus — Bare-Metal Deploy + OpenClaw Integration

> OpenManus: open-source autonomous agent loop (FoundationAgents/OpenManus, ~58k stars).
> MIT. Single-agent. NOT an OS — a worker engine. We keep OpenClaw as the OS.

## 1. Deploy on bare metal (hermes-vm recommended — active on Tailscale)

```bash
ssh hermes-vm
curl -LsSf https://astral.sh/uv/install.sh | sh
git clone https://github.com/FoundationAgents/OpenManus.git
cd OpenManus
uv venv --python 3.12 && source .venv/bin/activate
uv pip install -r requirements.txt
uvx browser-use --cli-mcp   # browser layer (default MCP server)
```

## 2. Point at OUR models (not paid OpenAI) — config/config.toml

```toml
[llm]
model = "qwen-plus"
base_url = "https://home.qwencloud.com"
api_key = "<QwenCloud key>"        # from keys/qwencloud.env
max_tokens = 4096
temperature = 0.0

# or local Ollama:
# model = "deepseek-v4-flash"  base_url = "http://<node>:11434/v1"
```

## 3. Integrate with OpenClaw fleet

### Pattern A (recommended) — subprocess worker
```bash
# ~/.openclaw/scripts/openmanus-run.sh
#!/bin/bash
cd /path/to/OpenManus && source .venv/bin/activate
python main.py "$@"
```
Agents call it for long autonomous tasks. Additive to existing MCPs.

### Pattern B — register as MCP server
Expose as MCP server, register in MCP layer (see `../mcp/MCP.md`).

## Verdict
- **Not a competitor** to OpenClaw. It's one disposable single-task runner.
- Real value: Browser Use MCP pattern + autonomous loop reference.
- Add to fleet as a worker; do NOT replace orchestration.
