# Local and Cloud Model Routing

1. Route private, offline, draft, and code-index work to capable local Ollama or MLX models.
2. Use cloud models only after classification and provider-policy checks.
3. Redact unnecessary personal/confidential fields before cloud calls.
4. Require approval for high-cost runs, protected-data exceptions, and external effects.
5. Log model, purpose, data class, cost estimate, and decision—not prompt secrets.

Fallbacks use another allowed model or human review; they never bypass classification.
