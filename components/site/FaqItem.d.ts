import * as React from 'react';

/** FAQ entry — always open, never an accordion. Stack them in a 760px prose column. */
export interface FaqItemProps {
  question: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FaqItem(props: FaqItemProps): JSX.Element;
