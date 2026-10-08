# THORWallet Design System

## Overview

**THORWallet** is a self-custodial, multi-chain crypto wallet — iOS, Android, macOS and
web — built by a Swiss team and shipping since 2021. The pitch is unified access to every
major chain: native cross-chain swaps with no bridges or wrapped tokens, multi-device
multisig vaults, yield, tokenized equities, and a Swiss IBAN account with a global
Mastercard, all without giving up custody.

- **Positioning line:** "All chains. All yield. One app."
- **Site headline:** "The Best Crypto Wallet For Swaps & DeFi"
- **Website:** thorwallet.org · **Web app:** app.thorwallet.org · **Token:** $TITN

### Products represented here

| Product | Surface | Type face | Canvas |
|---|---|---|---|
| Marketing site (thorwallet.org) | `ui_kits/marketing/` | OT Sono | `#0A1A2B` navy |
| Wallet app (iOS / Android / macOS / web) | `ui_kits/app/` | Montserrat | `#121F32` slate-navy |
| Investor & report decks | `slides/` | OT Sono | `#0A1A2B` at 1920×1080 |
| Brand book | `guidelines/` | OT Sono | `#0A1A2B` |

**The app and the marketing site are deliberately different surfaces.** They share the
brand's colour logic and the mark, but not the typeface, the surface stack, the radii or
the button treatment. Do not mix their tokens.

---

## Sources

Everything here was read out of the attached **`New Thorwallet_Full/`** codebase. Paths are
recorded so a reader with access can trace any value; nothing assumes access.

| Source | Path | What it gave us |
|---|---|---|
| Marketing site (canonical) | `Thorwallet Site/site.css`, `index.html`, `site-nav.js` | All marketing tokens, nav/footer structure, component geometry, copy |
| App screen recreations | `Thorwallet Site/app-screens.css`, `app-screens.js` | Every app token and component measurement, verbatim |
| Brand book | `Thorwallet Brand/` (`styles.css`, `logo.html`, `color.html`, `typography.html`, `iconography.html`, `imagery.html`, `ui.html`, `web.html`, `print.html`) | Brand palette naming, "Signal" gradient doctrine, type rules |
| Investor deck | `Investor Deck/Card Market Deck.html` | Slide scale, deck panel tokens, glow + grid recipe, card-tier art |
| Dev fund report | `Thorchain Dev Fund Report/` | Deck confirmation |
| Previous design system | `_ds/thorwallet-design-system-019dcde9…/` | Montserrat font binaries, prior token naming |
| Brand PDF | `Brand PDF/` | `assets/logos/logo.svg` |
| App store / MDES assets | `app store/`, `MDES Assets/` | Store-listing context |

Not carried over: the `screenshots/` working folder, i18n data, analytics/GTM config, the
700-frame `rotato-hd/` hero rotation (one representative frame is in `assets/hero-phone.webp`),
and the retired "Mine Wallet" bone/coral palette found in the previous design system — the
current brand is the dark navy system in `Thorwallet Brand/styles.css`.

---

## Content fundamentals

### Voice

Confident and factual. Technically specific without jargon-flexing. The reader is a
self-sovereign crypto user who resents being sold to.

- **Person.** Always "you" / "your". The product never says "I". "We" appears only where
  the company is the actor ("We're built to take on both", "What we shipped lately") —
  never in product UI.
- **Casing.** Sentence case for body and most headlines. Title Case for feature names
  ("Native Swaps", "Swiss IBAN", "Limit Orders"). **No ALL-CAPS headlines** — the previous
  Montserrat-era brand used them; the OT Sono brand does not. Caps survive only in eyebrows
  and mono micro-labels, where they carry 0.14–0.22em tracking.
- **Sentence length.** Short. Fragments are welcome, and often the whole headline:
  "Your money. Always." / "All chains. One app." / "Spin. Win. Repeat."
- **Periods in headlines.** Yes — the full stop is part of the voice. "Swap across every
  chain." not "Swap across every chain"
- **Punctuation.** No exclamation marks anywhere. En-dashes with spaces for asides. The
  interpunct separates metadata: "App Store · 3,000+ five-star ratings".
- **Numbers.** Always concrete and always qualified. "$2.5B+" carries an info tooltip
  reading "Cumulative cross-chain volume. Variable." Estimates say so: "~$5B", "est."
  Footnotes name their sources.
- **Emoji.** Not used in product UI, headlines or marketing copy. The single exception is
  **country flag emoji** in the card-availability list.
- **Unicode as glyph.** `★` for ratings, `₿ Ξ` for token dots, `·` as a separator, `≈`
  before approximations, `−` (true minus) for negative amounts in-app.

### Naming

- **THORWallet** — one word, capital THOR, capital W. Never "Thorwallet", never "THORwallet".
- **$TITN** — always with the dollar sign in marketing, `TITN` bare in tables.
- Chains use official casing: Bitcoin, Ethereum, Solana, Cosmos, BNB Chain, Stellar, Sui.
- Card tiers are single words: Basic, Premium, Swiss — or Orange, Green, Metal, Gold.

### Copy specimens

> "The Best Crypto Wallet For Swaps & DeFi"
> "All-in-one mobile DeFi wallet app. Swap BTC, ETH, SOL & more easily."
> "Swap across every chain." / "One tap, best rate, no bridges."
> "Your money. Always."
> "No bridges, no wrapped assets — real native settlement across every major chain."
> "Aggregated liquidity finds the best path automatically — gasless on supported routes."
> "Your keys never leave your phone."
> "Backed and recognised by"
> "Volume = annualized run-rates. Figures estimated where not disclosed."

In-app copy is shorter still and never explains itself: "Paste", "Max", "Review swap",
"Pair at least 2 devices", "Limit order placed".

---

## Visual foundations

### Colour

Three ideas: a **deep navy canvas**, one **royal blue** for action, and the **Signal
gradient** as the brand's light source.

- **Canvas.** `#0A1A2B` base → `#0E2233` elevated → `#142A40` surface → `#1A3450` surface-2.
  A four-step stack; anything raised moves one step up, never onto grey.
- **Signal.** `linear-gradient(120deg, #00CCFF 0%, #19DAC8 52%, #33FF99 100%)`. It is the
  mark, the app icon, gradient-clipped headline keywords, the featured ribbon, one hero CTA,
  and every ambient glow. Solid stand-in `#1FD9A6` for icons and small text.
- **Royal blue** `#2A6BF2` (`#2A7AF7` in-app) is *every* primary button. Blue means "do the
  thing"; the gradient means "this is THORWallet". They are never interchangeable — the app
  in particular must never show a gradient button.
- **Ink** is a cool white scale, not grey: `#FFFFFF` → `#C5D2DE` → `#8A9DB0` → `#5F7286`.
- **Semantic.** success `#33E0A0` · warning `#E7A23C` · danger `#E2603F` · info `#57A4FF` ·
  gold `#D4AF37`. In-app value colours are their own pair: up `#77FCBD`, down `#ED6A6A`.
- **Chain accents** are the chains' own brand colours, used only for dots and badges.
- **Card-tier art** carries the only saturated non-brand gradients: sunrise magenta
  `#F0531F→#B0186A`, pine teal `#14534A→#0A2A24`, electric blue `#3B82F6→#1D3FB0`.
- **Light theme** exists on the site (`[data-theme="light"]`, persisted as `tw-theme`):
  white canvas, navy ink, accents deepened to `#0C9E73` for contrast, monochrome logos
  flipped from white to black. There is no light theme in the app.
- **Two background colours per artefact, maximum** — base and one elevated step.

### Type

**OT Sono is the only typeface on brand surfaces** — display, body and the "mono" role all
resolve to it. There is no separate mono family; `--font-mono` is Sono with tabular numerals,
and the mono *role* is signalled by uppercasing and tracking, not by a different font. Three
weights ship: 400, 500, 600. **600 is the display weight** — there is no bold.

- Display `clamp(3rem → 6.5rem)`, −0.03em, 0.95 leading. H1 `clamp(2.3 → 4.2rem)`, −0.02em.
- Lede `clamp(1.1 → 1.45rem)` at 1.45; body `1.0625rem` at 1.6; caption `0.8125rem`.
- Eyebrows: 13px, weight 500, **0.22em** tracking, uppercase, `--text-low` (or accent, with
  a gradient dot, on slides).
- Body letter-spacing is a hair negative (−0.005em) everywhere.
- At ≥1600px the whole scale steps up via the tokens; nothing is hard-coded per breakpoint.
- **Montserrat is app-only**, weights 300–900, used at 10–32px. Row titles are 14/700,
  subs 11.5/500, balances 32/600, nav labels 11/600.

### Backgrounds and texture

- No photography. No illustration — except the reward art (below).
- **Ambient mesh:** two fixed radial blobs, cyan at 82%/8% and green at 12%/78%, both
  clipped by the viewport edge. Never centred, never symmetrical.
- **Grain:** a fractal-noise SVG at 3.5% opacity, fixed over the whole page (1.8% in light).
- **Grid:** slides add a 64px grid at `rgba(255,255,255,0.017)`. The site does not.
- **Section-level glows** are heavier: 110px blur, 500–900px blobs, seeded per section.
- Full-bleed treatment is reserved for the hero and the final CTA; everything between sits
  in a 1320px container with a fluid 20–80px gutter.

### Imagery

Phone mockups are the only imagery. A squircle frame (`border-radius: 14% / 6.5%`,
`#05101A` body, 1px hairline, 2.6% bezel) with an accent glow behind it, holding a real app
screen. The site's hero scroll-scrubs a 700-frame device rotation; decks use the frame
static and upright. Colour vibe is uniformly dark, teal-shifted and cool; the only warmth in
the system is the card art and the gold tier.

**Reward art** is the one exception: 3D-rendered game-style objects — spin wheel, mascot,
gold chest, moneybag, potion — used exclusively inside the Rewards band. Copy them from
`assets/reward/`; never redraw or regenerate them.

### Cards and surfaces

Every card is: `--surface` fill, `1px solid rgba(255,255,255,0.08)`, radius 16–24px, and an
`inset 0 1px 0 rgba(255,255,255,0.04)` top highlight. **The inset hairline is the depth cue,
not a drop shadow.** Outer shadow appears only on floating things (device frames, dropdowns,
deck panels) as `0 24px 70px -24px rgba(0,0,0,0.7)`.

A *featured* card swaps the hairline for `--accent-line` and adds `0 0 80px -30px` of accent
glow — a light leak, not a border.

In-app cards are tighter: `#18293D` on a `#1C3046` hairline at 16px, `#1C3046` on `#243A54`
for inputs and elevated fills, and no shadows at all.

### Borders and radii

Borders are always white-alpha, never a grey hex: 8% default, 15% strong, and
`rgba(0,204,255,0.30)` for accent. Marketing radii are 12 / 16 / 24 / 32; the app runs
tighter at 10 / 12 / 14 / 16 with 20px sheets and a 44px device corner. Pills (999px) carry
every button, chip and badge.

### Buttons and states

- Primary: blue fill, white text, `0 10px 30px -12px rgba(42,107,242,0.7)`.
- Accent: Signal gradient, `#06241B` ink, wide glow, `background-size: 160%` drifting on an
  8s alternating loop. One per view.
- Ghost: transparent, 15%-white border.
- **Hover** lifts by `translateY(-2px)` and deepens the glow; blue brightens to `#3D80FF`;
  ghost fills to `--surface-2`. Cards lift 4px and switch their hairline to accent.
- **Press** has no separate treatment — hover simply stops. Nothing shrinks or bounces.
- **Focus** is `0 0 0 2px rgba(49,253,157,0.24)`; inputs swap their border to `--accent-line`.
- **Disabled** is 0.5 opacity with pointer events off.
- In-app: no hover at all (touch surface). Active states are colour only — `#57A4FF` text
  plus a 14%-blue pill, or a 2.5px inset underline on tabs.

### Motion

One easing, `cubic-bezier(0.22, 1, 0.36, 1)`, plus the brand-book variant
`cubic-bezier(0.2, 0.8, 0.2, 1)`. Durations 180ms micro / 440ms default / 700ms reveal.
Reveals fade up 24px. Nothing bounces, nothing overshoots, nothing springs. Slide content
fades up 14px in a 50ms-stepped cascade. In-app loops run 8–10s and are always
`prefers-reduced-motion`-gated with a defined static end-state.

### Transparency and blur

Blur is reserved for things floating over content: the nav (`blur(20px) saturate(140%)` over
72%-navy), dropdowns and language menus (96–97% panel fill), the mobile menu, store badges
(8px), and the app's bottom-nav pill (8px over 92% card). Glow blobs use 40–110px blur.
Everything else is opaque. Content that scrolls under a floating element gets a 120px
gradient fade rather than a hard edge.

### Layout rules

Container 1320px (1560px ≥1600px), gutter `clamp(20px, 5vw, 80px)`, section rhythm
`clamp(96px, 12vw, 184px)`. The nav is fixed; the hero and pinned feature stages are sticky.
Hairline-gridded rows (rails, stat bands) use `gap: 1px` on a hairline background so the
dividers *are* the gaps. Slides are 1920×1080 with 88/66px padding. App screens are 375×812
with 14px side padding and 6–12px between list items.

---

## Iconography

- **No icon font, no icon sprite, no PNG icons.** Every icon is an inline SVG.
- The house style is a **24×24 box, `fill="none"`, `stroke="currentColor"`,
  `stroke-width="2"`, round caps and joins** — geometrically identical to
  [Lucide](https://lucide.dev). The codebase hand-authors its icons in that style rather
  than importing a set. **Recommendation: use Lucide** (`https://unpkg.com/lucide-static`)
  for anything not already in the codebase; it drops in without a visual seam. *This is a
  substitution — the source ships no icon library, so nothing is being replaced, but Lucide
  is our inference from the geometry rather than a documented decision.*
- Icons render at 14–20px on the site and 15–24px in-app, always in `currentColor` so they
  inherit the text colour they sit beside.
- **CSS-masked SVG** is used where an icon must take a token colour as a background: the
  benefit-list tick and the comparison-table win marker are `-webkit-mask` data-URIs filled
  with `--accent-solid`.
- **Brand SVGs:** the Apple and Google Play glyphs are inlined as single paths inside
  `StoreBadge` (copied verbatim from the site). `assets/logos/logo.svg` is the mark as a
  raw path.
- **Logo files** are PNG, not SVG: gradient lockup, white knockout, ink (for light
  backgrounds), and the mark alone in the same three finishes. The mark is never outlined
  and never recoloured outside those three finishes.
- **Chain and token marks** are real PNG/WebP logos in `assets/chains/`, shown as 40–56px
  circles with a hairline. When a real logo isn't available the app falls back to a letter
  or currency glyph in a token dot — never a hand-drawn approximation.
- **Credential logos** are forced monochrome white at 80% opacity
  (`filter: brightness(0) invert(1)`) so a row of mixed brands reads as one object.
- **Emoji:** only country flags, only in the card-availability list.

---

## File index

```
styles.css                  Global entry — @import list only
tokens/
  fonts.css                 @font-face for OT Sono + Montserrat
  colors.css                Canvas, Signal, blue, ink, semantic, chains, card art, light theme
  typography.css            OT Sono roles, fluid scale, tracking, deck scale
  spacing.css               4px grid, radii, container/gutter/section rhythm
  effects.css               Shadows, glows, mesh, grain, grid, easing, durations
  app.css                   Wallet-app tokens (Montserrat, #121F32 stack) — app only
fonts/                      OT Sono ×3 (.otf), Montserrat ×7 (.ttf)
assets/
  logos/                    Lockups (gradient/white/ink), marks, app icon, logo.svg
  chains/                   BTC ETH SOL BNB SUI XLM
  cards/                    Card art: basic, premium, swiss, hero + Orange/Green/Metal/Gold
  screens/                  App screen exports: wallet swap earn multisig limit stocks
  reward/                   3D reward art: wheel, spin-wheel, free-spin, mascot, chests, moneybag, potion
  press/                    Pegasus, Venture Leaders, CVA, Cointelegraph Accelerator, CoinMarketCap
  exchanges/                Binance, Coinbase, Gate, MEXC, Aerodrome
  hero-phone.webp           Representative hero device frame
  og-cover.png              Social cover
  titn-token.webp           $TITN coin
guidelines/                 28 foundation specimen cards (Colors, Type, Spacing, Brand)
components/core/            Brand-agnostic primitives
components/site/            Marketing-site components
components/app/             Wallet-app components
ui_kits/marketing/          thorwallet.org home page recreation
ui_kits/app/                Wallet app click-through (5 screens)
slides/                     Six 1920×1080 slide specimens + slides.css
templates/marketing-page/   Starting point: marketing section stack
templates/wallet-screen/    Starting point: app screen in a device frame
templates/deck/             Starting point: five-slide deck on deck-stage
reference/thorwallet-site/  The complete production thorwallet.org (14 pages) — primary reference
thumbnail.html              Homepage tile
SKILL.md                    Agent-skill entry point
```

## Components

**`components/core/`** — Button · Eyebrow · AccentText · Chip · Surface · StatTile ·
StoreBadge · DeviceFrame · GlowBackdrop

**`components/site/`** — SiteNav · SiteFooter · SectionHead · FeaturePoint ·
CapabilityRail · PlanCard · PostCard · DataTable · TierRow · CountryRow · FaqItem ·
RewardBand · NewsletterBand · LogoWall

**`components/app/`** — AppScreen (with AppStatusBar, AppBackHeader, AppHomeIndicator) ·
AppCard · AppButton · AppListRow · AppTokenPill · AppAmountField · AppInputField ·
AppSearchBar (with AppIconButton) · AppTabs (with AppChip) · AppBottomNav ·
AppToast (with AppSheet) · AppBanner

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one
`@dsCard`-tagged specimen HTML.

### Intentional additions

The codebase is plain HTML/CSS/JS with no React component library, so the inventory above
was derived from the CSS class families actually shipped in `site.css` and
`app-screens.css` — one component per family. Three items are compositional wrappers with
no single class of their own:

- **Surface** — the `.point` / `.stat-tile` / `.plan` / `.tnsl` / `.news` card recipe,
  which is one identical treatment repeated across the stylesheet.
- **GlowBackdrop** — the `body::before` / `body::after` / `.grid-ov` / `.glow` stack,
  packaged so it can sit inside a section rather than only on `<body>`.
- **AppScreen** — the `.as-root` shell plus its `.as-status` / `.as-back` / `.as-home`
  chrome, which the source defines as loose selectors rather than a component.

## UI kits

- **`ui_kits/marketing/`** — the thorwallet.org home page: hero, proof band, credential
  wall, capability rails, three feature blocks, card plans, rewards band, $TITN tiers,
  comparison table, blog, newsletter, final CTA, footer.
- **`ui_kits/app/`** — five interactive wallet screens: Wallet, Swap, Earn, Create vault
  (multisig) and Card.

Both kits document their own simplifications in their READMEs.

## Templates

Three starting points a consuming project can copy and fill in. Each loads this system
via its own `ds-base.js` — one line to repoint at the bound `_ds/` folder.

| Template | Use it for |
|---|---|
| **Marketing page** (`templates/marketing-page/`) | Any thorwallet.org-style page: hero, proof band, capability rails, feature block, final CTA, footer |
| **Wallet app screen** (`templates/wallet-screen/`) | Any app mock — a 375×812 screen inside the device frame, with status bar, balance, asset rows and bottom nav |
| **Slide deck** (`templates/deck/`) | Investor and report decks — five slide types on `deck-stage`, print/PDF-ready |

## Working with this system

1. **Pick the surface first.** Marketing/deck/brand → OT Sono, `--bg-base`, marketing
   tokens. Wallet UI → Montserrat, `--app-*` tokens. Never blend the two.
2. **One accent CTA per view.** Everything else primary blue or ghost.
3. **One gradient keyword per headline.** Gradient or outline, never both.
4. **Depth is glow and inset hairlines**, not drop shadows.
5. **Copy real assets in.** Card art, chain marks, reward art and screens all exist —
   never redraw, regenerate or approximate them.
6. **No emoji** outside the country-flag list.
