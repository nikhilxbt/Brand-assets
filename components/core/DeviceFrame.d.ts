import * as React from 'react';

/**
 * The phone frame used for every app visual on marketing surfaces.
 * Squircle corners via percentage radii; accent glow behind.
 */
export interface DeviceFrameProps {
  /** Screenshot URL. Omit and pass `children` for a live screen. */
  src?: string;
  children?: React.ReactNode;
  width?: string | number;
  /** Accent glow behind the device. Default true. */
  glow?: boolean;
  style?: React.CSSProperties;
}
export declare function DeviceFrame(props: DeviceFrameProps): JSX.Element;
