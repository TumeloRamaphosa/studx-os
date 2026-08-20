# STUDX OS local control plane

Huly is the primary STUDX OS collaboration and work layer. The local development environment runs through OrbStack using:

- the existing Huly Docker Compose stack;
- a dedicated isolated Ubuntu machine named `studx-dev`;
- `scripts/studxctl` as the management command.

Start with:

```sh
./scripts/studxctl status
./scripts/studxctl health
./scripts/studxctl shell
```

Multica containers have been removed. Its two data volumes are retained temporarily for recovery and are not attached to STUDX OS.
