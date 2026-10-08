import React from 'react';

/** Card-availability list row: flag, country, supported badge. */
export function CountryRow({ flag, name, supported = true, last = false, style }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderBottom: last ? 0 : '1px solid var(--hairline)', listStyle: 'none', ...style }}>
      <span style={{ fontSize: '1.4rem', lineHeight: 1, width: 30, textAlign: 'center', flexShrink: 0 }}>{flag}</span>
      <span style={{ flex: 1, color: supported ? 'var(--text-hi)' : 'var(--text-low)', fontSize: '0.98rem' }}>{name}</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, padding: '5px 10px', borderRadius: 'var(--r-pill)', flexShrink: 0, color: supported ? 'var(--accent-solid)' : '#F08A8A', background: supported ? 'rgba(49,253,157,0.10)' : 'rgba(237,82,82,0.12)' }}>{supported ? 'Available' : 'Not yet'}</span>
    </li>
  );
}
