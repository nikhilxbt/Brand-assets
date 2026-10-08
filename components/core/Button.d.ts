import * as React from 'react';

/**
 * Marketing-surface button: pill, 52px (md) or 44px (sm).
 * `primary` is royal blue — the default action. `accent` is the Signal
 * gradient, reserved for one hero CTA per view. `ghost` is the hairline outline.
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'accent' | 'ghost';
  size?: 'md' | 'sm';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
