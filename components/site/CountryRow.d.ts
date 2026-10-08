import * as React from 'react';

/**
 * Row in the searchable card-availability list (175+ countries).
 * The flag is a real emoji flag — the one place THORWallet uses emoji.
 */
export interface CountryRowProps {
  /** Emoji flag, e.g. "🇨🇭". */
  flag?: React.ReactNode;
  name: React.ReactNode;
  supported?: boolean;
  last?: boolean;
  style?: React.CSSProperties;
}
export declare function CountryRow(props: CountryRowProps): JSX.Element;
