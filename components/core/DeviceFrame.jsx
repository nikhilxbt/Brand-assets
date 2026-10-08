import React from 'react';

/** iPhone-proportioned frame (1320:2868) holding an app screen or screenshot. */
export function DeviceFrame({ src, children, width = 'clamp(240px,30vw,330px)', glow = true, style }) {
  return (
    <div style={{ width, aspectRatio: '1320/2868', borderRadius: '14% / 6.5%', background: '#05101A', border: '1px solid var(--hairline-strong)', padding: '2.6%', marginInline: 'auto', boxShadow: glow ? 'var(--shadow-ambient), 0 0 110px -38px var(--accent-glow)' : 'var(--shadow-ambient)', ...style }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '11% / 5.2%', overflow: 'hidden', background: 'var(--bg-base)', position: 'relative' }}>
        {src ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : children}
      </div>
    </div>
  );
}
