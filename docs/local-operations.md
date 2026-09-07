# Local STUDX OS operations

## Current layout

```text
Mac
├── OrbStack Docker engine
│   └── Huly Compose project: huly_v7
│       └── http://127.0.0.1:8087
├── OrbStack Linux machine: studx-dev
│   ├── Ubuntu 24.04 ARM64
│   ├── 4 CPU
│   ├── 8 GB RAM
│   ├── 64 GB disk limit
│   └── isolated filesystem/integration; network enabled
└── scripts/studxctl
    ├── status / health / doctor
    ├── start / stop
    ├── shell / run
    └── huly-start / huly-stop / huly-restart / huly-logs
```

Huly is the primary workspace for projects, documents, collaboration, and work tracking. Agent runtimes and development tools should run in `studx-dev` or separate disposable OrbStack machines. Huly data stays in its Compose-managed data stores and must be backed up before upgrades.

## Management command

```sh
./scripts/studxctl status
./scripts/studxctl health
./scripts/studxctl start
./scripts/studxctl stop
./scripts/studxctl shell
./scripts/studxctl run uname -a
./scripts/studxctl huly-logs nginx
./scripts/studxctl grokbot-health
./scripts/studxctl grokbot-status
./scripts/studxctl grokbot-restart
./scripts/studxctl grokbot-logs
./scripts/studxctl doctor
```

`stop` stops only `studx-dev`; it does not stop Docker or Huly. Huly lifecycle commands use the existing Compose file at `/Users/tumeloramaphosa/huly-selfhost/compose.yml`. No command deletes machines, containers, volumes, or data.

Grokbot runs as a hardened system service inside `studx-dev`, binds only to the VM loopback interface, and reaches the Mac Ollama API through `host.internal`. External connectors remain proposal/draft-only until their scoped credentials and approvals are configured.

To roll back the service without deleting its checkout or data:

```sh
orbctl run -m studx-dev sudo systemctl disable --now grokbot
```

## Multica retirement

The former `multica` frontend, backend, and PostgreSQL containers were stopped and removed. The named volumes `multica_pgdata` and `multica_backend_uploads` remain as a rollback safeguard. They should be exported and retained for an agreed retention period before a separate explicit deletion decision.

## Huly upgrade and rollback

Before an upgrade, read the target release section in Huly's `MIGRATION.md`, take backups of CockroachDB/MinIO and the workspace export, and record the current image versions. Upgrade with an explicitly pinned production release.

If health fails after an upgrade, stop the new stack, restore the previous Compose/image pins, start the prior version, and verify `http://127.0.0.1:8087`. Do not delete or reuse data volumes until compatibility is confirmed.

## VM rollback

For risky development changes, export or clone `studx-dev` before proceeding. If it breaks, stop it and restore the clone/export under a new name. Deleting `studx-dev` is intentionally not available through `studxctl`.
