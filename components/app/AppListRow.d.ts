import * as React from 'react';

/**
 * The app's universal list row — asset lists, earn pools, stock lists.
 * 40px round icon with an optional chain badge notched bottom-right;
 * 14px/700 name over an 11.5px muted sub; right column carries the value
 * and a green/red delta.
 */
export interface AppListRowProps {
  /** Glyph fallback when there is no image, e.g. "₿". */
  icon?: React.ReactNode;
  iconSrc?: string;
  /** Small chain badge over the icon, e.g. `assets/chains/eth.png`. */
  badgeSrc?: string;
  name: React.ReactNode;
  sub?: React.ReactNode;
  value?: React.ReactNode;
  delta?: React.ReactNode;
  deltaDir?: 'up' | 'down';
  /** Replaces the whole right column (APY block, chevron, …). */
  right?: React.ReactNode;
  size?: number;
  style?: React.CSSProperties;
}
export declare function AppListRow(props: AppListRowProps): JSX.Element;
