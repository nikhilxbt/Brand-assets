import * as React from 'react';

/** Eyebrow / headline / lede stack, capped at 760px. Opens every marketing section. */
export interface SectionHeadProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  size?: 'display' | 'h1' | 'h2';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function SectionHead(props: SectionHeadProps): JSX.Element;
