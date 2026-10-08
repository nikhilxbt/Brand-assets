# THORWallet first top-up email

Subject: **Forgot to top up your THORWallet Card?**

Preheader: **0% USDC top-up fee. A competitive 1.5% FX markup. Cashback is on the way.**

Audience: people with an approved THORWallet Card application, no successful card top-up, and an eligible marketing subscription. Refresh the segment immediately before sending so people who already funded their card are excluded.

## Review

- `preview.html`: sample recipient Alex; follows the browser's theme.
One email automatically adapts to the reader’s light or dark mode. The light/dark files in the working folder are internal QA previews, not separate send versions.
- `listmonk-campaign.html`: complete email for Listmonk's raw HTML campaign editor.
- `listmonk-base.html`: pass-through campaign template.
- `plain-text.txt`: alternate plain-text body.

- `assets/`: original card PNGs, brand mark, and optional OT Sono fonts.

Preview links are for review, not sending. The preview unsubscribe link does not unsubscribe anyone.

## Listmonk setup

1. Upload the contents of `assets/` to a public HTTPS image host. GitHub Pages is suitable if already configured. Use direct asset URLs, not GitHub repository `/blob/` pages. Images must load without authentication. Fonts are optional; the email falls back to Arial/Helvetica where web fonts are unsupported. Only publish fonts if your font license permits hosting.
2. In `listmonk-campaign.html`, replace every `https://YOUR-ASSET-HOST.example/thorwallet-card` with the public asset folder URL, without a trailing slash. Replace `[ADD SENDER POSTAL ADDRESS]` with the sender's correct mailing address, including in the plain-text version.
3. Create a campaign template containing the exact contents of `listmonk-base.html`. It contains `{{ template "content" . }}` once. Select it for this campaign.
4. Paste `listmonk-campaign.html` into the campaign's raw HTML source editor. Do not paste it inside the default template's additional HTML wrapper. Use the subject above and `plain-text.txt` as the alternate body. The HTML already contains a hidden preheader.
5. Names use `{{ .Subscriber.FirstName }}` with a `there` fallback. Listmonk supplies `{{ UnsubscribeURL }}` and `{{ MessageURL }}`. Do not manually replace those functions.
6. The CTA uses `https://referral.thorwallet.org/oYHz/website`, the app link in the supplied THORWallet download-page source. It is left unwrapped by click tracking. Test installed-app opening on iOS and Android; desktop redirects and install fallbacks depend on the link provider. A browser preview cannot confirm native app launch. Replace both CTA URL occurrences (HTML and Outlook VML) if your team has a preferred app link, and update the plain-text body too.
7. Send internal tests from Listmonk to Gmail, Apple Mail and Outlook, including mobile dark mode. Check name fallback, images, CTA and unsubscribe. The template has not been sent or rendered in real inboxes in this task.

## Compatibility

Fluid 600px table layout, inline core styling, explicit image dimensions, mobile padding/type adjustments, native light/dark CSS, Outlook dark-mode hooks, and an Outlook VML button. All meaningful text and the CTA remain readable when images are blocked. No script, flexbox, grid, SVG or base64 images are used in the email. Rounded corners, gradients and web fonts degrade gracefully in older clients.

The hero stays dark while the reading panel adapts to light or dark. Some Gmail and Outlook variants automatically invert colors and ignore author dark-mode rules; exact colors cannot be guaranteed without real client tests. Hosting images prevents broken local paths and keeps image pixels stable, but does not control HTML color inversion. The supplied images are original transparent assets; their backgrounds are provided by the email.

## Copy and source notes

The USDC top-up fee and 1.5% FX markup were checked against the supplied [THORWallet Card FAQ](https://faqs.thorwallet.org/thorwallet-card). The user’s 8 October 2026 update supersedes the FAQ on launch status: Premium is not launched, and a new cashback program is being finalised. This email contains no Premium offer, cashback rate, eligibility promise or launch date. “Competitive” follows the campaign brief; it is not a claim to have the lowest FX fees. Card art uses the orange Mastercard and the matching angled card asset.

[Listmonk templating documentation](https://listmonk.app/docs/templating/) supplied the personalization and footer expressions. The bundled design system supplied fonts, color tokens and card assets. No earlier email examples were available, so the copy follows the documented concise brand voice.

The two orange card illustrations are marketing art. The single send file is `listmonk-campaign.html`; `preview.html` resolves sample data and local assets for review only.
