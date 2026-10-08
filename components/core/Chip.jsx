import React from 'react';

/** Pill tag. Filter chips, ticker chips, feature tags. */
export function Chip({ children, active = false, dashed = false, dotColor, icon, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
        borderRadius: 'var(--r-pill)',
        padding: dotColor || icon ? '7px 14px 7px 8px' : '8px 16px',
        background: active ? 'var(--blue)' : 'var(--surface)',
        color: active ? '#fff' : dashed ? 'var(--text-low)' : 'var(--text-mid)',
        border: active ? '1px solid transparent' : `1px ${dashed ? 'dashed' : 'solid'} var(--hairline-strong)`,
        ...style,
      }}
      {...rest}
    >
      {dotColor && <span style={{ width: 22, height: 22, borderRadius: '50%', background: dotColor, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#fff' }}>{icon}</span>}
      {!dotColor && icon}
      {children}
    </span>
  );
}
