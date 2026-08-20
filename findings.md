# Findings

## Name resolution

### Ornith

The strongest match is **DeepReinforce Ornith 1.0**, an MIT-licensed family of agentic coding models. The practical Mac option is the 9B GGUF through Ollama or llama.cpp. The 35B and 397B variants are not sensible defaults for a 32 GB M1 Max.

### Bionic

The strongest match is **LM Studio Bionic**, a separate LM Studio agent app that can use cloud, local, or remote models. It is not required for STUDX inference because Ollama and MLX are already installed, but it can be registered as an optional human-facing client.

### Facebook / Meta model

Two current candidates exist:

- **Llama**: installable/open-weight model family suitable for local inference. Llama 3.2 1B/3B remains the most device-oriented official option.
- **Muse Spark**: Meta's newer hosted multimodal reasoning model. It is not currently a local downloadable model and therefore cannot be installed into Bionic/Ollama as a local model.

Decision: register Llama as the local Meta route and Muse Spark as cloud-only/pending. Do not download a large model without user approval.

## Machine inventory

- Apple M1 Max, 32 GB RAM.
- Installed: Node, npm, Bun, Docker, Ollama, MLX, Obsidian, GitHub CLI, Claude CLI.
- Ollama is installed but its local service was not reachable from the current sandboxed session.
- The current project mirror contained no application code.

## Existing STUDX estate

High-value roots discovered without reading secrets:

- `~/studex-command-center`
- `~/command-center`
- `~/studex-mission-control`
- `~/studex-nexus`
- `~/StudEx-Valley-OS`
- `~/huly-selfhost`
- `~/Projects/data-room`
- `~/Projects/model-warehouse`
- `~/Projects/studex-agent-ecosystem`
- `~/obsidian-second-brain`
- `~/Documents/Obsidian Vault`
- `~/Desktop/studex-content-hub`
- `~/robusca-platform/mobile/StudExOS`
- `~/studex-hedge-fund-os`
- `~/studex-coffee-agents`
- `~/studex-auto-meat`
- `~/hermes-workspace`
- `~/studex-orchestrator`
- `~/agent-ops`
- `~/agents-dr`

There are many duplicates and experiments. Automatic consolidation would risk overwriting active work. This build uses a curated registry and a read-only discovery report.

## Security decision

The workspace will never ingest `.env`, keychains, OAuth token files, or the existing `studex-api-keys` repository. Integrations expose configuration state only. Secrets belong in macOS Keychain or another local secret broker and are referenced by key name.
