import React from 'react';
import { Surface } from '../core/Surface.jsx';
import { Button } from '../core/Button.jsx';

const TICK = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/%3E%3C/svg%3E\") center/contain no-repeat";

/** Crypto-card tier card: card art, name, price, benefit list, CTA. */
export function PlanCard({ name, price, per, art, ribbon, benefits = [], cta = 'Get the card', featured = false, style }) {
  return (
    <Surface radius="lg" padding={26} featured={featured} style={{ display: 'flex', flexDirection: 'column', gap: 18, position: 'relative', ...style }}>
      {ribbon && <span style={{ position: 'absolute', top: 14, right: 14, zIndex: 3, fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--on-accent)', background: 'var(--signal)', padding: '6px 11px', borderRadius: 'var(--r-pill)', boxShadow: '0 6px 16px rgba(0,0,0,0.35)' }}>{ribbon}</span>}
      {art && <div style={{ aspectRatio: 1.586, borderRadius: 'var(--r-md)', overflow: 'hidden' }}><img src={art} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.35rem', letterSpacing: '-0.02em', color: 'var(--text-hi)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', fontSize: '1.5rem', color: 'var(--text-hi)', fontWeight: 600, letterSpacing: '-0.02em' }}>{price}{per && <small style={{ fontSize: '0.85rem', color: 'var(--text-low)', fontWeight: 400 }}> {per}</small>}</span>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0 }}>
        {benefits.map((b, i) => (
          <li key={i} style={{ fontSize: '0.92rem', color: 'var(--text-mid)', display: 'flex', gap: 10, alignItems: 'flex-start', lineHeight: 1.45 }}>
            <span aria-hidden="true" style={{ flex: '0 0 16px', height: 16, marginTop: 2, borderRadius: '50%', background: 'var(--accent-solid)', WebkitMask: TICK, mask: TICK }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Button variant={featured ? 'accent' : 'ghost'} fullWidth style={{ marginTop: 'auto' }}>{cta}</Button>
    </Surface>
  );
}
