const { AppScreen, AppStatusBar, AppBackHeader, AppHomeIndicator, AppBottomNav, AppCard, AppListRow, AppButton, AppAmountField, AppInputField, AppSearchBar, AppIconButton, AppTabs, AppChip, AppToast, AppBanner, AppTokenPill } = window.ThorwalletBrandDesignWebsite_258ce2;

const A = '../../assets';
const CH = { btc: A + '/chains/btc.png', eth: A + '/chains/eth.png', sol: A + '/chains/sol.png', bnb: A + '/chains/bnb.png', sui: A + '/chains/sui.png', xlm: A + '/chains/stellar.png' };

const ico = (p, s = 20) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: s, height: s }}>{p}</svg>;
const Fade = () => <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 120, zIndex: 3, background: 'linear-gradient(transparent, rgba(18,31,50,0.95) 70%)', pointerEvents: 'none' }} />;
const Sect = ({ children }) => <div style={{ fontSize: 18, fontWeight: 700, padding: '12px 6px 4px', color: 'var(--app-text)' }}>{children}</div>;

/* ---------------- WALLET ---------------- */
function WalletScreen({ go }) {
  return (
    <AppScreen>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, background: 'var(--app-header-grad)', opacity: 0.55, pointerEvents: 'none' }} />
      <AppStatusBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px 0', position: 'relative' }}>
        <AppIconButton>{ico(<><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20a6.5 6.5 0 0113 0" /></>, 18)}</AppIconButton>
        <span style={{ fontFamily: 'var(--app-font)', fontSize: 15, fontWeight: 600, color: 'var(--app-text-2)' }}>Main vault</span>
        <AppIconButton>{ico(<><circle cx="12" cy="12" r="3" /><path d="M12 3v2M12 19v2M4.5 7.5l1.7 1M17.8 15.5l1.7 1M4.5 16.5l1.7-1M17.8 8.5l1.7-1" /></>, 18)}</AppIconButton>
      </div>
      <div style={{ position: 'relative', textAlign: 'center', padding: '22px 0 6px', fontFamily: 'var(--app-font)' }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--app-text-3)', letterSpacing: '0.06em' }}>TOTAL BALANCE</div>
        <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.015em', fontVariantNumeric: 'tabular-nums', marginTop: 6 }}>$48,204.10</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--app-up)', marginTop: 4 }}>+$1,204.88 · +2.56%</div>
      </div>
      <div style={{ display: 'flex', gap: 10, padding: '14px 14px 4px', position: 'relative' }}>
        {[['Swap', <><path d="M7 7h10v10" /><path d="M7 17L17 7" /></>, () => go('swap')], ['Send', <><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></>, null], ['Receive', <><path d="M12 5v14" /><path d="M6 13l6 6 6-6" /></>, null], ['Card', <><rect x="2.5" y="5" width="19" height="14" rx="3" /><path d="M2.5 10h19" /></>, () => go('card')]].map(([label, path, fn]) => (
          <button key={label} onClick={fn || undefined} style={{ flex: 1, background: 'var(--app-card)', border: '1px solid var(--app-border-soft)', borderRadius: 14, padding: '12px 4px 10px', color: 'var(--app-text-2)', fontFamily: 'var(--app-font)', fontSize: 11.5, fontWeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, cursor: fn ? 'pointer' : 'default' }}>
            {ico(path, 19)}{label}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, padding: '0 14px', overflow: 'hidden', position: 'relative' }}>
        <Sect>Assets</Sect>
        <AppCard>
          <AppListRow iconSrc={CH.btc} name="Bitcoin" sub="0.482 BTC" value="$31,204.10" delta="+2.4%" />
          <div style={{ height: 12 }} />
          <AppListRow iconSrc={CH.eth} name="Ethereum" sub="4.18 ETH" value="$11,410.00" delta="-0.6%" deltaDir="down" />
          <div style={{ height: 12 }} />
          <AppListRow iconSrc={CH.sol} name="Solana" sub="62.4 SOL" value="$4,088.20" delta="+5.1%" />
          <div style={{ height: 12 }} />
          <AppListRow iconSrc={CH.bnb} name="BNB" sub="2.10 BNB" value="$1,501.80" delta="+0.8%" />
        </AppCard>
      </div>
      <Fade />
      <AppBottomNav active="wallet" />
    </AppScreen>
  );
}

/* ---------------- SWAP ---------------- */
function SwapScreen({ go }) {
  const [placed, setPlaced] = React.useState(false);
  return (
    <AppScreen>
      <AppStatusBar />
      <AppBackHeader title="Swap" onBack={() => go('wallet')} />
      <div style={{ flex: 1, padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <AppAmountField amount="0.482" symbol="BTC" iconSrc={CH.btc} fiat="≈ $31,204.10" balance="Balance 0.61" />
        <div style={{ position: 'relative', height: 0, zIndex: 2, display: 'grid', placeItems: 'center' }}>
          <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--app-elev)', border: '3px solid var(--app-bg)', display: 'grid', placeItems: 'center', marginTop: -8, color: 'var(--app-text-2)' }}>{ico(<><path d="M7 4v16" /><path d="M3 16l4 4 4-4" /><path d="M17 20V4" /><path d="M13 8l4-4 4 4" /></>, 15)}</span>
        </div>
        <AppAmountField amount="386.4" symbol="SOL" iconSrc={CH.sol} fiat="≈ $31,142.60" balance="Balance 62.4" action={null} />
        <AppCard style={{ marginTop: 10 }}>
          {[['Route', 'Native · THORChain'], ['Rate', '1 BTC = 801.7 SOL'], ['Network fee', 'Gasless'], ['Swap fee', '0.10% · Gold tier']].map(([k, v], i) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--app-font)', fontSize: 13, padding: '8px 0', borderTop: i ? '1px solid rgba(255,255,255,0.05)' : 0 }}>
              <span style={{ color: 'var(--app-text-3)', fontWeight: 500 }}>{k}</span>
              <span style={{ color: v === 'Gasless' ? 'var(--app-up)' : 'var(--app-text)', fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </AppCard>
      </div>
      {placed && <AppToast>Swap submitted — settling natively</AppToast>}
      <div style={{ padding: '0 14px 6px' }}><AppButton onClick={() => setPlaced(true)}>{placed ? 'Submitted' : 'Review swap'}</AppButton></div>
      <AppHomeIndicator />
    </AppScreen>
  );
}

/* ---------------- EARN ---------------- */
function EarnScreen() {
  const [tab, setTab] = React.useState('Savers');
  const ROWS = {
    Savers: [['USDC', 'Ethereum', '8.42%', 'Aave', CH.eth], ['USDT', 'BNB Chain', '7.10%', 'Venus', CH.bnb], ['DAI', 'Ethereum', '6.88%', 'Aave', CH.eth]],
    Pools: [['BTC / RUNE', 'THORChain', '14.20%', 'THORChain', CH.btc], ['ETH / RUNE', 'THORChain', '11.05%', 'THORChain', CH.eth], ['SOL / USDC', 'Orca', '9.60%', 'Orca', CH.sol]],
    Stake: [['$TITN', 'Gold tier at 250k', '18.40%', 'THORWallet', A + '/titn-token.webp'], ['XLM', 'Stellar', '4.10%', 'Stellar', CH.xlm]],
  };
  return (
    <AppScreen>
      <AppStatusBar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px 4px' }}>
        <AppTabs tabs={['Savers', 'Pools', 'Stake']} active={tab} onChange={setTab} />
        <AppIconButton>{ico(<><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></>, 16)}</AppIconButton>
      </div>
      <div style={{ flex: 1, padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8, overflow: 'hidden' }}>
        <AppCard padding={18} radius={18} style={{ background: 'var(--app-elev)', border: '1px solid var(--app-border)' }}>
          <div style={{ fontFamily: 'var(--app-font)', fontSize: 12, fontWeight: 600, color: 'var(--app-text-3)' }}>YOUR POSITIONS</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginTop: 12, fontFamily: 'var(--app-font)' }}>
            <div><div style={{ fontSize: 12, color: 'var(--app-text-3)', fontWeight: 600 }}>Deposited</div><div style={{ fontSize: 16, fontWeight: 700, marginTop: 5, fontVariantNumeric: 'tabular-nums' }}>$12,480.00</div></div>
            <div style={{ textAlign: 'right' }}><div style={{ fontSize: 12, color: 'var(--app-text-3)', fontWeight: 600 }}>Earned</div><div style={{ fontSize: 16, fontWeight: 700, marginTop: 5, color: 'var(--app-up)', fontVariantNumeric: 'tabular-nums' }}>+$412.08</div></div>
          </div>
        </AppCard>
        <div style={{ display: 'flex', gap: 8 }}><AppChip on>Stablecoins</AppChip><AppChip>Majors</AppChip><AppChip>New</AppChip></div>
        <Sect>{tab === 'Stake' ? 'Staking' : tab}</Sect>
        <AppCard>
          {ROWS[tab].map(([name, sub, apy, prov, icon], i) => (
            <React.Fragment key={name}>
              {i > 0 && <div style={{ height: 12 }} />}
              <AppListRow iconSrc={icon} name={name} sub={sub} right={
                <div style={{ textAlign: 'right', fontFamily: 'var(--app-font)' }}>
                  <span style={{ display: 'block', fontSize: 15.5, fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--app-accent)' }}>{apy}</span>
                  <span style={{ display: 'block', fontSize: 12, color: 'var(--app-text-3)', fontWeight: 500, marginTop: 5 }}>{prov}</span>
                </div>
              } />
            </React.Fragment>
          ))}
        </AppCard>
      </div>
      <Fade />
      <AppBottomNav active="earn" />
    </AppScreen>
  );
}

/* ---------------- MULTISIG ---------------- */
function MultisigScreen({ go }) {
  const [paired, setPaired] = React.useState(2);
  return (
    <AppScreen>
      <AppStatusBar />
      <AppBackHeader title="Create vault" onBack={() => go('wallet')} />
      <div style={{ flex: 1, padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <AppBanner>Pair at least 2 devices</AppBanner>
          <div style={{ background: 'rgba(24,41,61,0.45)', border: '1px solid var(--app-border-soft)', borderTop: 0, borderRadius: '0 0 16px 16px', padding: '18px 14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[['iPhone 16', 1], ['MacBook Pro', 2], ['Add device', 3]].map(([label, n]) => {
                const on = paired >= n;
                const add = n === 3;
                return (
                  <button key={label} onClick={() => add && setPaired(3)} style={{ position: 'relative', background: 'var(--app-card)', border: `1px ${add && paired < 3 ? 'dashed' : 'solid'} ${on && !add ? 'rgba(87,164,255,0.6)' : 'var(--app-border)'}`, borderRadius: 12, padding: '16px 8px 12px', textAlign: 'center', cursor: add ? 'pointer' : 'default', color: 'var(--app-text-2)', fontFamily: 'var(--app-font)' }}>
                    {ico(add && paired < 3 ? <><path d="M12 5v14" /><path d="M5 12h14" /></> : <><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10.5 19h3" /></>, 30)}
                    <span style={{ display: 'block', fontSize: 12, fontWeight: 600, marginTop: 9 }}>{add && paired >= 3 ? 'iPad' : label}</span>
                    {on && !add && <span style={{ position: 'absolute', top: -7, right: -7, width: 22, height: 22, borderRadius: '50%', background: 'var(--app-primary)', border: '2px solid var(--app-bg)', display: 'grid', placeItems: 'center', color: '#fff' }}>{ico(<path d="M4 12.5l5 5L20 6.5" />, 10)}</span>}
                  </button>
                );
              })}
            </div>
            <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: 'var(--app-text-2)', margin: '16px 0 4px', fontFamily: 'var(--app-font)' }}>{Math.min(paired, 2)} of {paired} signatures required</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 14 }}>
              {['Keys generated on each device', 'No seed phrase to write down', 'Recover the vault if a device is lost'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'rgba(28,48,70,0.65)', border: '1px solid rgba(36,58,84,0.8)', borderRadius: 12, padding: '12px 13px', fontFamily: 'var(--app-font)', fontSize: 12.5, fontWeight: 500, color: 'var(--app-text-2)' }}>
                  <span style={{ color: 'var(--app-active)', flexShrink: 0, display: 'grid' }}>{ico(<path d="M4 12.5l5 5L20 6.5" />, 15)}</span>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <AppInputField label="Vault name" value="Main vault" action="Edit" helper="Visible only on your devices" />
      </div>
      <div style={{ padding: '0 14px 6px' }}><AppButton>Create vault</AppButton></div>
      <AppHomeIndicator />
    </AppScreen>
  );
}

/* ---------------- CARD ---------------- */
function CardScreen() {
  const [frozen, setFrozen] = React.useState(false);
  return (
    <AppScreen>
      <AppStatusBar />
      <AppBackHeader title="Card" />
      <div style={{ flex: 1, padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
        <img src={A + '/cards/card-swiss.png'} alt="THORWallet Swiss card" style={{ width: '100%', borderRadius: 16, filter: frozen ? 'grayscale(1) brightness(0.7)' : 'none', transition: 'filter 300ms var(--ease)' }} />
        <div style={{ display: 'flex', gap: 10 }}>
          {[['Top up', <><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></>, null], [frozen ? 'Unfreeze' : 'Freeze', <><rect x="5" y="10" width="14" height="10" rx="2.5" /><path d="M8.5 10V7.5a3.5 3.5 0 017 0V10" /></>, () => setFrozen(!frozen)], ['Details', <><circle cx="12" cy="12" r="9" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>, null]].map(([label, path, fn]) => (
            <button key={label} onClick={fn || undefined} style={{ flex: 1, background: 'var(--app-card)', border: '1px solid var(--app-border-soft)', borderRadius: 14, padding: '12px 4px 10px', color: fn && frozen ? 'var(--app-active)' : 'var(--app-text-2)', fontFamily: 'var(--app-font)', fontSize: 11.5, fontWeight: 600, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, cursor: fn ? 'pointer' : 'default' }}>{ico(path, 19)}{label}</button>
          ))}
        </div>
        <AppCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--app-font)' }}>
            <div><div style={{ fontSize: 12, color: 'var(--app-text-3)', fontWeight: 600 }}>Swiss account</div><div style={{ fontSize: 20, fontWeight: 700, marginTop: 5, fontVariantNumeric: 'tabular-nums' }}>CHF 1,240.55</div></div>
            <div style={{ textAlign: 'right' }}><div style={{ fontSize: 12, color: 'var(--app-text-3)', fontWeight: 600 }}>This month</div><div style={{ fontSize: 20, fontWeight: 700, marginTop: 5, fontVariantNumeric: 'tabular-nums' }}>CHF 812.40</div></div>
          </div>
        </AppCard>
        <Sect>Recent</Sect>
        <AppCard>
          {[['Migros', 'Zürich · Today', '−CHF 42.10'], ['Spotify', 'Subscription · Yesterday', '−CHF 12.95'], ['Top up from BTC', '0.0006 BTC · 2 Sep', '+CHF 500.00']].map(([n, s, v], i) => (
            <React.Fragment key={n}>{i > 0 && <div style={{ height: 12 }} />}
              <AppListRow icon={n[0]} name={n} sub={s} right={<span style={{ fontFamily: 'var(--app-font)', fontSize: 14, fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: v[0] === '+' ? 'var(--app-up)' : 'var(--app-text)' }}>{v}</span>} />
            </React.Fragment>
          ))}
        </AppCard>
      </div>
      <Fade />
      <AppBottomNav active="card" />
    </AppScreen>
  );
}

const SCREENS = [
  ['wallet', 'Wallet', 'Home', WalletScreen],
  ['swap', 'Swap', 'Trade', SwapScreen],
  ['earn', 'Earn', 'Yield', EarnScreen],
  ['multisig', 'Create vault', 'Multisig', MultisigScreen],
  ['card', 'Card', 'Spend', CardScreen],
];

function AppKit() {
  const [id, setId] = React.useState('wallet');
  const Screen = (SCREENS.find((s) => s[0] === id) || SCREENS[0])[3];
  return (
    <div className="kit">
      <div className="legend">
        <h1>THORWallet app</h1>
        <p>The real wallet UI at 375×812 — Montserrat, #121F32 canvas, solid-blue actions. Tap a screen, then tap inside it: the swap submits, the card freezes, the vault pairs a third device.</p>
        <ul>{SCREENS.map(([k, label, kind]) => (
          <li key={k}><button className={id === k ? 'on' : ''} onClick={() => setId(k)}>{label}<span>{kind}</span></button></li>
        ))}</ul>
      </div>
      <div className="phone"><div className="screen">
        <div style={{ position: 'absolute', top: 0, left: 0, transform: 'scale(' + (390 / 375) + ')', transformOrigin: '0 0' }}>
          <Screen go={setId} />
        </div>
      </div></div>
    </div>
  );
}

window.AppKit = AppKit;
