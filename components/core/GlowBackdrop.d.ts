import * as React from 'react';

/**
 * Ambient light for any dark THORWallet surface: two off-axis radial blobs
 * (cyan top-right, green bottom-left), 3.5% fractal grain, and — on slides —
 * a 64px 1.7%-white grid. Absolutely positioned; give the parent `position:relative`.
 */
export interface GlowBackdropProps {
  /** 64px hairline grid. On by default for slides, off for the site. */
  grid?: boolean;
  grain?: boolean;
  /** Override the two-blob wash with your own radial-gradient stack. */
  mesh?: string;
  style?: React.CSSProperties;
}
export declare function GlowBackdrop(props: GlowBackdropProps): JSX.Element;
