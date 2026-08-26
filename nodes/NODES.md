# Bare-Metal Node Manifest (Tailscale mesh)

> Status: captured 2026-08-26. IPs are Tailscale (100.x). `active` = reachable now.

## Online / candidates
| Node | Tailscale IP | OS | Role | Status |
|------|-------------|-----|------|--------|
| macbook-pro-5 | 100.95.66.29 | macOS | **Orchestrator (Mac 1 / OpenClaw)** | active |
| hermes-vm | cloud-pc-eddxx0kt | linux | Hermes cloud + OpenManus worker | active (relay) |
| superagent-command-center | 100.96.194.88 | linux | command center | reachable |
| orgo-desktop-1 | 100.90.182.113 | linux | Orgo | reachable |

## Offline (bring back for bare-metal inference mesh)
| Node | Tailscale IP | OS | Intended role |
|------|-------------|-----|---------------|
| dark-factory | 100.93.37.55 | linux | local LLM (Ollama) inference |
| dark-factory-vm | 100.122.193.50 | linux | inference VM |
| sapien | 100.77.156.77 | windows | convert→Linux, local inference |
| msi | 100.124.221.122 | windows | convert→Linux, local inference |
| razor-blade | 100.115.114.4 | windows | worker |
| naledi-cmo | 100.91.156.104 | linux | Naledi CMO agent host |
| lyra-agent | 100.119.30.74 | linux | worker |
| robusca-sandbox | 100.67.168.127 | linux | sandbox |
| maxclaw-vpm4p | 100.121.69.92 | linux | worker |
| maxhermes-n75kw | 100.101.200.59 | linux | Hermes fleet |

## SSH aliases (~/.ssh/config)
- `hermes-vm` → cloud-pc-eddxx0kt
- `hermes-vm-public` → 35.196.24.245

## Targets
- Deploy OpenManus on `hermes-vm`
- Convert `sapien` + `msi` to Linux for local Ollama inference mesh (cuts API cost)
