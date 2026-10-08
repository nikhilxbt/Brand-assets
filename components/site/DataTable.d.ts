import * as React from 'react';

/**
 * The site's two table treatments.
 * `compare` — wallet-vs-wallet: left column muted, THORWallet column tinted
 * `rgba(31,217,166,0.06)`, advantage cells marked with an accent tick.
 * `rate` — fees and limits: right-aligned mono numerals, uppercase heads.
 */
export interface DataTableProps {
  head?: React.ReactNode[];
  /** Cells are plain nodes, or `{ value, win: true }` for an accent-ticked win. */
  rows?: Array<Array<React.ReactNode | { value: React.ReactNode; win?: boolean }>>;
  variant?: 'compare' | 'rate';
  /** Which column is THORWallet's (compare only). Default 1. */
  featuredCol?: number;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
