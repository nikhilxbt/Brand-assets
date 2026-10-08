/* MINE — "Independence is MINE" — 172 countries motion piece.
   Reads globals from animations.jsx + countries-data.js. 1920x1080, ~11s loop. */
(function () {
  const { Stage, Sprite, useTime, useSprite, Easing, clamp, animate } = window;
  const COUNTRIES = window.MINE_COUNTRIES;          // [[name,cc],...] 172
  const HERO_CC = window.MINE_HERO_CC;
  const HERO_NAMES = window.MINE_HERO_NAMES;
  const flagEmoji = window.flagEmoji;

  const SONO = '"OT Sono", -apple-system, "Helvetica Neue", sans-serif';
  const EMOJI = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  const INK = '#0E1F2A', INK_SOFT = '#5F7286', INK_MUTE = '#8294A1';
  const GRAD = 'linear-gradient(95deg,#89BAA4 6%,#F0C28A 50%,#E8906C 94%)';

  // ---- timeline anchors (seconds) ----
  const DUR = 11;
  const FLOOD_START = 3.5, FLOOD_SPAN = 3.0;        // grid fills 3.5 -> 6.5
  const N = COUNTRIES.length;

  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);    // 0..1 ramp
  const tileAppear = (i) => FLOOD_START + FLOOD_SPAN * Math.sqrt((i + 1) / N);
  const liveCount = (t) => {
    if (t >= FLOOD_START + FLOOD_SPAN) return N;
    const p = clamp((t - FLOOD_START) / FLOOD_SPAN, 0, 1);
    return Math.min(N, Math.floor(N * p * p));
  };

  // ---- gradient text helper ----
  function Grad({ children, style }) {
    return (
      <span style={{
        background: GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', color: 'transparent', ...style,
      }}>{children}</span>
    );
  }

  // ---- ambient backdrop: cream + glow blobs + drifting globe ----
  function Backdrop() {
    const t = useTime();
    const drift = Math.sin(t * 0.18) * 14;
    const rot = t * 1.1;
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden',
        background: 'linear-gradient(135deg,#FAF6F2 0%,#F2ECE6 48%,#EAF0EC 100%)' }}>
        <div style={{ position: 'absolute', top: -260 + drift, right: -180,
          width: 1300, height: 1300, borderRadius: '50%', filter: 'blur(20px)',
          background: 'radial-gradient(circle,rgba(137,186,164,0.26),transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: -360 - drift, left: -220,
          width: 1300, height: 1300, borderRadius: '50%', filter: 'blur(20px)',
          background: 'radial-gradient(circle,rgba(240,194,138,0.20),transparent 62%)' }} />
        <svg style={{ position: 'absolute', top: '50%', left: '50%',
          width: 1500, height: 1500, opacity: 0.10,
          transform: `translate(-50%,-50%) rotate(${rot}deg)` }} viewBox="0 0 980 980" fill="none">
          <g stroke={INK} strokeWidth="1">
            <circle cx="490" cy="490" r="430" />
            <ellipse cx="490" cy="490" rx="430" ry="160" />
            <ellipse cx="490" cy="490" rx="430" ry="300" />
            <ellipse cx="490" cy="490" rx="160" ry="430" />
            <ellipse cx="490" cy="490" rx="300" ry="430" />
            <line x1="60" y1="490" x2="920" y2="490" />
            <line x1="490" y1="60" x2="490" y2="920" />
          </g>
        </svg>
      </div>
    );
  }

  // ---- persistent brand wordmark, small top-center, whole film ----
  function TopMark() {
    const t = useTime();
    // recede slightly once the big lockup wordmark takes over
    const op = t < 7.6 ? 0.55 : 0.55 * (1 - seg(t, 7.6, 8.1));
    return (
      <img src="assets/mine-wordmark-ink.svg" alt="mine"
        style={{ position: 'absolute', top: 70, left: '50%', height: 40,
          transform: 'translateX(-50%)', opacity: op }} />
    );
  }

  // ---- HERO flag (one at a time) ----
  function HeroFlag({ cc, name, sub }) {
    const { localTime, duration } = useSprite();
    const inP = Easing.easeOutCubic(clamp(localTime / 0.20, 0, 1));
    const outP = Easing.easeInCubic(clamp((localTime - (duration - 0.18)) / 0.18, 0, 1));
    const op = inP * (1 - outP);
    const ty = (1 - inP) * 22 - outP * 14;
    const sc = 0.86 + 0.14 * inP;
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', opacity: op,
        transform: `translateY(${ty}px) scale(${sc})` }}>
        <div style={{ fontFamily: EMOJI, fontSize: 188, lineHeight: 1,
          filter: 'drop-shadow(0 18px 34px rgba(14,31,42,0.22))' }}>{flagEmoji(cc)}</div>
        <div style={{ fontFamily: SONO, fontWeight: 600, fontSize: 74, color: INK,
          letterSpacing: '-0.02em', marginTop: 34 }}>{name}</div>
        <div style={{ fontFamily: SONO, fontWeight: 400, fontSize: 24, color: INK_MUTE,
          letterSpacing: '0.02em', marginTop: 10 }}>{sub}</div>
      </div>
    );
  }

  // ---- 172-flag field (persistent backdrop from flood onward) ----
  const COLS = 18;
  const ROWS = Math.ceil(N / COLS);
  const GRIDW = 1720, CELLW = GRIDW / COLS;
  const CELLH = 84;
  const X0 = (1920 - GRIDW) / 2, GRIDH = ROWS * CELLH, Y0 = (1080 - GRIDH) / 2 + 8;

  function FlagField() {
    const t = useTime();
    if (t < FLOOD_START - 0.05) return null;
    let op, blur;
    if (t < 6.5) { op = 0.40 * seg(t, FLOOD_START, FLOOD_START + 0.5); blur = 0; }
    else if (t < 7.5) { op = 0.40 + 0.50 * seg(t, 6.5, 7.5); blur = 0; }
    else { op = 0.90 - 0.74 * seg(t, 7.5, 8.2); blur = 6 * seg(t, 7.5, 8.2); }
    return (
      <div style={{ position: 'absolute', left: X0, top: Y0, width: GRIDW, height: GRIDH,
        opacity: op, filter: blur ? `blur(${blur}px)` : 'none' }}>
        {COUNTRIES.map((c, i) => {
          const ap = tileAppear(i);
          const rt = clamp((t - ap) / 0.28, 0, 1);
          if (rt <= 0) return null;
          const sc = 0.5 + 0.5 * Easing.easeOutBack(rt);
          const col = i % COLS, row = Math.floor(i / COLS);
          return (
            <div key={i} style={{ position: 'absolute', left: col * CELLW, top: row * CELLH,
              width: CELLW, height: CELLH, display: 'flex', alignItems: 'center',
              justifyContent: 'center', opacity: rt, transform: `scale(${sc})` }}>
              <span style={{ fontFamily: EMOJI, fontSize: 52, lineHeight: 1 }}>{flagEmoji(c[1])}</span>
            </div>
          );
        })}
      </div>
    );
  }

  // ---- soft vignette so the counter reads over the field ----
  function CounterVignette() {
    const t = useTime();
    const op = seg(t, FLOOD_START, FLOOD_START + 0.5) * (1 - seg(t, 7.3, 7.9));
    return (
      <div style={{ position: 'absolute', left: '50%', top: 470, width: 1500, height: 760,
        transform: 'translate(-50%,-50%)', opacity: op, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(248,244,239,0.92) 0%, rgba(248,244,239,0.7) 32%, rgba(248,244,239,0) 66%)' }} />
    );
  }

  // ---- big ticking counter ----
  function Counter() {
    const t = useTime();
    if (t < FLOOD_START - 0.1) return null;
    const op = seg(t, FLOOD_START - 0.1, FLOOD_START + 0.25) * (1 - seg(t, 7.4, 7.95));
    const n = liveCount(t);
    const pop = 1 + 0.05 * (1 - clamp((t - 6.5) / 0.4, 0, 1)) * (t > 6.5 ? 1 : 0);
    const ty = -28 * seg(t, 7.4, 7.95);
    const lblOp = seg(t, 6.55, 7.05) * (1 - seg(t, 7.4, 7.9));
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', opacity: op,
        transform: `translateY(${ty}px)` }}>
        <Grad style={{ fontFamily: SONO, fontWeight: 600, fontSize: 360, lineHeight: 0.9,
          letterSpacing: '-0.04em', display: 'inline-block', transform: `scale(${pop})` }}>{n}</Grad>
        <div style={{ fontFamily: SONO, fontWeight: 600, fontSize: 64, color: INK,
          letterSpacing: '0.18em', marginTop: 6, opacity: lblOp }}>COUNTRIES</div>
      </div>
    );
  }

  // ---- closing promise lockup ----
  function EndLockup() {
    const t = useTime();
    if (t < 7.6) return null;
    const eOp = seg(t, 7.7, 8.2);
    const lOp = seg(t, 7.95, 8.5);
    const wOp = seg(t, 8.25, 8.8);
    const dOp = seg(t, 8.5, 9.0);
    const sOp = seg(t, 8.7, 9.2);
    const ty = (1 - Easing.easeOutCubic(seg(t, 7.7, 8.5))) * 26;
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', transform: `translateY(${ty}px)` }}>
        <div style={{ fontFamily: SONO, fontWeight: 600, fontSize: 22, color: INK_SOFT,
          letterSpacing: '0.30em', opacity: eOp }}>172 COUNTRIES · ONE CARD</div>
        <div style={{ fontFamily: SONO, fontWeight: 500, fontSize: 92, color: INK,
          letterSpacing: '-0.02em', marginTop: 30, opacity: lOp }}>Independence is</div>
        <img src="assets/mine-wordmark-ink.svg" alt="mine"
          style={{ height: 132, marginTop: 18, opacity: wOp }} />
        <div style={{ width: 240, height: 4, borderRadius: 999, marginTop: 34,
          background: GRAD, opacity: dOp }} />
        <div style={{ fontFamily: SONO, fontWeight: 400, fontSize: 30, color: INK_MUTE,
          letterSpacing: '0.01em', marginTop: 30, opacity: sOp }}>
          Money without borders, politics, or banks.
        </div>
      </div>
    );
  }

  function Film() {
    // hero windows (accelerating holds)
    const hero = [
      [0.20, 0.95], [0.95, 1.60], [1.60, 2.18], [2.18, 2.68], [2.68, 3.10], [3.10, 3.55],
    ];
    return (
      <Stage width={1920} height={1080} duration={DUR} background="#FAF6F2" persistKey="mine-indep">
        <Backdrop />
        <FlagField />
        <CounterVignette />
        {hero.map((w, i) => (
          <Sprite key={i} start={w[0]} end={w[1]}>
            <HeroFlag cc={HERO_CC[i]} name={HERO_NAMES[i]}
              sub={i === 0 ? 'Spend anywhere' : ''} />
          </Sprite>
        ))}
        <Counter />
        <TopMark />
        <EndLockup />
      </Stage>
    );
  }

  window.MineIndependenceFilm = Film;
})();
