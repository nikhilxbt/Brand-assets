import React from 'react';

/** 44px search field with a leading magnifier. */
export function AppSearchBar({ placeholder = 'Search', style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--app-elev)', border: '1px solid var(--app-border)', borderRadius: 'var(--app-r-lg)', height: 44, padding: '0 14px', color: 'var(--app-text-mute)', fontSize: 14, fontWeight: 500, ...style }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16, flexShrink: 0 }}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
      {placeholder}
    </div>
  );
}

/** 40px square icon button used in app toolbars. */
export function AppIconButton({ children, active = false, style, ...rest }) {
  return (
    <button style={{ width: 40, height: 40, borderRadius: 'var(--app-r-md)', background: 'var(--app-card)', border: '1px solid var(--app-border-soft)', display: 'grid', placeItems: 'center', color: active ? 'var(--app-active)' : 'var(--app-text-3)', cursor: 'pointer', padding: 0, ...style }} {...rest}>
      {children}
    </button>
  );
}
