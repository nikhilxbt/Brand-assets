# THORWallet Brand Book

Interactive multi-page brand guidelines. Entry point: `Thorwallet New Brand.html`.

## Pages

| File | Chapter |
|---|---|
| `Thorwallet New Brand.html` | Cover / hub - links to all chapters |
| `story.html` | Brand story, positioning, voice & tone |
| `logo.html` | Logo mark, wordmark, clearspace, misuse |
| `color.html` | Palette, gradient, ink scale, semantic colors |
| `typography.html` | Type system (OT Sono display + text styles) |
| `iconography.html` | Icon style and usage |
| `imagery.html` | Imagery direction (phone mockups, glows) |
| `ui.html` | UI components on brand (buttons, cards, chips) |
| `web.html` | Website application of the brand |
| `print.html` | Print applications |

## Shared resources

- `styles.css` - shared tokens and layout for all chapters
- `shared.js` - shared nav/behavior injected on every page
- `tweaks-panel.jsx` - in-page tweak controls (editor tooling)
- `fonts/` - OT Sono webfonts
- `assets/` - logos and imagery used by the chapters

## Editing notes

- All chapters load `styles.css` first - change tokens there, not per page.
- Keep chapter nav in `shared.js` in sync when adding/removing pages.
