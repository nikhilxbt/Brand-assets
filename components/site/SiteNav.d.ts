import * as React from 'react';

/**
 * The thorwallet.org navigation bar. Frosted 72%-navy blur, 24px logo,
 * pill links, a three-column Features mega-menu, then Web App (ghost) +
 * Download (primary) at the right.
 */
export interface SiteNavProps {
  logo?: string;
  /** Frosted blur + hairline. False = transparent over a hero. */
  frosted?: boolean;
  /** Label of the current page, e.g. "Card". */
  active?: string;
  /** Force the mega-menu open (for specimens). */
  openMega?: boolean;
}
export declare function SiteNav(props: SiteNavProps): JSX.Element;
