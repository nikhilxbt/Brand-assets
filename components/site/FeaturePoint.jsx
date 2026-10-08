import React from 'react';
import { Surface } from '../core/Surface.jsx';

/** Numbered feature card. Used in 2×2 and 4-up grids under a section head. */
export function FeaturePoint({ number, title, children, style }) {
  return (
    <Surface padding={22} style={style}>
      {number && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-solid)', letterSpacing: '0.06em' }}>{number}</div>}
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.18rem', color: 'var(--text-hi)', margin: '12px 0 6px', letterSpacing: '-0.01em' }}>{title}</h3>
      <p style={{ fontSize: '0.92rem', color: 'var(--text-low)', lineHeight: 1.5, margin: 0 }}>{children}</p>
    </Surface>
  );
}
