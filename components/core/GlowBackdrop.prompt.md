The brand's ambient lighting. Every dark full-bleed surface gets one.

```jsx
<section style={{ position: 'relative', background: 'var(--bg-base)' }}>
  <GlowBackdrop grid />
  <div style={{ position: 'relative', zIndex: 1 }}>…</div>
</section>
```

Blobs sit at 82%/8% and 12%/78% — deliberately off-centre and clipped by the edges.
