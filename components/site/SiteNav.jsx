import React from 'react';
import { Button } from '../core/Button.jsx';

const LINKS = [
  { label: 'Home', href: 'index.html' },
  { label: 'Card', href: 'cards.html' },
  { label: 'Features', mega: true },
  { label: '$TITN', href: 'titn.html' },
  { label: 'Blog', href: 'blog.html' },
  { label: 'FAQs', href: 'https://faqs.thorwallet.org/' },
];

const MEGA = [
  { head: 'Trade', items: [['Swap', 'Native cross-chain, no bridges or wrapped tokens'], ['Limit Orders', 'Set a target price, executes automatically'], ['Stocks', 'Tokenized US equities & ETFs, 24/7']] },
  { head: 'Grow & secure', items: [['Earn', 'Yield on stablecoins, pools & $TITN staking'], ['Multisig', 'Multi-device vaults for any chain & token'], ['Card & Swiss account', 'Spend crypto with a global Mastercard']] },
  { head: "Who it's for", items: [['For traders', 'Best-rate routing across 20k+ tokens'], ['For Whales & Degens', 'Multisig vaults, 20k+ tokens, your keys'], ['For everyday spend', 'Swiss account, 175+ countries'], ['Compare wallets', 'vs MetaMask, Trust Wallet & more']] },
];

/** thorwallet.org top bar: logo, links, Features mega-menu, Web App + Download. */
export function SiteNav({ logo = 'assets/logos/thorwallet-logo-white.png', frosted = true, active = 'Home', openMega = false }) {
  const [open, setOpen] = React.useState(openMega);
  return (
    <nav style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 100, background: frosted ? 'rgba(10,26,43,0.72)' : 'transparent', backdropFilter: frosted ? 'blur(20px) saturate(140%)' : undefined, borderBottom: `1px solid ${frosted ? 'var(--hairline)' : 'transparent'}` }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '16px var(--gutter)', display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="index.html" aria-label="THORWallet home" style={{ display: 'flex' }}><img src={logo} alt="THORWallet" style={{ height: 24, width: 'auto' }} /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginInline: 'auto' }}>
          {LINKS.map((l) => l.mega ? (
            <div key={l.label} style={{ position: 'relative' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <button style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 500, color: open ? 'var(--text-hi)' : 'var(--text-mid)', padding: '8px 14px', borderRadius: 'var(--r-pill)', background: open ? 'var(--surface)' : 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                {l.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-micro) var(--ease)' }}><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div style={{ position: 'absolute', top: 'calc(100% + 10px)', left: 0, minWidth: 740, background: 'rgba(14,34,51,0.96)', backdropFilter: 'blur(20px)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-md)', padding: '24px 22px 26px', boxShadow: 'var(--shadow-ambient)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px 32px', opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden', transform: open ? 'none' : 'translateY(-6px)', transition: 'all var(--dur-micro) var(--ease)' }}>
                {MEGA.map((col) => (
                  <div key={col.head} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-low)', margin: '0 0 8px', padding: '0 12px' }}>{col.head}</h5>
                    {col.items.map(([t, d]) => (
                      <a key={t} href="#" style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '9px 12px', borderRadius: 10, textDecoration: 'none' }}>
                        <b style={{ color: 'var(--text-hi)', fontWeight: 600, fontSize: '0.95rem' }}>{t}</b>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-low)', lineHeight: 1.5, marginTop: 4 }}>{d}</span>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <a key={l.label} href={l.href} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 500, color: active === l.label ? 'var(--text-hi)' : 'var(--text-mid)', padding: '8px 14px', borderRadius: 'var(--r-pill)', background: active === l.label ? 'var(--surface)' : 'none', textDecoration: 'none' }}>{l.label}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Button variant="ghost" size="sm" href="https://app.thorwallet.org">Web App</Button>
          <Button variant="primary" size="sm" href="download.html">Download</Button>
        </div>
      </div>
    </nav>
  );
}
