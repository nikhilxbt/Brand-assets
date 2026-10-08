import React from 'react';

/** In-app container: #18293D on #1C3046 hairline, 16px radius. */
export function AppCard({ children, elevated = false, padding = 16, radius = 'var(--app-r-card)', style, ...rest }) {
  return (
    <div style={{ background: elevated ? 'var(--app-elev)' : 'var(--app-card)', border: `1px solid ${elevated ? 'var(--app-border)' : 'var(--app-border-soft)'}`, borderRadius: radius, padding, ...style }} {...rest}>
      {children}
    </div>
  );
}
