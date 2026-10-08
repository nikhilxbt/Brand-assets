import * as React from 'react';

/**
 * The app's action button. Solid `#2A7AF7` at 50px with a 14px radius —
 * the Signal gradient is marketing-only and must never appear here.
 */
export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children?: React.ReactNode;
}
export declare function AppButton(props: AppButtonProps): JSX.Element;
