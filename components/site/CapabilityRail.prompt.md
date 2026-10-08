The site's editorial three-up capability row (the "Five Rails" pattern in the brand book).

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--hairline)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
  <CapabilityRail number="01" name="Native cross-chain" desc="No bridges, no wrapped assets." factKey="Volume" factValue="$2.5B+" />
</div>
```
