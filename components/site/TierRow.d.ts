import * as React from 'react';

/** A row in the $TITN tier table. Wrap the stack in a bordered, radius-lg surface. */
export interface TierRowProps {
  tier: React.ReactNode;
  stake: React.ReactNode;
  fee: React.ReactNode;
  /** Renders as the mono uppercase header row. */
  head?: boolean;
  /** "Your tier" highlight — a left-to-right blue wash. */
  you?: boolean;
  style?: React.CSSProperties;
}
export declare function TierRow(props: TierRowProps): JSX.Element;
