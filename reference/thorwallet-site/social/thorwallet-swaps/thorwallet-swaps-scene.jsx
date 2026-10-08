/* THORWallet — "The most cross-chain routes in crypto" — swaps hero.
   Dark THORWallet brand. Real swap screen + converging route constellation.
   Reads globals from animations.jsx. 1920x1080, ~10s loop. */
(function () {
  const { Stage, useTime, useSprite, Sprite, Easing, clamp } = window;
  const MONT = 'Montserrat, -apple-system, "Helvetica Neue", sans-serif';
  const INK = '#FFFFFF', INK2 = '#AEC2D2', INK3 = '#7E97AC';
  const GRAD = 'linear-gradient(100deg,#00CCFF 0%,#33FF99 100%)';
  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);

  function Grad({ children, style }) {
    return <span style={{ background: GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text',
      WebkitTextFillColor: 'transparent', color: 'transparent', ...style }}>{children}</span>;
  }

  // chain coins
  const COIN = {
    BTC: { bg: '#F7931A', t: '\u20BF', c: '#fff' }, ETH: { bg: '#6481E7', t: '\u039E', c: '#fff' },
    SOL: { bg: 'linear-gradient(135deg,#9945FF,#14F195)', t: 'S', c: '#fff' },
    BNB: { bg: '#F0B90B', t: 'B', c: '#1a1a1a' }, AVAX: { bg: '#E84142', t: 'A', c: '#fff' },
    RUNE: { bg: '#0FB8A6', t: 'R', c: '#04201d' }, ATOM: { bg: '#2E3148', t: '\u269B', c: '#9CA2FF' },
    XRP: { bg: '#23292F', t: 'X', c: '#fff' },
  };
  const NODES = [
    ['BTC', 902, 222], ['RUNE', 1052, 300], ['ETH', 838, 430], ['AVAX', 1086, 520],
    ['XRP', 820, 560], ['SOL', 892, 660], ['ATOM', 1108, 690], ['BNB', 980, 800],
  ];
  const TX = 1196, TY = 470;          // convergence target (into the phone)

  // ---------- backdrop ----------
  function Backdrop() {
    const t = useTime();
    const d = Math.sin(t * 0.2) * 14;
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background:
        'radial-gradient(1200px 900px at 72% -10%, rgba(0,204,255,0.12), transparent 60%),' +
        'radial-gradient(1100px 820px at 14% 112%, rgba(51,255,153,0.10), transparent 60%),' +
        'linear-gradient(160deg,#0B1320 0%,#0A111C 55%,#070D16 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.45,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize: '96px 96px', transform: `translateY(${d}px)` }} />
      </div>
    );
  }

  // ---------- route lines (draw + flow), behind nodes ----------
  function RouteLines() {
    const t = useTime();
    const dimAll = 1 - seg(t, 7.5, 8.2);
    return (
      <svg style={{ position: 'absolute', inset: 0 }} width="1920" height="1080" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="rl" x1="0" y1="0" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00CCFF" /><stop offset="1" stopColor="#33FF99" />
          </linearGradient>
        </defs>
        {NODES.map((n, i) => {
          const [sym, x, y] = n;
          const drawS = 2.5 + i * 0.12;
          const draw = Easing.easeInOutCubic(seg(t, drawS, drawS + 0.9));
          if (draw <= 0) return null;
          const mx = (x + TX) / 2, my = (y + TY) / 2 - 26;
          const d = `M ${x} ${y} Q ${mx} ${my} ${TX} ${TY}`;
          const flow = -((t * 60) % 32);
          return (
            <g key={i} opacity={dimAll}>
              <path d={d} fill="none" stroke="url(#rl)" strokeWidth="2.4" strokeLinecap="round"
                pathLength="1" strokeDasharray="1" strokeDashoffset={1 - draw} opacity="0.5" />
              {draw > 0.98 && (
                <path d={d} fill="none" stroke="url(#rl)" strokeWidth="3" strokeLinecap="round"
                  pathLength="100" strokeDasharray="2 18" strokeDashoffset={flow} opacity="0.9" />
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  function ChainNode({ sym, x, y, i }) {
    const t = useTime();
    const s = 2.2 + i * 0.1;
    const p = seg(t, s, s + 0.5);
    if (p <= 0) return null;
    const dim = 1 - seg(t, 7.3, 8.1);
    const blurN = 8 * seg(t, 7.3, 8.1);
    const sc = 0.4 + 0.6 * Easing.easeOutBack(p);
    const c = COIN[sym];
    const float = Math.sin((t + i) * 1.1) * 4;
    return (
      <div style={{ position: 'absolute', left: x - 33, top: y - 33, width: 66, height: 66, opacity: p * dim,
        filter: blurN ? `blur(${blurN}px)` : 'none',
        transform: `translateY(${float}px) scale(${sc})` }}>
        <div style={{ width: 66, height: 66, borderRadius: '50%', background: c.bg, color: c.c,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: MONT, fontWeight: 700,
          fontSize: 27, border: '1px solid rgba(255,255,255,0.16)',
          boxShadow: '0 10px 26px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.18)' }}>{c.t}</div>
        <div style={{ position: 'absolute', top: 70, left: '50%', transform: 'translateX(-50%)',
          fontFamily: MONT, fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', color: '#C7D6E4', whiteSpace: 'nowrap' }}>{sym}</div>
      </div>
    );
  }

  // ---------- phone with real swap screen ----------
  function Phone() {
    const t = useTime();
    const inP = Easing.easeOutCubic(seg(t, 0.2, 1.1));
    const tx = (1 - inP) * 80;
    const float = Math.sin(t * 0.8) * 6;
    const out = seg(t, 7.4, 8.2);
    return (
      <div style={{ position: 'absolute', left: 1196, top: 150, width: 360, opacity: inP * (1 - out),
        filter: out ? `blur(${10 * out}px)` : 'none',
        transform: `translate(${tx}px, ${float}px)` }}>
        <div style={{ padding: 11, borderRadius: 52, background: '#05080D',
          boxShadow: '0 50px 110px -20px rgba(0,0,0,0.75), 0 0 0 1.5px rgba(255,255,255,0.10), 0 0 70px rgba(0,204,255,0.16)' }}>
          <img src="swap.png" alt="THORWallet swap" style={{ width: '100%', display: 'block', borderRadius: 42 }} />
        </div>
      </div>
    );
  }

  // ---------- floating best-route card (overlaps phone's empty area) ----------
  function RoutesCard() {
    const t = useTime();
    const p = seg(t, 5.5, 6.1);
    if (p <= 0) return null;
    const dim = 1 - seg(t, 7.4, 8.0);
    const ty = (1 - Easing.easeOutBack(p)) * 24;
    const rows = [
      ['THORChain', '0.26336', true], ['Maya', '0.26312', false], ['1inch', '0.26288', false],
    ];
    return (
      <div style={{ position: 'absolute', left: 968, top: 690, width: 372, opacity: p * dim,
        transform: `translateY(${ty}px)`, fontFamily: MONT,
        background: 'rgba(16,28,44,0.96)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 18,
        padding: '15px 16px', boxShadow: '0 28px 60px rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', color: INK3, marginBottom: 11 }}>BEST ROUTE, FOUND</div>
        {rows.map((r, i) => {
          const rp = seg(t, 5.9 + i * 0.12, 6.3 + i * 0.12);
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 11px', marginBottom: 7,
              borderRadius: 11, opacity: rp,
              background: r[2] ? 'rgba(51,255,153,0.08)' : 'rgba(255,255,255,0.03)',
              border: r[2] ? '1px solid rgba(51,255,153,0.5)' : '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ width: 26, height: 26, borderRadius: 7, background: r[2] ? GRAD : 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: r[2] ? '#04201d' : '#9fb3c4' }}>{r[0][0]}</span>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: r[2] ? '#EAFBF3' : '#B9C9D6' }}>{r[0]}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: r[2] ? '#fff' : '#90A6B6' }}>{r[1]} <span style={{ color: INK3, fontWeight: 500, fontSize: 12 }}>BTC</span></span>
              {r[2] && <span style={{ fontSize: 10, fontWeight: 800, color: '#04201d', background: '#33FF99', borderRadius: 6, padding: '2px 6px' }}>BEST</span>}
            </div>
          );
        })}
      </div>
    );
  }

  // ---------- left copy (beats 1-2) ----------
  function Copy() {
    const t = useTime();
    if (t > 8.0) return null;
    const exit = seg(t, 7.4, 7.95);
    const op = 1 - exit, ty = -28 * Easing.easeInCubic(exit);
    const bullets = [
      ['Native swaps - no bridges, no wrapped tokens.', 4.6],
      ['Aggregated routing finds the best price.', 5.1],
      ['Fully DeFi. No middleman.', 5.6],
    ];
    return (
      <div style={{ position: 'absolute', left: 130, top: 250, width: 760, opacity: op, transform: `translateY(${ty}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 15, opacity: seg(t, 0.3, 0.8) }}>
          <span style={{ width: 44, height: 3, borderRadius: 3, background: GRAD }} />
          <span style={{ fontFamily: MONT, fontWeight: 700, fontSize: 20, letterSpacing: '0.24em', color: '#5FE3C2' }}>CROSS-CHAIN SWAPS</span>
        </div>
        <div style={{ fontFamily: MONT, fontWeight: 800, fontSize: 82, lineHeight: 1.03, letterSpacing: '-0.025em', color: INK, marginTop: 24 }}>
          <div style={{ opacity: seg(t, 0.7, 1.2) }}>The most</div>
          <div style={{ opacity: seg(t, 1.05, 1.55) }}><Grad>cross-chain routes</Grad></div>
          <div style={{ opacity: seg(t, 1.4, 1.9) }}>in crypto.</div>
        </div>
        <div style={{ marginTop: 40 }}>
          {bullets.map((b, i) => {
            const bp = seg(t, b[1], b[1] + 0.5);
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 16,
                opacity: bp, transform: `translateX(${(1 - Easing.easeOutCubic(bp)) * -24}px)` }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', flex: 'none', background: 'rgba(51,255,153,0.14)',
                  border: '1px solid rgba(51,255,153,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#33FF99" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </span>
                <span style={{ fontFamily: MONT, fontWeight: 500, fontSize: 27, color: INK2 }}>{b[0]}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- closing lockup (left) ----------
  function Lockup() {
    const t = useTime();
    if (t < 7.7) return null;
    const ty = (1 - Easing.easeOutCubic(seg(t, 7.8, 8.5))) * 26;
    return (
      <div style={{ position: 'absolute', left: 130, top: 430, opacity: seg(t, 7.9, 8.5), transform: `translateY(${ty}px)` }}>
        <img src="thorwallet-logo-white.png" alt="THORWallet" style={{ height: 84, opacity: seg(t, 7.9, 8.4) }} />
        <div style={{ fontFamily: MONT, fontWeight: 600, fontSize: 40, color: '#EAF4FB', letterSpacing: '-0.01em',
          marginTop: 30, opacity: seg(t, 8.2, 8.7) }}>The Best Crypto Wallet for <Grad>Swaps & DeFi.</Grad></div>
        <div style={{ width: 200, height: 4, borderRadius: 4, background: GRAD, marginTop: 26, opacity: seg(t, 8.5, 9.0) }} />
      </div>
    );
  }

  function Film() {
    return (
      <Stage width={1920} height={1080} duration={10} background="#080E17" persistKey="tw-swaps">
        <Backdrop />
        <RouteLines />
        {NODES.map((n, i) => <ChainNode key={i} sym={n[0]} x={n[1]} y={n[2]} i={i} />)}
        <Phone />
        <RoutesCard />
        <Copy />
        <Lockup />
      </Stage>
    );
  }
  window.ThorSwapsFilm = Film;
})();
