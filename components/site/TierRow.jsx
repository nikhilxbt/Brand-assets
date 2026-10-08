import React from 'react';

/** One row of the $TITN staking-tier table. */
export function TierRow({ tier, stake, fee, head = false, you = false, style }) {
  const base = { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '20px 28px', borderBottom: '1px solid var(--hairline)', alignItems: 'center' };
  if (head) return (
    <div style={{ ...base, background: 'var(--surface-2)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-cap)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)', ...style }}>
      <span>{tier}</span><span>{stake}</span><span>{fee}</span>
    </div>
  );
  return (
    <div style={{ ...base, background: you ? 'linear-gradient(90deg,rgba(42,107,242,0.12),transparent)' : undefined, ...style }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-hi)', fontSize: '1.05rem' }}>{tier}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', color: 'var(--text-mid)' }}>{stake}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', color: 'var(--accent-solid)', fontWeight: 600 }}>{fee}</span>
    </div>
  );
}
