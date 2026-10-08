import * as React from 'react';

/**
 * Small feature card: accent mono index, 1.18rem display title, muted body.
 */
export interface FeaturePointProps {
  /** Mono index label, e.g. "01". */
  number?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FeaturePoint(props: FeaturePointProps): JSX.Element;
