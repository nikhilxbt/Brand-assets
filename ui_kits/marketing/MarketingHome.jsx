const { SiteNav, SiteFooter, SectionHead, FeaturePoint, CapabilityRail, PlanCard, PostCard, DataTable, TierRow, RewardBand, NewsletterBand, LogoWall, Button, Chip, Eyebrow, AccentText, StatTile, StoreBadge, DeviceFrame } = window.ThorwalletBrandDesignWebsite_258ce2;

const A = '../../assets';

function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(96px,11vh,150px)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(50% 38% at 50% 18%,rgba(0,204,255,0.16),transparent 60%),radial-gradient(50% 50% at 72% 70%,rgba(51,255,153,0.12),transparent 64%),radial-gradient(46% 50% at 24% 74%,rgba(42,107,242,0.12),transparent 64%)' }} />
      <div className="container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <img src={A + '/logos/thorwallet-lockup-gradient.png'} alt="THORWallet" style={{ width: 'clamp(186px,21vw,300px)', marginBottom: 'clamp(20px,2.6vw,34px)', filter: 'drop-shadow(0 10px 44px rgba(0,204,255,0.28))' }} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2.4rem,5.6vw,5.4rem)', lineHeight: 0.97, letterSpacing: '-0.035em', color: 'var(--text-hi)', textWrap: 'balance', maxWidth: '18ch' }}>
          The Best Crypto Wallet For <AccentText outline>Swaps &amp; DeFi</AccentText>
        </h1>
        <p style={{ fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--text-mid)', maxWidth: '56ch', margin: 'clamp(16px,2vw,26px) auto 0' }}>
          All-in-one mobile DeFi wallet app. Swap BTC, ETH, SOL &amp; more easily. Secure multi-chain multisig &amp; spend anywhere with your crypto card.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 'clamp(24px,3vw,38px)' }}>
          <StoreBadge store="ios" href="#" /><StoreBadge store="android" href="#" />
        </div>
        <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'clamp(30px,3.6vw,46px)' }}>
          {[['$2.5B+', 'Swapped natively'], ['20k+', 'Tokens supported'], ['★ +3000', 'Five-star ratings'], ['Since 2021', 'Self-custody']].map(([v, k], i) => (
            <div key={k} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '2px clamp(20px,3vw,42px)', borderLeft: i ? '1px solid rgba(255,255,255,0.12)' : 0 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.6rem,2.3vw,2rem)', letterSpacing: '-0.02em', lineHeight: 1, background: 'var(--signal-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{v}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-low)' }}>{k}</span>
            </div>
          ))}
        </div>
        <img src={A + '/hero-phone.webp'} alt="THORWallet app" style={{ width: 'min(78vw,900px)', marginTop: 'clamp(24px,4vw,56px)' }} />
      </div>
    </section>
  );
}

function ProofBand() {
  return (
    <section style={{ padding: 'clamp(56px,7vw,104px) 0', borderBlock: '1px solid var(--hairline)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)' }}>
          {[['$2.5B+', 'Swapped natively — no bridges'], ['★ 4.8', 'App Store · 3,000+ five-star ratings'], ['20,000+', 'Tokens across every major chain'], ['Top 100', 'Startup World Cup · Pegasus Tech Ventures'], ['2024', 'Swiss Fintech · Venture Leaders']].map(([v, k], i) => (
            <div key={k} style={{ borderLeft: i ? '1px solid var(--hairline-strong)' : 0 }}><StatTile variant="proof" value={v} label={k} /></div>
          ))}
        </div>
        <div style={{ marginTop: 'clamp(52px,6.5vw,84px)' }}>
          <LogoWall label="Backed and recognised by" logos={[{ src: A + '/press/pegasus.png', height: 62 }, { src: A + '/press/venture-leaders.png', height: 52 }, { src: A + '/press/cva.png', height: 46 }, { src: A + '/press/cointelegraph-accelerator.png', height: 30 }]} />
        </div>
      </div>
    </section>
  );
}

function Rails() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Why THORWallet" title={<>Everything on-chain,<br /><AccentText outline>in one app.</AccentText></>} lead="Trade, earn, secure and spend without leaving self-custody." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--hairline)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', overflow: 'hidden', marginTop: 56 }}>
          <CapabilityRail number="01" name="Native cross-chain" desc="No bridges, no wrapped assets — real native settlement across every major chain." factKey="Volume" factValue="$2.5B+" />
          <CapabilityRail number="02" name="20,000+ tokens" desc="Trade across every major chain from one place, with one balance." factKey="Chains" factValue="12" />
          <CapabilityRail number="03" name="Best-rate routing" desc="Aggregated liquidity finds the best path automatically — gasless on supported routes." factKey="Median saving" factValue="0.31%" />
        </div>
      </div>
    </section>
  );
}

function Feature({ eyebrow, title, lead, points, screen, reverse, chips }) {
  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
        <div style={{ order: reverse ? 2 : 1 }}>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} size="h2" />
          {chips && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 26 }}>{chips.map((c) => <Chip key={c[0]} dotColor={c[1]} icon={c[2]}>{c[0]}</Chip>)}</div>}
          {points && <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 40 }}>{points.map((p, i) => <FeaturePoint key={p[0]} number={'0' + (i + 1)} title={p[0]}>{p[1]}</FeaturePoint>)}</div>}
        </div>
        <div style={{ order: reverse ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
          <DeviceFrame src={screen} />
        </div>
      </div>
    </section>
  );
}

function CardPlans() {
  return (
    <section className="section elev" id="card">
      <div className="container">
        <SectionHead eyebrow="Crypto card" title={<>Spend it. <AccentText>Anywhere.</AccentText></>} lead="A Swiss account and a global Mastercard, funded straight from your wallet." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: 48, borderBlock: '1px solid var(--hairline)' }}>
          {[['175+', 'Countries supported'], ['0%', 'FX on EUR and CHF'], ['CHF', 'Swiss IBAN in your name']].map(([v, k], i) => (
            <div key={k} style={{ textAlign: 'center', padding: '34px 24px', borderRight: i < 2 ? '1px solid var(--hairline)' : 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(2rem,3.2vw,2.7rem)', letterSpacing: '-0.035em', lineHeight: 1, color: 'var(--text-hi)' }}>{v}</div>
              <div style={{ marginTop: 12, fontSize: '0.95rem', color: 'var(--text-low)' }}>{k}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 56, alignItems: 'start' }}>
          <PlanCard name="Basic" price="$0" art={A + '/cards/card-basic.png'} cta="Get started" benefits={['Virtual card, instantly', '2% FX on non-EUR spend', 'Apple &amp; Google Pay']} />
          <PlanCard name="Swiss" price="$129" per="once" art={A + '/cards/card-swiss.png'} ribbon="Most popular" featured benefits={['Swiss IBAN in your name', '0.5% FX worldwide', 'Physical card included', 'Priority support']} />
          <PlanCard name="Gold" price="$499" per="once" art={A + '/cards/c-gold.png'} cta="Join the list" benefits={['Metal card', '0% FX worldwide', 'Concierge &amp; lounge access']} />
        </div>
      </div>
    </section>
  );
}

function Titn() {
  return (
    <section className="section" id="titn">
      <div className="container">
        <SectionHead eyebrow="$TITN" title={<>Stake once.<br />Trade cheaper <AccentText>forever.</AccentText></>} lead="Swap fees fall with every tier. No lockups, no subscriptions." />
        <div style={{ border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', overflow: 'hidden', marginTop: 44, background: 'var(--surface)' }}>
          <TierRow head tier="Tier" stake="$TITN staked" fee="Swap fee" />
          <TierRow tier="Base" stake="—" fee="0.35%" />
          <TierRow tier="Bronze" stake="5,000" fee="0.30%" />
          <TierRow tier="Silver" stake="25,000" fee="0.25%" />
          <TierRow tier="Gold" stake="250,000" fee="0.10%" you />
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-low)', marginTop: 18 }}>Tiers recalculate continuously from your on-chain balance. Unstake any time.</p>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="section elev">
      <div className="container">
        <SectionHead eyebrow="Newsroom" title="What we shipped lately" size="h2" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
          <PostCard date="12 Aug 2026" title="Native swaps, explained: why we refuse bridges" thumb={A + '/screens/swap.png'} />
          <PostCard date="04 Aug 2026" title="The Swiss account is live in 175 countries" thumb={A + '/cards/card-hero.png'} />
          <PostCard date="21 Jul 2026" title="Multisig vaults now cover every chain we support" thumb={A + '/screens/multisig.png'} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section style={{ position: 'relative', textAlign: 'center', padding: 'clamp(110px,14vw,190px) 0', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 70% at 50% 50%,rgba(31,217,166,0.22),transparent 70%),radial-gradient(50% 60% at 50% 50%,rgba(42,107,242,0.18),transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--fs-display)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--tr-display)', color: 'var(--text-hi)', marginBottom: 18 }}>All chains.<br />One app.</h2>
        <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-mid)', margin: '0 auto 32px', maxWidth: '40ch' }}>Your keys never leave your phone.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <StoreBadge store="ios" href="#" /><StoreBadge store="android" href="#" />
        </div>
      </div>
    </section>
  );
}

function MarketingHome() {
  return (
    <React.Fragment>
      <SiteNav logo={A + '/logos/thorwallet-logo-white.png'} active="Home" />
      <Hero />
      <ProofBand />
      <Rails />
      <Feature eyebrow="Cross-chain swaps" title={<>Swap across <AccentText outline>every chain.</AccentText></>} lead="One tap, best rate, no bridges." screen={A + '/screens/swap.png'}
        chips={[['BTC', 'var(--chain-btc)', '\u20BF'], ['ETH', 'var(--chain-eth)', '\u039E'], ['SOL', 'var(--chain-sol)', 'S'], ['BNB', 'var(--chain-bnb)', 'B'], ['SUI', 'var(--chain-arb)', 'S']]}
        points={[['No bridges', 'Real native settlement, chain to chain.'], ['Gasless routes', 'Supported pairs settle without a gas top-up.']]} />
      <Feature reverse eyebrow="Multisig" title={<>Your money. <AccentText>Always.</AccentText></>} lead="Multi-device vaults for any chain and any token — no seed phrase to lose." screen={A + '/screens/multisig.png'}
        points={[['Any chain', 'Vaults work across every chain we support.'], ['2-of-3 by default', 'Pair a phone, a laptop and a backup.'], ['No custodian', 'Keys are generated on-device.'], ['Recoverable', 'Lose a device, keep the vault.']]} />
      <Feature eyebrow="Earn" title={<>Yield without <AccentText outline>leaving custody.</AccentText></>} lead="Savers, pools and $TITN staking, all from the wallet you already hold." screen={A + '/screens/earn.png'}
        points={[['Savers', 'Stablecoin yield, withdraw any time.'], ['Pools', 'Provide liquidity on native pairs.']]} />
      <CardPlans />
      <section className="section"><div className="container"><RewardBand title="Spin. Win. Repeat." lead="A free spin every day you swap — plus monthly raffles." art={A + '/reward/spin-wheel.png'} pillValue="$40,000" pillLabel="in monthly raffles" /></div></section>
      <Titn />
      <section className="section"><div className="container">
        <SectionHead eyebrow="Compare" title="Against the wallets you already know" size="h2" />
        <div style={{ marginTop: 44 }}>
          <DataTable head={['', 'THORWallet', 'MetaMask', 'Trust Wallet']} rows={[
            ['Native cross-chain swaps', { value: 'Yes', win: true }, 'Bridges only', 'Bridges only'],
            ['Non-EVM chains', { value: 'BTC, SOL, ATOM…', win: true }, 'EVM only', 'Partial'],
            ['Multisig vaults', { value: 'Any chain', win: true }, '—', '—'],
            ['Card &amp; Swiss IBAN', { value: 'Included', win: true }, '—', '—'],
            ['Self-custodial', 'Yes', 'Yes', 'Yes'],
          ]} />
        </div>
      </div></section>
      <Blog />
      <section className="section"><div className="container"><NewsletterBand title="Ship notes, once a month." lead="Releases, new chains, card news. No noise." /></div></section>
      <FinalCta />
      <SiteFooter logo={A + '/logos/thorwallet-logo-white.png'} />
    </React.Fragment>
  );
}

window.MarketingHome = MarketingHome;
