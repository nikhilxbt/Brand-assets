Marketing-surface button — use for every CTA on the site, brand book, deck or landing page (the app has its own `AppButton`).

```jsx
<Button variant="accent" href="/download">Get THORWallet</Button>
<Button variant="ghost" size="sm">Read the docs</Button>
```

- `primary` — royal blue `--blue`, blue drop-glow. The workhorse.
- `accent` — Signal cyan→green gradient with `--on-accent` (#06241B) ink. **One per view, max.**
- `ghost` — transparent with a `--hairline-strong` border. Secondary actions.
- Never use the gradient variant inside app UI; the app's primary is solid `#2A7AF7`.
