import React from 'react';

/** The ambient mesh + grain + optional grid that sits behind dark THORWallet surfaces. */
export function GlowBackdrop({ grid = false, grain = true, mesh = 'var(--mesh)', style }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden', ...style }}>
      <div style={{ position: 'absolute', inset: 0, background: mesh }} />
      {grid && <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-overlay) 1px,transparent 1px),linear-gradient(90deg,var(--grid-overlay) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />}
      {grain && <div style={{ position: 'absolute', inset: 0, opacity: 'var(--grain-opacity)', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />}
    </div>
  );
}
