import React from 'react';

/** Underlined in-screen tabs (Savers / Pools / Stake). */
export function AppTabs({ tabs = [], active, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 20, fontSize: 19, fontWeight: 600, ...style }}>
      {tabs.map((t) => {
        const on = t === active;
        return (
          <button key={t} onClick={() => onChange && onChange(t)} style={{ background: 'none', border: 0, padding: '0 0 7px', cursor: 'pointer', fontFamily: 'var(--app-font)', fontSize: 'inherit', fontWeight: 'inherit', color: on ? 'var(--app-active)' : 'var(--app-divider)', boxShadow: on ? 'inset 0 -2.5px 0 var(--app-active)' : 'none' }}>{t}</button>
        );
      })}
    </div>
  );
}

/** Small filter chip used in sheets and list headers. */
export function AppChip({ children, on = false, style, ...rest }) {
  return (
    <span style={{ fontSize: 12, fontWeight: 600, borderRadius: 'var(--app-r-sm)', padding: '8px 13px', background: 'var(--app-card)', border: '1px solid var(--app-border-soft)', color: on ? 'var(--app-accent)' : 'var(--app-text-3)', ...style }} {...rest}>{children}</span>
  );
}
