# UI Kit — THORWallet wallet app

Five click-through screens of the mobile wallet, composed from the `App*`
components. Source of truth: `Thorwallet Site/app-screens.css` + `app-screens.js`
(the faithful in-page recreations shipped on thorwallet.org) and the app screen
exports in `assets/screens/`.

| File | Contents |
|---|---|
| `index.html` | Device frame, ambient wash, screen picker |
| `AppKit.jsx` | `WalletScreen`, `SwapScreen`, `EarnScreen`, `MultisigScreen`, `CardScreen` |

## Interactions

- **Wallet** — Swap and Card quick actions navigate.
- **Swap** — "Review swap" submits and raises the confirmation toast.
- **Earn** — Savers / Pools / Stake tabs swap the list and the section label.
- **Create vault** — "Add device" pairs a third device and updates the signature count.
- **Card** — Freeze desaturates the card art and lights the action.

## Screen anatomy

Status bar (54) → header or tabs → 14px-padded scrolling body → 120px bottom fade →
floating bottom-nav pill 34px off the bottom, or a full-width button + home indicator
on task screens.

## Deliberate simplifications

The live app animates these screens on 8–10s loops (multisig pairing, limit-order chip
cycling, earn row reveals). Here the same states are driven by taps instead, so each
screen can be inspected at rest.
