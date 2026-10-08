import * as React from 'react';

/**
 * Text field, 343×93 with label and helper. Field is 46px tall, `#1C3046` fill,
 * `#243A54` border, 12px radius; placeholder `#7E9EA8`; trailing action
 * (Paste / Scan / Copy) in `#57A4FF`.
 */
export interface AppInputFieldProps {
  label?: React.ReactNode;
  placeholder?: React.ReactNode;
  value?: React.ReactNode;
  helper?: React.ReactNode;
  action?: React.ReactNode;
  error?: boolean;
  style?: React.CSSProperties;
}
export declare function AppInputField(props: AppInputFieldProps): JSX.Element;
