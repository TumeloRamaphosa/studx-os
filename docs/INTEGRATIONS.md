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

Writes remain approval-gated until a specific workflow is delegated.
