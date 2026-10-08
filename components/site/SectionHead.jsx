import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

/** Eyebrow → headline → lede. The opener for every marketing section. */
export function SectionHead({ eyebrow, title, lead, size = 'h1', align = 'left', style }) {
  const fs = size === 'display' ? 'var(--fs-display)' : size === 'h2' ? 'var(--fs-h2)' : 'var(--fs-h1)';
  return (
    <div style={{ maxWidth: 760, textAlign: align, marginInline: align === 'center' ? 'auto' : undefined, ...style }}>
      {eyebrow && <Eyebrow style={{ display: 'block', marginBottom: 18 }}>{eyebrow}</Eyebrow>}
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: fs, lineHeight: size === 'display' ? 'var(--lh-display)' : 'var(--lh-heading)', letterSpacing: size === 'display' ? 'var(--tr-display)' : 'var(--tr-h1)', color: 'var(--text-hi)', margin: 0, textWrap: 'balance' }}>{title}</h2>
      {lead && <p style={{ fontSize: 'var(--fs-lead)', lineHeight: 'var(--lh-lead)', color: 'var(--text-mid)', marginTop: 20 }}>{lead}</p>}
    </div>
  );
}
