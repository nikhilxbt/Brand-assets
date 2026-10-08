/* THORWallet Card - 16:9 social/paid ad (1920x1080, ~9.5s).
   Scene 1: country availability search (centered) -> "Vanuatu" AVAILABLE.
   Scene 2: card fan opens on the left, headline + CTA on the right.
   Reads globals from animations.jsx. */
(function () {
  const { Stage, useTime, Easing, clamp } = window;
  const MONT = 'Montserrat, -apple-system, "Helvetica Neue", sans-serif';
  const EMOJI = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  const INK = '#FFFFFF', INK2 = '#AEC2D2', INK3 = '#7E97AC';
  const GRAD = 'linear-gradient(120deg,#00CCFF 0%,#33FF99 100%)';
  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);
  const COUNTRY = 'Vanuatu', FLAG = '\uD83C\uDDFB\uD83C\uDDFA'; // VU

  function Grad({ children, style }) {
    return <span style={{ background: GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text',
      WebkitTextFillColor: 'transparent', color: 'transparent', ...style }}>{children}</span>;
  }

  function Backdrop() {
    const t = useTime();
    const d = Math.sin(t * 0.25) * 16;
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background:
        'radial-gradient(1100px 1100px at 86% 8%, rgba(0,204,255,0.12), transparent 60%),' +
        'radial-gradient(1100px 1100px at 8% 96%, rgba(51,255,153,0.10), transparent 60%),' +
        'linear-gradient(135deg,#0B1320 0%,#0A111C 55%,#070D16 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize: '96px 96px', transform: `translateY(${d}px)` }} />
      </div>
    );
  }

  const mag = '<svg viewBox="0 0 24 24" fill="none" stroke="#7E97AC" stroke-width="2.4" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';

  // ---------- SCENE 1: search module (centered) ----------
  function SearchModule() {
    const t = useTime();
    const inP = Easing.easeOutCubic(seg(t, 0.2, 0.9));
    const exit = seg(t, 4.0, 4.9);
    const op = inP * (1 - exit);
    const sc = (0.9 + 0.1 * inP) * (1 - 0.08 * Easing.easeInCubic(exit));
    const blur = 14 * Easing.easeInCubic(exit);
    if (op <= 0) return null;
    const chars = Math.round(Easing.linear(seg(t, 0.9, 2.2)) * COUNTRY.length);
    const typed = COUNTRY.slice(0, chars);
    const caret = (Math.sin(t * 7) > 0 && t < 2.3) || (t >= 2.2 && Math.sin(t * 7) > 0);
    const rp = seg(t, 2.45, 2.95);
    const rowTy = (1 - Easing.easeOutBack(rp)) * 26;
    const ap = seg(t, 2.75, 3.2);
    const apSc = 0.4 + 0.6 * Easing.easeOutBack(ap);
    const glow = (Math.sin((t - 3.0) * 4) * 0.5 + 0.5);
    const apGlow = t > 3.0 ? (18 + 16 * glow) : 26 * ap;
    return (
      <div style={{ position: 'absolute', left: 460, right: 460, top: 300, opacity: op,
        transform: `scale(${sc})`, transformOrigin: '50% 40%', filter: blur ? `blur(${blur}px)` : 'none',
        background: 'rgba(20,33,52,0.96)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 30,
        padding: '44px 40px 46px', boxShadow: '0 40px 90px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        fontFamily: MONT }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 40, height: 3, borderRadius: 3, background: GRAD }} />
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: '0.2em', color: '#5FE3C2' }}>CARD AVAILABILITY</span>
        </div>
        <div style={{ fontWeight: 800, fontSize: 58, lineHeight: 1.06, letterSpacing: '-0.02em', color: INK, marginTop: 20 }}>
          Accepted in <Grad>172 countries</Grad>
        </div>
        <div style={{ marginTop: 34, height: 96, borderRadius: 18, background: '#0F1C2C',
          border: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px' }}>
          <span style={{ width: 30, height: 30, flex: 'none' }} dangerouslySetInnerHTML={{ __html: mag }} />
          <span style={{ fontSize: 34, fontWeight: 600, color: typed ? '#EAF4FB' : '#7E97AC' }}>{typed || 'Search your country'}</span>
          {caret && <span style={{ width: 3, height: 38, background: '#33FF99', marginLeft: -6 }} />}
        </div>
        {rp > 0 && (
          <div style={{ marginTop: 22, height: 92, borderRadius: 16, background: 'rgba(51,255,153,0.06)',
            border: '1px solid rgba(51,255,153,0.35)', display: 'flex', alignItems: 'center', gap: 18, padding: '0 24px',
            opacity: rp, transform: `translateY(${rowTy}px)` }}>
            <span style={{ fontFamily: EMOJI, fontSize: 44, lineHeight: 1 }}>{FLAG}</span>
            <span style={{ flex: 1, fontSize: 36, fontWeight: 700, color: '#fff' }}>{COUNTRY}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 20px', borderRadius: 999,
              background: 'rgba(51,255,153,0.16)', border: '1px solid rgba(51,255,153,0.65)',
              transform: `scale(${apSc})`, boxShadow: `0 0 ${apGlow}px rgba(51,255,153,0.5)`, opacity: ap }}>
              <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#33FF99', boxShadow: '0 0 12px #33FF99' }} />
              <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: '0.08em', color: '#8DFFC6' }}>AVAILABLE</span>
            </span>
          </div>
        )}
      </div>
    );
  }

  // ---------- SCENE 2: card fan on the left, copy on the right ----------
  function CardReveal() {
    const t = useTime();
    if (t < 4.4) return null;
    const inP = Easing.easeOutCubic(seg(t, 4.6, 5.5));
    const openP = Easing.easeOutCubic(seg(t, 5.2, 6.3));
    const ty = (1 - inP) * 200;
    const floatY = Math.sin((t - 5.4) * 0.9) * 11;
    const floatR = Math.sin((t - 5.4) * 0.7) * 1.6;
    const lerp = (a, b, p) => a + (b - a) * p;
    const CW = 540, CH = Math.round(CW * 625 / 1000);
    const fX = lerp(10, 132, openP), fY = lerp(8, 50, openP), fR = lerp(-2, 7, openP) + floatR, fS = lerp(0.95, 1, openP);
    const bX = lerp(-10, -132, openP), bY = lerp(-6, -64, openP), bR = lerp(-2, -12, openP) + floatR * 0.6, bS = lerp(0.93, 0.985, openP);
    const cardSh = '0 50px 100px -18px rgba(0,0,0,0.75)';
    const headP = Easing.easeOutCubic(seg(t, 5.7, 6.4));
    const ctaP = Easing.easeOutCubic(seg(t, 6.9, 7.5));
    return (
      <div style={{ position: 'absolute', inset: 0, perspective: 1600 }}>
        {/* fan (left) */}
        <div style={{ position: 'absolute', left: 660, top: 552, width: 0, height: 0,
          opacity: inP, transform: `translateY(${ty + floatY}px)`, transformStyle: 'preserve-3d' }}>
          <div style={{ position: 'absolute', left: -380, top: -280, width: 760, height: 560, borderRadius: 40, filter: 'blur(48px)', opacity: 0.75,
            background: 'radial-gradient(circle at 42% 46%, rgba(0,204,255,0.5), rgba(51,255,153,0.26) 46%, transparent 72%)' }} />
          <img src="card-orange.png" alt="" style={{ position: 'absolute', width: CW, height: CH, left: 0, top: 0, marginLeft: CW / -2, marginTop: CH / -2,
            transform: `translate(${bX}px, ${bY}px) rotateZ(${bR}deg) scale(${bS})`, transformOrigin: '50% 50%',
            borderRadius: 24, display: 'block', boxShadow: cardSh, zIndex: 1 }} />
          <img src="card-dark.png" alt="THORWallet Card" style={{ position: 'absolute', width: CW, height: CH, left: 0, top: 0, marginLeft: CW / -2, marginTop: CH / -2,
            transform: `translate(${fX}px, ${fY}px) rotateZ(${fR}deg) scale(${fS})`, transformOrigin: '50% 50%',
            borderRadius: 24, display: 'block', boxShadow: cardSh, zIndex: 2 }} />
        </div>
        {/* headline (right) */}
        <div style={{ position: 'absolute', left: 1080, right: 120, top: 360, textAlign: 'left',
          opacity: headP, transform: `translateY(${(1 - headP) * 22}px)`,
          fontFamily: MONT, fontWeight: 800, fontSize: 64, lineHeight: 1.12, letterSpacing: '-0.02em', color: INK }}>
          The crypto stablecoin card accepted in the <Grad>most countries.</Grad>
        </div>
        {/* CTA (right) */}
        <div style={{ position: 'absolute', left: 1080, top: 720,
          opacity: ctaP, transform: `translateY(${(1 - ctaP) * 16}px)` }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '20px 36px', borderRadius: 999,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(51,255,153,0.4)', fontFamily: MONT }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: GRAD }} />
            <span style={{ fontSize: 38, fontWeight: 700, color: '#EAF4FB', letterSpacing: '0.01em' }}>thorwallet.org/cards</span>
          </div>
        </div>
      </div>
    );
  }

  function TopLogo() {
    const t = useTime();
    return (
      <img src="thorwallet-logo-white.png" alt="THORWallet"
        style={{ position: 'absolute', top: 70, left: '50%', height: 60, transform: 'translateX(-50%)',
          opacity: 0.95 * seg(t, 0.2, 0.9) }} />
    );
  }

  function Film() {
    return (
      <Stage width={1920} height={1080} duration={9.5} background="#080E17" persistKey="tw-card-ad-16x9">
        <Backdrop />
        <TopLogo />
        <SearchModule />
        <CardReveal />
      </Stage>
    );
  }
  window.ThorCardAd = Film;
})();
