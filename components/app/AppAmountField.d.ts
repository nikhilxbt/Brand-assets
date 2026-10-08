import * as React from 'react';

/**
 * Swap / send amount field: 28px/700 tabular numeral at the left, token pill
 * at the right, and a 12px muted meta row carrying the fiat value, the balance
 * and a `#57A4FF` inline action.
 */
export interface AppAmountFieldProps {
  amount?: React.ReactNode;
  symbol?: React.ReactNode;
  iconSrc?: string;
  balance?: React.ReactNode;
  fiat?: React.ReactNode;
  /** Inline blue action, e.g. "Max" / "Paste". Pass null to hide. */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AppAmountField(props: AppAmountFieldProps): JSX.Element;
