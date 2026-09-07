# Integration Guide

## Connection pattern

Each connector has four layers: local configuration, secret reference, read probe, and approved write action. The dashboard currently exposes configuration state only.

## Secret storage

Store tokens in macOS Keychain using stable names from `.env.example`. Never paste a secret into JSON, Markdown, a cron file, or a Git remote URL.

## Systems

- Huly / ClickUp: tasks and operational IDs.
- Notion / Obsidian: durable knowledge.
- Google Drive: canonical files and shared folders.
- Gmail: correspondence links and message IDs.
- GitHub / Gitea: repositories, issues, pull requests, releases.
- Base44: apps and agents when an API or exported project is available.
- Ollama: preferred local inference route for private or low-cost agent work. OpenAI remains an optional fallback, not a requirement for the STUDX app.
- Brock Bots: onboard through a repository and a declared agent contract. Do not copy credentials or private chat context between bot systems.
- Wensa / Facebook: draft content first, identify the exact Meta Business/Page assets, then publish only after human approval. Tokens stay in Keychain.
- AgentMail: create drafts and record message IDs; sending remains approval-gated until inbox, domain, recipients, and suppression handling are verified.

Writes remain approval-gated until a specific workflow is delegated.

## Brock Bots onboarding contract

Each bot repository must declare an owner, purpose, allowed repositories, model provider, required secrets by reference, permitted tools, network destinations, approval boundary, health check, and rollback/disable command. Brock Bots receive task-scoped access; they do not receive the entire STUDX brain or unrestricted host access.

## Wensa / Meta launch gate

Before connecting Facebook, confirm the exact Wensa Page and Business portfolio, create a least-privilege Meta system user, store its token under `studx/meta/system-user-token`, and test read-only access. First publication must be a reviewed draft. Customer identifiers must be masked in logs; bulk WhatsApp or Facebook sends require separate explicit approval.

## Start Bot launch gate

The Start Bot may report readiness and create drafts at launch. It may not send email, publish social content, spend money, create cloud resources, or grant another bot access without an approved action. Required checks: Huly HTTP, Gitea repository, OrbStack `studx-dev`, Ollama model/API, Brock Bots repository, Meta asset identity, AgentMail inbox/domain, telemetry, and rollback.
