import * as React from 'react';

/**
 * The app screen shell and its chrome. Fixed 375×812 at `--app-bg` (#121F32)
 * in Montserrat. Standard stack: AppStatusBar (54) → header/tabs → scrolling
 * body at 14px side padding → AppBottomNav (112) or AppHomeIndicator.
 */
export interface AppScreenProps {
  children?: React.ReactNode;
  background?: string;
  /** CSS scale factor when embedding in a smaller frame. */
  scale?: number;
  style?: React.CSSProperties;
}
export declare function AppScreen(props: AppScreenProps): JSX.Element;

export interface AppStatusBarProps { time?: string }
export declare function AppStatusBar(props: AppStatusBarProps): JSX.Element;

export interface AppBackHeaderProps { title?: React.ReactNode; onBack?: () => void }
export declare function AppBackHeader(props: AppBackHeaderProps): JSX.Element;

export declare function AppHomeIndicator(): JSX.Element;
