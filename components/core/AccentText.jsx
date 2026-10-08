import React from 'react';

/** Signal-gradient text clip — the brand's one text highlight. */
export function AccentText({ children, outline = false, as: Tag = 'span', style, ...rest }) {
  const grad = { background: 'var(--signal-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' };
  const stroke = { color: 'transparent', WebkitTextStroke: '1.5px var(--accent-solid)' };
  return <Tag style={{ ...(outline ? stroke : grad), ...style }} {...rest}>{children}</Tag>;
}
