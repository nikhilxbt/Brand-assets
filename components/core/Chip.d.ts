import * as React from 'react';

/** Pill chip — filters, ticker labels, feature tags. */
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected state: solid `--blue` fill, white text. */
  active?: boolean;
  /** Dashed border + muted text — "coming soon" / expiry chips. */
  dashed?: boolean;
  /** Renders a 22px colored dot at the left (chain tickers). */
  dotColor?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
