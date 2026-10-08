repo: THORWallet/designs
branch: main
path: TW/New Thorwallet-3

## Last sync
date: 2026-08-25T11:54:27Z

### Updated in this project
- Replaced the reference site copy (`reference/thorwallet-site/`) with the exact GitHub source: all top-level pages/scripts, plus previously-missing `assets/logos/`, `assets/og/`, `assets/favicon/` and the `social/` export folder.
- Restored the full hero device-rotation sequences (498 HD frames + 127 mobile frames) — `site.js` now scrubs the complete GitHub sequence instead of a sparse subset.
- Local additions not in the repo (kept as-is): `api/` (agent-readiness JSON datasets), `tests/agent-readiness.test.mjs`, `about.html`, `membership-terms.html`, `card-country-availability.md`, `SITE-README.md`, `_redirects`, `site.webmanifest` — plus an Oman addition to `countries.js` / `api/card-countries.json` not yet upstreamed.

## Screen map
| Project location | Repo source |
|---|---|
| `reference/thorwallet-site/*.html`, `*.js`, `*.css` | `Thorwallet Site/*.html`, `*.js`, `*.css` |
| `reference/thorwallet-site/assets/` | `Thorwallet Site/assets/` |
| `reference/thorwallet-site/fonts/` | `Thorwallet Site/fonts/` |
| `reference/thorwallet-site/social/` | `Thorwallet Site/social/` |
| Design-system tokens (`tokens/*.css`), components, UI kits, slides, templates | Authored from `Thorwallet Brand/` + `Thorwallet Site/` (brand book + site), not a 1:1 file mirror |
