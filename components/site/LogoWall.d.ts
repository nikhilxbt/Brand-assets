import * as React from 'react';

/**
 * Trust row. Every logo is forced monochrome white at 80% opacity
 * (`filter:brightness(0) invert(1)`) so mixed-brand marks read as one row.
 * In light theme they flip to `brightness(0)`.
 */
export interface LogoWallProps {
  label?: React.ReactNode;
  /** Paths, or `{ src, alt, height }` when a mark needs its own optical height. */
  logos?: Array<string | { src: string; alt?: string; height?: number }>;
  height?: number;
  style?: React.CSSProperties;
}
export declare function LogoWall(props: LogoWallProps): JSX.Element;
