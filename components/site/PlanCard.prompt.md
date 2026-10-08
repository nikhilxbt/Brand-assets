Pricing/tier card for the crypto card. Real card art lives in `assets/cards/`.

```jsx
<PlanCard name="Swiss" price="$129" per="once" art="assets/cards/card-swiss.png"
  ribbon="Most popular" featured
  benefits={['Swiss IBAN in your name', '0.5% FX', 'Apple & Google Pay']} />
```

Exactly one card in a row is `featured`; only that one gets the accent CTA.
