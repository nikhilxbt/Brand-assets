import React from 'react';

/** Blog card. Thumb bleeds to the card edge by negative-margining the padding. */
export function PostCard({ title, date, thumb, href = '#', more = 'Read more', style }) {
  const pad = 26;
  return (
    <a href={href} style={{ background: 'var(--surface)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: pad, display: 'flex', flexDirection: 'column', gap: 14, minHeight: 220, overflow: 'hidden', textDecoration: 'none', transition: 'transform var(--dur-micro) var(--ease), border-color var(--dur-micro) var(--ease)', ...style }}>
      {thumb && <div style={{ margin: `-${pad}px -${pad}px 0`, aspectRatio: '16 / 9', overflow: 'hidden', background: 'var(--surface-2)' }}><img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>}
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-low)', letterSpacing: '0.04em', marginTop: thumb ? 18 : 0 }}>{date}</span>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-hi)', letterSpacing: '-0.015em', lineHeight: 1.2, margin: thumb ? '8px 0 0' : 'auto 0 0' }}>{title}</h3>
      <span style={{ color: 'var(--accent-solid)', fontSize: '0.9rem', fontWeight: 500, marginTop: 'auto' }}>{more}</span>
    </a>
  );
}
