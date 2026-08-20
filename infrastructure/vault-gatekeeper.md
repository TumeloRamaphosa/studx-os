# Vault and Gatekeeper Security Model

Vault stores encrypted secrets and issues short-lived credentials. Gatekeeper evaluates identity, task scope, data class, environment, approval, budget, and risk before tool execution.

Controls: deny by default, separate identities, no raw-secret return, just-in-time grants, rotation, revocation, immutable audit, rate limits, network boundaries, and reviewed break-glass access. Git contains symbolic secret references and placeholders only.
