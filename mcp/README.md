# MCP Integration Contracts

MCP servers expose narrow tools for Huly, ClickUp, Notion, Drive, email, Gitea, Buzz/Discord, calendars, and infrastructure. Each declares operations, classification limits, approvals, rate limits, and audit fields.

Tools receive short-lived capabilities from Gatekeeper. Raw tokens never reach models. Failures fail closed and consequential retries require idempotency keys.
