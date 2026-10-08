import React from 'react';

/** One cell of the hairline-gridded capability rail row. */
export function CapabilityRail({ number, name, desc, factKey, factValue, href = '#', style }) {
  return (
    <a href={href} style={{ background: 'var(--bg-base)', padding: '30px 24px', display: 'grid', gridTemplateRows: 'max-content 1fr max-content', gap: 18, minHeight: 240, textDecoration: 'none', color: 'inherit', transition: 'background var(--dur-micro) var(--ease)', ...style }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.14em', color: 'var(--text-low)' }}>{number}</span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.4rem', letterSpacing: '-0.025em', color: 'var(--text-hi)', marginBottom: 8 }}>{name}</div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: 1.55, color: 'var(--text-low)', margin: 0 }}>{desc}</p>
      </div>
      <div style={{ paddingTop: 16, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--font-mono)', fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-low)' }}>
        <span>{factKey}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '-0.01em', color: 'var(--accent-solid)', textTransform: 'none' }}>{factValue}</span>
      </div>
    </a>
  );
}
