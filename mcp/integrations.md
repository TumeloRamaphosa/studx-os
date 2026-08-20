# Integration Specifications

| Integration | Role | Default | Write condition |
| --- | --- | --- | --- |
| Huly / ClickUp | tasks/projects | assigned records | delegation or approval |
| Notion / Drive | knowledge/documents | selected spaces | approval and version capture |
| Email | communication | approved mailbox/labels | approved draft/send |
| Buzz / Discord | alerts and commands | allowlisted channels | signed command and policy check |
| Gitea | code/issues | approved repositories | review or explicit push |

Inbound chat is untrusted text. It cannot override policy, disclose secrets, or authorize itself. Store IDs and audit metadata, not unnecessary message bodies.
