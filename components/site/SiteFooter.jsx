import React from 'react';

const COLS = [
  { head: 'THORWallet', links: ['Home', 'Card', 'Trade', '$TITN', 'Blog'] },
  { head: 'Support', links: ['FAQs', 'Brand kit', 'Careers', 'Contact'] },
  { head: 'Documentation', links: ['Terms of Service', 'Membership Terms', 'Privacy Policy'] },
];

/** Site footer: brand blurb, three link columns, socials, fine print. */
export function SiteFooter({ logo = 'assets/logos/thorwallet-logo-white.png', blurb = 'Self-custodial multi-chain wallet. Swap, earn and spend from one app.' }) {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)', padding: '64px var(--gutter) 40px', background: 'var(--bg-elev-1)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <img src={logo} alt="THORWallet" style={{ height: 24, marginBottom: 16 }} />
            <p style={{ color: 'var(--text-low)', fontSize: '0.95rem', maxWidth: '30ch' }}>{blurb}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {['X', 'TG', 'DC', 'YT'].map((s) => (
                <a key={s} href="#" style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--hairline)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-mid)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textDecoration: 'none' }}>{s}</a>
              ))}
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.head}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-cap)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-low)', marginBottom: 16, fontWeight: 500 }}>{c.head}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0 }}>
                {c.links.map((l) => <li key={l}><a href="#" style={{ color: 'var(--text-mid)', fontSize: '0.95rem', textDecoration: 'none' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', color: 'var(--text-low)', fontSize: '0.8rem' }}>
          <span>© {new Date().getFullYear()} THORWallet. Non-custodial — your keys, your crypto.</span>
          <span>Built in Switzerland</span>
        </div>
      </div>
    </footer>
  );
}
