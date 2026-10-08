# THORWallet Website

**This folder is the canonical, single source of truth for [thorwallet.org](https://www.thorwallet.org).** Every change to the live site is made here first, then deployed. Any copy of the site anywhere else (GitHub snapshot folders, other design projects, uploads) is a dead fork - do not edit those, delete them on sight.

Marketing site for thorwallet.org. Static HTML/CSS/JS, deployed on Vercel.

## Pages

| File | Route |
|---|---|
| `index.html` | Home - hero, features, swaps, card, TITN, download |
| `cards.html` | Crypto card (tiers, fees, 172 countries) |
| `swap.html` | Cross-chain swaps |
| `titn.html` | TITN token (tiers via `titn-tiers.js`) |
| `download.html` | App download (iOS / Android / Web) |
| `compare.html` | Wallet comparison hub |
| `thorwallet-vs-metamask.html` | Comparison: MetaMask |
| `thorwallet-vs-trust-wallet.html` | Comparison: Trust Wallet |
| `blog.html` | Blog (Medium feed via `medium-feed.js`) |
| `brand.html` | Public brand page |
| `careers.html` | Careers |
| `privacy-policy.html`, `terms.html` | Legal |
| `404.html` | Not found |

## Scripts & styles

- `site.css` - global styles and tokens; `app-screens.css` + `app-screens.js` - in-page phone mockups
- `site.js` - page behavior; `site-nav.js` - shared nav/footer
- `theme.js` - dark/light toggle (persisted in `localStorage` as `tw-theme`)
- `consent.js` - cookie consent, gates analytics loading
- `i18n.js` + `i18n-data*.js` - translations
- `countries.js` - card country coverage data
- `medium-feed.js` - blog feed fetch

## SEO / deploy

- `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`
- `vercel.json` + `_redirects` - hosting config
- OG images per page in `assets/og/`; favicons in `assets/favicon/`
- Structured data (Organization, WebSite, SoftwareApplication) inline in `index.html`

## Assets

`assets/` holds cards, chain logos, exchange logos, press logos, reward art, app screens, and the `rotato-hd/` + `rotato-m/` phone rotation frame sequences used in the hero.

`social/` (X/Twitter graphics) has its own README.
