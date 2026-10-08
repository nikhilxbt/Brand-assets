import * as React from 'react';

/** Search field, 44px, `#1C3046` on `#243A54`, 14px radius. */
export interface AppSearchBarProps { placeholder?: React.ReactNode; style?: React.CSSProperties }
export declare function AppSearchBar(props: AppSearchBarProps): JSX.Element;

/** 40×40 toolbar icon button, 12px radius, `#18293D` fill. */
export interface AppIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children?: React.ReactNode;
}
export declare function AppIconButton(props: AppIconButtonProps): JSX.Element;
