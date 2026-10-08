import React from 'react';
import { AppCard } from './AppCard.jsx';
import { AppTokenPill } from './AppTokenPill.jsx';

/** Big-numeral amount input with a token pill and balance / fiat meta row. */
export function AppAmountField({ amount, symbol, iconSrc, balance, fiat, action = 'Max', style }) {
  return (
    <AppCard padding={16} style={style}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums' }}>{amount}</span>
        <AppTokenPill symbol={symbol} iconSrc={iconSrc} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, fontSize: 12, fontWeight: 500, color: 'var(--app-text-mute)', fontVariantNumeric: 'tabular-nums' }}>
        <span>{fiat}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {balance}
          {action && <b style={{ color: 'var(--app-active)', fontWeight: 600 }}>{action}</b>}
        </span>
      </div>
    </AppCard>
  );
}
