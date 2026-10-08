import * as React from 'react';

/** Token picker pill: 28px coin, symbol, caret. Sits at the right of an amount field. */
export interface AppTokenPillProps {
  symbol: React.ReactNode;
  iconSrc?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AppTokenPill(props: AppTokenPillProps): JSX.Element;
