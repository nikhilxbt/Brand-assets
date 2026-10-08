import React from 'react';

/** Token / asset row: round icon (+ chain badge), name/sub, value/delta. */
export function AppListRow({ icon, iconSrc, badgeSrc, name, sub, value, delta, deltaDir = 'up', right, size = 40, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, ...style }}>
      <div style={{ position: 'relative', width: size, height: size, borderRadius: '50%', flexShrink: 0, display: 'grid', placeItems: 'center', background: 'var(--app-elev)', border: '1px solid var(--app-border)', fontSize: 16, fontWeight: 700 }}>
        {iconSrc ? <img src={iconSrc} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }} /> : icon}
        {badgeSrc && <span style={{ position: 'absolute', right: -3, bottom: -3, width: 16, height: 16, borderRadius: '50%', border: '2px solid var(--app-bg)', background: 'var(--app-elev)', overflow: 'hidden' }}><img src={badgeSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></span>}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--app-text)' }}>{name}</div>
        {sub && <div style={{ fontSize: 11.5, fontWeight: 500, color: 'var(--app-text-mute)', marginTop: 3 }}>{sub}</div>}
      </div>
      {right || ((value || delta) && (
        <div style={{ textAlign: 'right' }}>
          {value && <div style={{ fontSize: 14, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{value}</div>}
          {delta && <div style={{ fontSize: 11, fontWeight: 600, marginTop: 3, fontVariantNumeric: 'tabular-nums', color: deltaDir === 'down' ? 'var(--app-down)' : 'var(--app-up)' }}>{delta}</div>}
        </div>
      ))}
    </div>
  );
}
