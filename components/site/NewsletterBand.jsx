import React from 'react';
import { Button } from '../core/Button.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';

/** Wide capture band with a corner-lit signal wash. */
export function NewsletterBand({ eyebrow = 'Newsletter', title, lead, cta = 'Subscribe', style }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-xl)', padding: 'clamp(30px,4.4vw,56px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(24px,4vw,56px)', flexWrap: 'wrap', boxShadow: 'var(--shadow-inset-top)', ...style }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 120% at 100% 0%,rgba(0,204,255,0.12),transparent 60%),radial-gradient(60% 120% at 88% 100%,rgba(51,255,153,0.10),transparent 62%)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '54ch' }}>
        <Eyebrow style={{ display: 'block', marginBottom: 14 }}>{eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--fs-h2)', letterSpacing: 'var(--tr-h1)', color: 'var(--text-hi)', margin: 0 }}>{title}</h2>
        {lead && <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-mid)', marginTop: 14 }}>{lead}</p>}
      </div>
      <Button variant="primary" style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>{cta}</Button>
    </div>
  );
}
