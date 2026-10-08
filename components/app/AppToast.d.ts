import * as React from 'react';

/** Inline confirmation toast, 150px above the bottom edge. */
export interface AppToastProps {
  children?: React.ReactNode;
  tone?: 'success' | 'error';
  style?: React.CSSProperties;
}
export declare function AppToast(props: AppToastProps): JSX.Element;

/** Bottom sheet / drawer shell: `#15263A`, 20px top corners, 44×5 handle. */
export interface AppSheetProps { children?: React.ReactNode; style?: React.CSSProperties }
export declare function AppSheet(props: AppSheetProps): JSX.Element;
