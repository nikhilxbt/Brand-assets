import * as React from 'react';

/** Frosted-glass store badge, 218×56. Always shipped as an iOS + Android pair. */
export interface StoreBadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  store?: 'ios' | 'android';
  href?: string;
}
export declare function StoreBadge(props: StoreBadgeProps): JSX.Element;
