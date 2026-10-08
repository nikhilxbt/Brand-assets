import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';

/** Credentials / exchange logo row. Logos are knocked out to pure white. */
export function LogoWall({ label = 'Backed and recognised by', logos = [], height = 40, style }) {
  return (
    <div style={{ width: '100%', ...style }}>
      {label && <Eyebrow style={{ display: 'block', textAlign: 'center', marginBottom: 'clamp(22px,2.6vw,30px)' }}>{label}</Eyebrow>}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(30px,5.5vw,76px)', flexWrap: 'wrap' }}>
        {logos.map((l, i) => (
          <span key={i} style={{ height: l.height || height, display: 'flex', alignItems: 'center' }}>
            <img src={l.src || l} alt={l.alt || ''} style={{ height: '100%', width: 'auto', objectFit: 'contain', opacity: 0.8, filter: 'brightness(0) invert(1)' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
