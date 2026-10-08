import * as React from 'react';

/**
 * Tinted banner welded to the top of a card group (top corners rounded, bottom flat).
 * The multisig "Create vault" pattern. `info` is blue, `success` accent green.
 */
export interface AppBannerProps {
  children?: React.ReactNode;
  tone?: 'info' | 'success';
  style?: React.CSSProperties;
}
export declare function AppBanner(props: AppBannerProps): JSX.Element;
