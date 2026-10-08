import React from 'react';

const TICK = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/%3E%3C/svg%3E\") center/contain no-repeat";

/** Comparison / rate table. `compare` highlights the THORWallet column. */
export function DataTable({ head = [], rows = [], variant = 'compare', featuredCol = 1, style }) {
  const compare = variant === 'compare';
  return (
    <div style={{ overflowX: 'auto', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', background: 'var(--surface)', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: compare ? 720 : 520 }}>
        <thead>
          <tr>{head.map((h, i) => (
            <th key={i} style={{ padding: compare ? '18px 22px' : '16px 24px', textAlign: !compare && i > 0 ? 'right' : 'left', borderBottom: '1px solid var(--hairline)', background: 'var(--surface-2)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: compare ? '1.05rem' : '0.82rem', letterSpacing: compare ? 0 : '0.06em', textTransform: compare ? 'none' : 'uppercase', color: compare && i === featuredCol ? 'var(--accent-solid)' : i === 0 ? 'var(--text-low)' : 'var(--text-hi)' }}>{h}</th>
          ))}</tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => {
                const win = typeof cell === 'object' && cell && cell.win;
                const text = win ? cell.value : cell;
                return (
                  <td key={ci} style={{ padding: compare ? '18px 22px' : '16px 24px', textAlign: !compare && ci > 0 ? 'right' : 'left', borderBottom: ri === rows.length - 1 ? 0 : '1px solid var(--hairline)', fontSize: compare ? '0.95rem' : '0.97rem', verticalAlign: 'middle', whiteSpace: compare ? 'normal' : 'nowrap', background: compare && ci === featuredCol ? 'rgba(31,217,166,0.06)' : undefined, fontFamily: ci === 0 ? 'var(--font-body)' : 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', color: win ? 'var(--accent-solid)' : ci === 0 ? (compare ? 'var(--text-low)' : 'var(--text-hi)') : 'var(--text-mid)', fontWeight: win || (!compare && ci === 0) ? 600 : 400 }}>
                    {win && <span aria-hidden="true" style={{ display: 'inline-block', width: 14, height: 14, marginRight: 9, verticalAlign: -1.5, background: 'var(--accent-solid)', WebkitMask: TICK, mask: TICK }} />}
                    {text}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
