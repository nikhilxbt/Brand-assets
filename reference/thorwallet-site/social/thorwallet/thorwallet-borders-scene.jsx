/* THORWallet — "EVERY BORDER. ONE CARD." — streaming flag ticker.
   Dark THORWallet brand language. Distinct from the MINE piece.
   Reads globals from animations.jsx + countries-data.js. 1920x1080, 10s loop. */
(function () {
  const { Stage, Sprite, useTime, useSprite, Easing, clamp } = window;
  const COUNTRIES = window.MINE_COUNTRIES;     // [[name,cc],...] 172 (card availability)
  const flag = window.flagEmoji;

  const MONT = 'Montserrat, -apple-system, "Helvetica Neue", sans-serif';
  const EMOJI = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  const INK = '#FFFFFF', INK2 = '#AEC2D2', INK3 = '#6E869B';
  const GRAD = 'linear-gradient(100deg,#00CCFF 0%,#33FF99 100%)';
  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);

  function Grad({ children, style }) {
    return <span style={{ background: GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text',
      WebkitTextFillColor: 'transparent', color: 'transparent', ...style }}>{children}</span>;
  }

  // ---------- backdrop ----------
  function Backdrop() {
    const t = useTime();
    const d = Math.sin(t * 0.2) * 16;
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background:
        'radial-gradient(1200px 900px at 78% -8%, rgba(0,204,255,0.10), transparent 60%),' +
        'radial-gradient(1200px 900px at 12% 108%, rgba(51,255,153,0.09), transparent 60%),' +
        'linear-gradient(160deg,#0B1320 0%,#0A111C 55%,#070D16 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize: '96px 96px', transform: `translateY(${d}px)` }} />
      </div>
    );
  }

  // ---------- one streaming lane ----------
  const PW = 152, PH = 60, PER = 40;
  function Pill({ cc }) {
    return (
      <div style={{ width: PW, padding: '0 7px', boxSizing: 'border-box', display: 'flex', alignItems: 'center' }}>
        <div style={{ height: PH, flex: 1, display: 'flex', alignItems: 'center', gap: 11, padding: '0 16px',
          borderRadius: 14, background: 'rgba(22,38,60,0.92)', border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }}>
          <span style={{ fontFamily: EMOJI, fontSize: 27, lineHeight: 1 }}>{flag(cc)}</span>
          <span style={{ fontFamily: MONT, fontWeight: 700, fontSize: 16, color: '#D6E5F2', letterSpacing: '0.05em' }}>{cc}</span>
        </div>
      </div>
    );
  }
  function Lane({ y, dir, spd, offset }) {
    const t = useTime();
    const copyW = PER * PW;
    const strip = React.useMemo(() => {
      const arr = [];
      for (let i = 0; i < PER; i++) { const c = COUNTRIES[(offset + i) % COUNTRIES.length]; arr.push(<Pill key={i} cc={c[1]} />); }
      return arr;
    }, []);
    const base = (t * spd) % copyW;
    const tx = dir < 0 ? -base : base - copyW;
    return (
      <div style={{ position: 'absolute', top: y, left: 0, height: PH, display: 'flex', width: copyW * 2,
        transform: `translateX(${tx}px)`, willChange: 'transform' }}>
        {strip}{strip.map((s, i) => React.cloneElement(s, { key: 'b' + i }))}
      </div>
    );
  }
  const LANES = [
    { y: 64, dir: -1, spd: 84, offset: 0 },
    { y: 246, dir: 1, spd: 62, offset: 27 },
    { y: 428, dir: -1, spd: 98, offset: 54 },
    { y: 610, dir: 1, spd: 70, offset: 84 },
    { y: 792, dir: -1, spd: 88, offset: 112 },
    { y: 974, dir: 1, spd: 58, offset: 140 },
  ];
  function LaneField() {
    const t = useTime();
    const op = 0.62 * seg(t, 0, 1.1) * (1 - 0.7 * seg(t, 7.0, 7.8));
    const blur = 5 * seg(t, 7.0, 7.8);
    return (
      <div style={{ position: 'absolute', inset: 0, opacity: op, filter: blur ? `blur(${blur}px)` : 'none' }}>
        {LANES.map((l, i) => <Lane key={i} {...l} />)}
      </div>
    );
  }

  // ---------- scrims ----------
  function Scrims() {
    const t = useTime();
    const leftOp = 1 - seg(t, 6.3, 7.0);
    const centerOp = seg(t, 6.7, 7.3);
    return (
      <React.Fragment>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(7,13,22,0.55) 0%, rgba(7,13,22,0) 18%, rgba(7,13,22,0) 82%, rgba(7,13,22,0.55) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: leftOp,
          background: 'linear-gradient(90deg, rgba(8,14,23,0.96) 0%, rgba(8,14,23,0.78) 34%, rgba(8,14,23,0.18) 60%, rgba(8,14,23,0) 74%)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: centerOp,
          background: 'radial-gradient(1100px 760px at 50% 50%, rgba(7,12,20,0.92) 0%, rgba(7,12,20,0.78) 38%, rgba(7,12,20,0) 70%)' }} />
      </React.Fragment>
    );
  }

  // ---------- hero: 172 in focus (left aligned, counts up) ----------
  function Headline() {
    const t = useTime();
    if (t > 7.1) return null;
    const exit = seg(t, 6.4, 6.95);
    const blockTy = -34 * Easing.easeInCubic(exit);
    const blockOp = 1 - exit;
    const cnt = Math.round(172 * Easing.easeOutCubic(seg(t, 0.55, 1.95)));
    const pop = 1 + 0.05 * (t > 1.7 ? (1 - clamp((t - 1.95) / 0.4, 0, 1)) : 0);
    const subTx = (1 - Easing.easeOutCubic(seg(t, 2.1, 2.7))) * -30;
    return (
      <div style={{ position: 'absolute', left: 134, top: 268, opacity: blockOp, transform: `translateY(${blockTy}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: seg(t, 0.3, 0.75) }}>
          <span style={{ width: 46, height: 3, borderRadius: 3, background: GRAD, display: 'inline-block' }} />
          <span style={{ fontFamily: MONT, fontWeight: 700, fontSize: 21, letterSpacing: '0.24em', color: '#5FE3C2' }}>THE THORWALLET CARD WORKS IN</span>
        </div>
        <div style={{ fontFamily: MONT, fontWeight: 800, fontSize: 304, lineHeight: 0.9, letterSpacing: '-0.045em',
          marginTop: 10, opacity: seg(t, 0.5, 0.85), transform: `scale(${pop})`, transformOrigin: 'left center' }}><Grad>{cnt}</Grad></div>
        <div style={{ fontFamily: MONT, fontWeight: 800, fontSize: 84, letterSpacing: '0.1em', color: INK,
          marginTop: 4, opacity: seg(t, 1.3, 1.85) }}>COUNTRIES</div>
        <div style={{ width: 270 * Easing.easeOutCubic(seg(t, 1.9, 2.5)), height: 4, borderRadius: 4, background: GRAD, marginTop: 30 }} />
        <div style={{ fontFamily: MONT, fontWeight: 500, fontSize: 31, color: INK2, marginTop: 26,
          opacity: seg(t, 2.1, 2.7), transform: `translateX(${subTx}px)`, letterSpacing: '0.005em' }}>
          One card, every border. <b style={{ fontWeight: 700, color: '#EAF4FB' }}>Self-custodial.</b> Onchain.
        </div>
      </div>
    );
  }

  // ---------- closing lockup ----------
  function Lockup() {
    const t = useTime();
    if (t < 6.8) return null;
    const ty = (1 - Easing.easeOutCubic(seg(t, 6.9, 7.7))) * 26;
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', transform: `translateY(${ty}px)` }}>
        <img src="thorwallet-logo-white.png" alt="THORWallet" style={{ height: 98, opacity: seg(t, 7.0, 7.6) }} />
        <div style={{ fontFamily: MONT, fontWeight: 600, fontSize: 37, color: '#EAF4FB', letterSpacing: '-0.01em',
          marginTop: 36, opacity: seg(t, 7.3, 7.9) }}>The Best Crypto Wallet for <Grad>Swaps & DeFi.</Grad></div>
        <div style={{ width: 200, height: 4, borderRadius: 4, background: GRAD, marginTop: 30, opacity: seg(t, 7.5, 8.0) }} />
        <div style={{ fontFamily: MONT, fontWeight: 500, fontSize: 22, color: INK3, letterSpacing: '0.18em',
          marginTop: 28, opacity: seg(t, 7.7, 8.2) }}>iOS · ANDROID · WEB</div>
      </div>
    );
  }

  function Film() {
    return (
      <Stage width={1920} height={1080} duration={10} background="#080E17" persistKey="tw-borders">
        <Backdrop />
        <LaneField />
        <Scrims />
        <Headline />
        <Lockup />
      </Stage>
    );
  }
  window.ThorBordersFilm = Film;
})();
