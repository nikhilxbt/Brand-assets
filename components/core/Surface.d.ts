import * as React from 'react';

/**
 * The base card. Every panel on a THORWallet dark surface is this:
 * `--surface` fill, 1px `--hairline`, and a 4%-white inset top line —
 * never an outer drop shadow.
 */
export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: string | number;
  /** One step lighter (`--surface-2`) — table headers, footers, hover. */
  elevated?: boolean;
  /** Accent hairline + wide accent glow. The recommended / featured card. */
  featured?: boolean;
  children?: React.ReactNode;
}
export declare function Surface(props: SurfaceProps): JSX.Element;
