import * as React from 'react';

/** Gradient-clipped or outlined keyword inside a headline. */
export interface AccentTextProps extends React.HTMLAttributes<HTMLElement> {
  /** Outline treatment: transparent fill, 1.5px accent stroke. */
  outline?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export declare function AccentText(props: AccentTextProps): JSX.Element;
