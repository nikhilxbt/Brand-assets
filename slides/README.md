# Slide templates

Six slide types matching the THORWallet investor decks (`Investor Deck/Card Market Deck.html`,
`Thorchain Dev Fund Report/`). Each file is a standalone 1920×1080 stage scaled into a
1280×720 frame by `slides.css`.

| File | Type |
|---|---|
| `01-title.html` | Cover — gradient lockup, three-line display headline, meta rule |
| `02-stat-chart.html` | Stat chips + bar-chart panel + callout panel (the workhorse) |
| `03-card-ladder.html` | Light product tiles on the dark deck |
| `04-big-quote.html` | One-sentence statement, centred, single centre glow |
| `05-two-column.html` | Editorial copy + numbered points against a device |
| `06-table.html` | Data table on a deck panel |

## Rules

- Grid overlay + two corner glow blobs on every slide (the statement slide uses one centre blob).
- Eyebrow top-left with a gradient dot; white logo lockup top-right; footnote bottom-left.
- 88px horizontal / 66px vertical padding. Title 62px (96–112px on cover and statement slides).
- Exactly one gradient keyword per headline.
- Panels are `--deck-panel` (#0F2438) at 22px radius with a 9%-white hairline.
- Light `#FBFDFC` tiles are the only inverted surface in a deck — reserved for product cards.
