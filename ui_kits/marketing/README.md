# UI Kit — Marketing site (thorwallet.org)

A recreation of the thorwallet.org home page, composed entirely from this design
system's components. Source of truth: `Thorwallet Site/index.html` + `site.css`
in the THORWallet codebase.

| File | Contents |
|---|---|
| `index.html` | Page shell: body reset, ambient mesh + grain, container/section utilities |
| `MarketingHome.jsx` | The page — Hero, ProofBand, Rails, three Feature blocks, CardPlans, RewardBand, Titn, compare table, Blog, Newsletter, FinalCta |

## Section order (as shipped)

Nav → Hero (lockup, headline, store badges, stat row, phone) → Proof band + credential
wall → Capability rails → Swaps feature → Multisig feature → Earn feature → Card plans
→ Rewards band → $TITN tiers → Compare table → Blog → Newsletter → Final CTA → Footer.

## Deliberate simplifications

The live site scroll-scrubs a 700-frame phone rotation in a 300vh sticky hero and
pins the feature sections as scrollytelling stages. The kit shows a single hero
frame and static feature blocks — the visual language is identical, the scroll
choreography is not reproduced.
