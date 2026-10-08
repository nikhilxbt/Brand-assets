import React from 'react';

const RADII = { sm: 'var(--r-sm)', md: 'var(--r-md)', lg: 'var(--r-lg)', xl: 'var(--r-xl)' };

/** The standard THORWallet card: surface fill, hairline, inset top highlight. */
export function Surface({ children, radius = 'md', padding = 'var(--space-5)', elevated = false, featured = false, style, ...rest }) {
  return (
    <div
      style={{
        background: elevated ? 'var(--surface-2)' : 'var(--surface)',
        border: `1px solid ${featured ? 'var(--accent-line)' : 'var(--hairline)'}`,
        borderRadius: RADII[radius], padding,
        boxShadow: featured ? '0 0 0 1px var(--accent-line), 0 0 80px -30px var(--accent-glow)' : 'var(--shadow-inset-top)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
