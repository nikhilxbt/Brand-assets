import React from 'react';

const APPLE = 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z';
const PLAY = 'M4 2.5v19l16-9.5z';

/** Glassy App Store / Google Play download badge. */
export function StoreBadge({ store = 'ios', href, style, ...rest }) {
  const ios = store === 'ios';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ios ? 'Download on the App Store' : 'Get it on Google Play'}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        width: 218, minHeight: 56, padding: '0 22px', borderRadius: 12,
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 10px 26px -14px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.10)',
        backdropFilter: 'blur(8px)', textDecoration: 'none',
        transition: 'transform var(--dur) var(--ease), border-color var(--dur) var(--ease)',
        ...style,
      }}
      {...rest}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 26, height: 26, flexShrink: 0, fill: '#fff' }}><path d={ios ? APPLE : PLAY} /></svg>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.12, textAlign: 'left' }}>
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.82)', textTransform: 'uppercase' }}>{ios ? 'Download on the' : 'Get it on'}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.12rem', color: '#fff', letterSpacing: '-0.01em' }}>{ios ? 'App Store' : 'Google Play'}</span>
      </span>
    </a>
  );
}
