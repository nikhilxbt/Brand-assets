import * as React from 'react';

/**
 * The wallet's five-tab bottom nav — Rewards · Earn · Wallet · Perps · Card —
 * as a floating translucent pill 34px off the bottom, with a 52px blue swap FAB
 * breaking the top edge. Active tab is `#57A4FF` on a 14%-blue pill.
 */
export interface AppBottomNavProps {
  active?: 'rewards' | 'earn' | 'wallet' | 'perps' | 'card';
  /** Centre swap FAB. Default true. */
  fab?: boolean;
  style?: React.CSSProperties;
}
export declare function AppBottomNav(props: AppBottomNavProps): JSX.Element;
