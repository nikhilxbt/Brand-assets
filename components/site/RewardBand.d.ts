import * as React from 'react';

/**
 * The Rewards band — the single place THORWallet allows a playful, saturated
 * treatment: royal-blue radial, sparkle dots, and 3D reward art from
 * `assets/reward/`. Everything else on the site stays editorial.
 */
export interface RewardBandProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Reward art path — wheel, mascot, chest, moneybag, potion. */
  art?: string;
  pillValue?: React.ReactNode;
  pillLabel?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function RewardBand(props: RewardBandProps): JSX.Element;
