import React from 'react';

/** Confirmation toast pinned above the nav, accent-bordered. */
export function AppToast({ children, tone = 'success', style }) {
  const color = tone === 'error' ? 'var(--app-error)' : 'var(--app-up)';
  return (
    <div style={{ position: 'absolute', left: 14, right: 14, bottom: 150, zIndex: 5, background: 'var(--app-elev)', border: `1px solid ${tone === 'error' ? 'rgba(237,54,54,0.4)' : 'rgba(119,252,189,0.4)'}`, borderRadius: 'var(--app-r-lg)', padding: '13px 15px', display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600, boxShadow: '0 12px 32px rgba(0,0,0,0.55)', ...style }}>
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" style={{ width: 16, height: 16, flexShrink: 0 }}>
        {tone === 'error' ? <><path d="M12 7v7" /><path d="M12 17h.01" /></> : <path d="M4 12.5l5 5L20 6.5" />}
      </svg>
      {children}
    </div>
  );
}

/** Bottom-sheet shell: 20px top corners and a grab handle. */
export function AppSheet({ children, style }) {
  return (
    <div style={{ background: 'var(--app-bg-sheet)', borderRadius: '20px 20px 0 0', display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{ height: 16, flexShrink: 0, display: 'grid', placeItems: 'center' }}><span style={{ width: 44, height: 5, borderRadius: 999, background: '#36506B' }} /></div>
      {children}
    </div>
  );
}
