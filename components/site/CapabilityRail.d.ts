import * as React from 'react';

/**
 * Editorial "rail" cell — index, name, mono description, and a fact footer.
 * Lay 3 in a grid with `gap:1px` on a `--hairline` background so the
 * dividers are the gaps themselves.
 */
export interface CapabilityRailProps {
  number?: React.ReactNode;
  name: React.ReactNode;
  desc?: React.ReactNode;
  factKey?: React.ReactNode;
  factValue?: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
}
export declare function CapabilityRail(props: CapabilityRailProps): JSX.Element;
