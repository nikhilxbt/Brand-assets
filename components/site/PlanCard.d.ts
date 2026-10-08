import * as React from 'react';

/**
 * A crypto-card tier (Basic / Premium / Swiss, or Orange / Green / Metal / Gold).
 * Card art on top at 1.586 aspect, name + price row, ticked benefit list, CTA.
 */
export interface PlanCardProps {
  name: React.ReactNode;
  price: React.ReactNode;
  /** Trailing unit, e.g. "once" or "/ mo". */
  per?: React.ReactNode;
  /** Card art image path, e.g. `assets/cards/card-swiss.png`. */
  art?: string;
  /** Pill on the accent gradient, e.g. "Most popular". */
  ribbon?: React.ReactNode;
  benefits?: React.ReactNode[];
  cta?: React.ReactNode;
  featured?: boolean;
  style?: React.CSSProperties;
}
export declare function PlanCard(props: PlanCardProps): JSX.Element;
