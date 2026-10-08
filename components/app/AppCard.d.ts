import * as React from 'react';

/** App container. `elevated` steps up to #1C3046 / #243A54 for inputs and inner fills. */
export interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  padding?: string | number;
  radius?: string | number;
  children?: React.ReactNode;
}
export declare function AppCard(props: AppCardProps): JSX.Element;
