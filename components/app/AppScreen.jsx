import React from 'react';

/** 375×812 app canvas — the root of every wallet screen. */
export function AppScreen({ children, background = 'var(--app-bg)', scale, style }) {
  return (
    <div style={{ width: 375, height: 812, background, fontFamily: 'var(--app-font)', color: 'var(--app-text)', display: 'flex', flexDirection: 'column', overflow: 'hidden', WebkitFontSmoothing: 'antialiased', transform: scale ? `scale(${scale})` : undefined, transformOrigin: '0 0', ...style }}>
      {children}
    </div>
  );
}

/** iOS status bar row, 54px. */
export function AppStatusBar({ time = '9:41' }) {
  return (
    <div style={{ height: 54, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 26px 0', fontSize: 16, fontWeight: 700 }}>
      <span>{time}</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--app-text-mute)' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}><path d="M12 18.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 2C7.6 2 3.6 3.8.8 6.7l1.6 1.6A13.3 13.3 0 0112 4.3c3.7 0 7.1 1.5 9.6 4l1.6-1.6A16.4 16.4 0 0012 2zm0 5.4c-2.9 0-5.5 1.2-7.4 3.1l1.6 1.6A8.2 8.2 0 0112 9.7c2.3 0 4.3.9 5.8 2.4l1.6-1.6a10.7 10.7 0 00-7.4-3.1zm0 5.3c-1.5 0-2.8.6-3.8 1.6l1.7 1.6c.6-.6 1.3-.9 2.1-.9s1.6.3 2.1.9l1.7-1.6a5.3 5.3 0 00-3.8-1.6z" /></svg>
        <svg viewBox="0 0 26 13" fill="currentColor" style={{ width: 24, height: 12 }}><rect x="0.5" y="0.5" width="21" height="12" rx="3.5" fill="none" stroke="currentColor" opacity="0.5" /><rect x="2" y="2" width="18" height="9" rx="2" /><path d="M23 4.5v4a2.5 2.5 0 000-4z" /></svg>
      </span>
    </div>
  );
}

/** Back row with a chevron and a 24px screen title. */
export function AppBackHeader({ title, onBack }) {
  return (
    <div onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px 14px', fontSize: 24, fontWeight: 600, letterSpacing: '-0.01em', flexShrink: 0, cursor: onBack ? 'pointer' : undefined }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: 12, height: 20, color: 'var(--app-text-2)', flexShrink: 0 }}><path d="M15 5l-7 7 7 7" /></svg>
      {title}
    </div>
  );
}

/** 135×5 home-indicator pill. */
export function AppHomeIndicator() {
  return <div style={{ height: 28, flexShrink: 0, display: 'grid', placeItems: 'center' }}><span style={{ width: 135, height: 5, borderRadius: 999, background: 'var(--app-divider)' }} /></div>;
}
