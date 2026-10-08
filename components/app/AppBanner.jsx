import React from 'react';

/** Informational blue banner that caps a card group. */
export function AppBanner({ children, tone = 'info', style }) {
  const info = tone === 'info';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: info ? 'rgba(42,122,247,0.13)' : 'rgba(49,253,157,0.12)', border: `1px solid ${info ? 'rgba(42,122,247,0.25)' : 'rgba(49,253,157,0.3)'}`, borderRadius: '16px 16px 0 0', padding: '15px 12px', color: info ? 'var(--app-active)' : 'var(--app-accent)', fontSize: 14.5, fontWeight: 700, ...style }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 17, height: 17, flexShrink: 0 }}><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></svg>
      {children}
    </div>
  );
}
