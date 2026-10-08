import React from 'react';

/** Labelled 46px field with #1C3046 fill, #243A54 border and helper text. */
export function AppInputField({ label, placeholder, value, helper, action, error, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--app-text)' }}>{label}</span>}
      <div style={{ height: 46, borderRadius: 'var(--app-r-md)', background: 'var(--app-elev)', border: `1px solid ${error ? 'var(--app-error)' : 'var(--app-border)'}`, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px' }}>
        <span style={{ flex: 1, fontSize: 14, fontWeight: value ? 500 : 400, color: value ? 'var(--app-text)' : 'var(--app-text-mute)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value || placeholder}</span>
        {action && <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--app-active)', flexShrink: 0 }}>{action}</span>}
      </div>
      {helper && <span style={{ fontSize: 12, fontWeight: 400, color: error ? 'var(--app-error)' : '#BDBFC2' }}>{helper}</span>}
    </div>
  );
}
