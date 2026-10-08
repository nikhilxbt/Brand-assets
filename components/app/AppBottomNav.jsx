import React from 'react';

const I = { width: 20, height: 20, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
const ICONS = {
  rewards: <svg viewBox="0 0 24 24" {...I}><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9z" /></svg>,
  earn: <svg viewBox="0 0 24 24" {...I}><path d="M3 17l5-6 4 3 5-7 4 4" /><path d="M3 21h18" /></svg>,
  wallet: <svg viewBox="0 0 24 24" {...I}><rect x="3" y="6" width="18" height="13" rx="3" /><path d="M3 10h18" /><circle cx="17" cy="14.5" r="1.2" /></svg>,
  perps: <svg viewBox="0 0 24 24" {...I}><path d="M4 20V9M10 20V4M16 20v-8M22 20v-5" /></svg>,
  card: <svg viewBox="0 0 24 24" {...I}><rect x="2.5" y="5" width="19" height="14" rx="3" /><path d="M2.5 10h19" /></svg>,
};

/** Floating pill bottom nav with a centre action FAB. */
export function AppBottomNav({ active = 'wallet', fab = true, style }) {
  const items = [['rewards', 'Rewards'], ['earn', 'Earn'], ['wallet', 'Wallet'], ['perps', 'Perps'], ['card', 'Card']];
  return (
    <div style={{ position: 'absolute', left: 12, right: 12, bottom: 34, zIndex: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(24,41,61,0.92)', border: '1px solid var(--app-border)', borderRadius: 999, padding: '10px 18px', boxShadow: '0 -6px 24px rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', ...style }}>
      {items.map(([k, label], i) => (
        <React.Fragment key={k}>
          {fab && i === 2 && (
            <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--app-primary)', display: 'grid', placeItems: 'center', marginTop: -24, border: '4px solid var(--app-bg)', boxShadow: '0 8px 20px rgba(42,122,247,0.45)', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" {...I} style={{ width: 20, height: 20, color: '#fff' }}><path d="M7 7h10v10" /><path d="M7 17L17 7" /></svg>
            </span>
          )}
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, minWidth: 44, color: active === k ? 'var(--app-active)' : 'var(--app-text-mute)', background: active === k ? 'rgba(42,122,247,0.14)' : undefined, borderRadius: active === k ? 999 : undefined, padding: active === k ? '7px 10px 5px' : undefined, margin: active === k ? '-7px -2px -5px' : undefined }}>
            {ICONS[k]}
            {label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}
