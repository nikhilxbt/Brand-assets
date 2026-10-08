import * as React from 'react';

/** In-screen tab row: 19px/600, active `#57A4FF` with a 2.5px inset underline. */
export interface AppTabsProps {
  tabs?: string[];
  active?: string;
  onChange?: (tab: string) => void;
  style?: React.CSSProperties;
}
export declare function AppTabs(props: AppTabsProps): JSX.Element;

/** Filter chip, 10px radius. `on` turns the label `#31FD9D`. */
export interface AppChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  on?: boolean;
  children?: React.ReactNode;
}
export declare function AppChip(props: AppChipProps): JSX.Element;
