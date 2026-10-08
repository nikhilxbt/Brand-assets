import React from 'react';

/** Hairline-divided question / answer block. */
export function FaqItem({ question, children, style }) {
  return (
    <div style={{ borderBottom: '1px solid var(--hairline)', padding: '24px 0', ...style }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-hi)', fontSize: '1.2rem', marginBottom: 8, letterSpacing: '-0.01em' }}>{question}</h3>
      <p style={{ color: 'var(--text-mid)', margin: 0 }}>{children}</p>
    </div>
  );
}
