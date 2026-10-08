import React from 'react';

/** In-app button: 50px, 14px radius, solid #2A7AF7. Never gradient. */
export function AppButton({ children, variant = 'primary', style, ...rest }) {
  const ghost = variant === 'ghost';
  return (
    <button style={{ height: ghost ? 48 : 50, flexShrink: 0, width: '100%', borderRadius: 'var(--app-r-lg)', background: ghost ? 'transparent' : 'var(--app-primary)', border: ghost ? '1.5px solid var(--app-primary)' : '1px solid rgba(255,255,255,0.12)', color: '#fff', fontFamily: 'var(--app-font)', fontSize: 16, fontWeight: 600, display: 'grid', placeItems: 'center', cursor: 'pointer', ...style }} {...rest}>
      {children}
    </button>
  );
}
