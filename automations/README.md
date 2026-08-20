# Automations and Cron Schedules

Automations are disabled by default. Activate only after connector, timezone, owner, failure policy, and approval behavior are reviewed.

- Daily: mission brief and health reminder.
- Weekdays: Rwanda stand-up preparation and content queue review.
- Weekly: portfolio review, access anomaly review, backup verification, and markets digest.
- Monthly: Rwanda steering pack, Africa readiness, capability audit, and model-cost review.

Use `cron/jobs.example.json` as the machine-readable template. Jobs must be idempotent, observable, and safe to retry.
