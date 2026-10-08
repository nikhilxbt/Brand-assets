import React from 'react';
import { Surface } from './Surface.jsx';

/** Number-over-label tile. Also the gradient "proof stat" used in bands. */
export function StatTile({ value, label, variant = 'tile', style }) {
  if (variant === 'proof') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center', padding: '6px clamp(18px,2.4vw,40px)', ...style }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.1rem,3.4vw,3.4rem)', letterSpacing: '-0.03em', lineHeight: 1, background: 'var(--signal-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{value}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-low)', lineHeight: 1.6, maxWidth: '24ch' }}>{label}</div>
      </div>
    );
  }
  return (
    <Surface padding={26} style={style}>
      <div style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', fontSize: '2rem', lineHeight: 1, color: 'var(--text-hi)', fontWeight: 600, letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: '0.88rem', color: 'var(--text-low)', marginTop: 10 }}>{label}</div>
    </Surface>
  );
}
