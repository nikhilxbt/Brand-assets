import * as React from 'react';

/** Copy-left / CTA-right capture band, lit from the top-right corner. */
export interface NewsletterBandProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  cta?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function NewsletterBand(props: NewsletterBandProps): JSX.Element;
