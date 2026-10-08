import React from 'react';

const SIZES = { md: { height: 52, padding: '0 26px', fontSize: '0.98rem' }, sm: { height: 44, padding: '0 20px', fontSize: '0.9rem' } };

const VARIANTS = {
  primary: { background: 'var(--blue)', color: '#fff', boxShadow: 'var(--shadow-blue)' },
  accent:  { background: 'var(--signal)', color: 'var(--on-accent)', boxShadow: 'var(--shadow-glow)', backgroundSize: '160% 100%' },
  ghost:   { background: 'transparent', color: 'var(--text-hi)', borderColor: 'var(--hairline-strong)' },
};

/** Marketing / brand-surface button. Pill shape, 52px tall. */
export function Button({ variant = 'primary', size = 'md', href, disabled, fullWidth, children, style, ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      aria-disabled={disabled || undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        borderRadius: 'var(--r-pill)', border: '1px solid transparent',
        fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap',
        width: fullWidth ? '100%' : undefined, opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        transition: 'transform var(--dur-micro) var(--ease), background var(--dur-micro) var(--ease), box-shadow var(--dur-micro) var(--ease), border-color var(--dur-micro) var(--ease)',
        ...SIZES[size], ...VARIANTS[variant], ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
