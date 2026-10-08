import * as React from 'react';

/** Uppercase 13px micro-label, 0.22em tracking. Opens sections, panels and slides. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading gradient dot with glow — the slide-deck variant. */
  dot?: boolean;
  /** Override the muted default, e.g. `var(--accent-solid)`. */
  color?: string;
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
