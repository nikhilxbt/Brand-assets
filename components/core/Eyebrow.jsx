import React from 'react';

/** Uppercase micro-label that opens almost every THORWallet section. */
export function Eyebrow({ children, dot = false, color, style, ...rest }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11, fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-cap)', fontWeight: 500, letterSpacing: 'var(--tr-eyebrow)', textTransform: 'uppercase', color: color || 'var(--text-low)', ...style }} {...rest}>
      {dot && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--signal-135)', boxShadow: '0 0 12px rgba(51,255,153,0.75)', flex: 'none' }} />}
      {children}
    </span>
  );
}
