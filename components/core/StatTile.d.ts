import * as React from 'react';

/** A number and its caption. `tile` sits in a card; `proof` is the big gradient stat. */
export interface StatTileProps {
  value: React.ReactNode;
  label: React.ReactNode;
  variant?: 'tile' | 'proof';
  style?: React.CSSProperties;
}
export declare function StatTile(props: StatTileProps): JSX.Element;
