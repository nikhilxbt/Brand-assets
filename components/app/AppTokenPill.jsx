import React from 'react';

/** Token selector pill inside swap / limit inputs. */
export function AppTokenPill({ symbol, iconSrc, icon, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--app-border)', borderRadius: 999, padding: '6px 10px 6px 6px', fontSize: 15, fontWeight: 700, flexShrink: 0, ...style }}>
      <span style={{ width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center', overflow: 'hidden', fontSize: 12, fontWeight: 700, background: 'var(--app-elev)' }}>
        {iconSrc ? <img src={iconSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : icon}
      </span>
      {symbol}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 11, height: 11, color: 'var(--app-text-3)' }}><path d="M6 9l6 6 6-6" /></svg>
    </span>
  );
}
