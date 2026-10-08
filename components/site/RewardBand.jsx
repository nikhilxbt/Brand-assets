import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

/** The one playful surface in the system: blue radial band + reward art. */
export function RewardBand({ eyebrow = 'Rewards', title, lead, art = 'assets/reward/spin-wheel.png', pillValue, pillLabel, style }) {
  return (
    <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', position: 'relative', background: 'radial-gradient(circle at 20% 0%, #2A6BF2 0%, #163e8f 60%, #112a66 100%)', padding: 'clamp(32px,5vw,64px)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center', ...style }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(2px 2px at 12% 24%,rgba(255,255,255,0.55),transparent),radial-gradient(2px 2px at 82% 16%,rgba(255,255,255,0.5),transparent),radial-gradient(1.5px 1.5px at 64% 72%,rgba(255,255,255,0.45),transparent),radial-gradient(1.5px 1.5px at 30% 84%,rgba(255,255,255,0.4),transparent)' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Eyebrow style={{ display: 'block', marginBottom: 16, color: 'rgba(255,255,255,0.7)' }}>{eyebrow}</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--fs-h1)', lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--tr-h1)', color: '#fff', margin: 0 }}>{title}</h2>
        {lead && <p style={{ fontSize: 'var(--fs-lead)', color: '#fff', opacity: 0.86, marginTop: 18 }}>{lead}</p>}
        {pillValue && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(0,0,0,0.28)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 'var(--r-pill)', padding: '10px 16px', marginTop: 22 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: '#fff', fontSize: '1.1rem' }}>{pillValue}</span>
            <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>{pillLabel}</span>
          </div>
        )}
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src={art} alt="" style={{ width: 'clamp(220px,26vw,330px)', height: 'auto', filter: 'drop-shadow(0 20px 44px rgba(0,0,0,0.45))' }} />
      </div>
    </div>
  );
}
