/* MINE Card - 16:9 social/paid ad (1920x1080, ~9.5s).
   MINE light/cream design language. Scene 1: availability search (centered) ->
   "Maldives" AVAILABLE. Scene 2: the mine card photo (rounded tile, left) +
   "Independence, by design." copy on the right.
   Reads globals from animations.jsx. */
(function () {
  const { Stage, useTime, Easing, clamp } = window;
  const SONO = '"OT Sono", -apple-system, "Helvetica Neue", sans-serif';
  const MONO = '"SFMono-Regular", ui-monospace, "JetBrains Mono", Menlo, monospace';
  const EMOJI = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  const INK = '#0E1F2A', INK_SOFT = '#5F7286', INK_MUTE = '#8294A1';
  const GREEN = '#1F8A5B';
  const GRAD = 'linear-gradient(95deg,#89BAA4 6%,#F0C28A 50%,#E8906C 94%)';
  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);
  const COUNTRY = 'Kiribati', FLAG = '\uD83C\uDDF0\uD83C\uDDEE'; // KI

  function Grad({ children, style }) {
    return <span style={{ background: GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text',
      WebkitTextFillColor: 'transparent', color: 'transparent', ...style }}>{children}</span>;
  }

  function Backdrop() {
    const t = useTime();
    const drift = Math.sin(t * 0.18) * 14;
    return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden',
        background: 'linear-gradient(135deg,#FAF6F2 0%,#F2ECE6 48%,#EAF0EC 100%)' }}>
        <div style={{ position: 'absolute', top: -260 + drift, right: -160,
          width: 1300, height: 1300, borderRadius: '50%', filter: 'blur(20px)',
          background: 'radial-gradient(circle,rgba(240,194,138,0.30),transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: -360 - drift, left: -220,
          width: 1300, height: 1300, borderRadius: '50%', filter: 'blur(20px)',
          background: 'radial-gradient(circle,rgba(137,186,164,0.28),transparent 62%)' }} />
      </div>
    );
  }

  const mag = '<svg viewBox="0 0 24 24" fill="none" stroke="#8294A1" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';

  // ---------- SCENE 1: availability search (centered, light) ----------
  function SearchModule() {
    const t = useTime();
    const inP = Easing.easeOutCubic(seg(t, 0.2, 0.9));
    const exit = seg(t, 4.0, 4.9);
    const op = inP * (1 - exit);
    const sc = (0.92 + 0.08 * inP) * (1 - 0.06 * Easing.easeInCubic(exit));
    const blur = 12 * Easing.easeInCubic(exit);
    if (op <= 0) return null;
    const chars = Math.round(Easing.linear(seg(t, 0.9, 2.2)) * COUNTRY.length);
    const typed = COUNTRY.slice(0, chars);
    const caret = (Math.sin(t * 7) > 0 && t < 2.3) || (t >= 2.2 && Math.sin(t * 7) > 0);
    const rp = seg(t, 2.45, 2.95);
    const rowTy = (1 - Easing.easeOutBack(rp)) * 26;
    const ap = seg(t, 2.75, 3.2);
    const apSc = 0.4 + 0.6 * Easing.easeOutBack(ap);
    const glow = (Math.sin((t - 3.0) * 4) * 0.5 + 0.5);
    const apGlow = t > 3.0 ? (12 + 12 * glow) : 20 * ap;
    return (
      <div style={{ position: 'absolute', left: 470, right: 470, top: 300, opacity: op,
        transform: `scale(${sc})`, transformOrigin: '50% 40%', filter: blur ? `blur(${blur}px)` : 'none',
        background: '#FFFFFF', border: '1px solid rgba(14,31,42,0.08)', borderRadius: 28,
        padding: '46px 44px 50px', boxShadow: '0 40px 80px -24px rgba(14,31,42,0.22)',
        fontFamily: SONO }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 38, height: 3, borderRadius: 3, background: GRAD }} />
          <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: 19, letterSpacing: '0.22em', color: INK_MUTE }}>CARD AVAILABILITY</span>
        </div>
        <div style={{ fontWeight: 500, fontSize: 60, lineHeight: 1.05, letterSpacing: '-0.02em', color: INK, marginTop: 22 }}>
          Accepted in <Grad>172 countries</Grad>
        </div>
        <div style={{ marginTop: 36, height: 92, borderRadius: 16, background: '#F4EFE9',
          border: '1px solid rgba(14,31,42,0.08)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px' }}>
          <span style={{ width: 28, height: 28, flex: 'none' }} dangerouslySetInnerHTML={{ __html: mag }} />
          <span style={{ fontSize: 33, fontWeight: 500, color: typed ? INK : INK_MUTE }}>{typed || 'Search your country'}</span>
          {caret && <span style={{ width: 3, height: 36, background: GREEN, marginLeft: -6 }} />}
        </div>
        {rp > 0 && (
          <div style={{ marginTop: 20, height: 88, borderRadius: 14, background: 'rgba(31,138,91,0.06)',
            border: '1px solid rgba(31,138,91,0.32)', display: 'flex', alignItems: 'center', gap: 18, padding: '0 24px',
            opacity: rp, transform: `translateY(${rowTy}px)` }}>
            <span style={{ fontFamily: EMOJI, fontSize: 42, lineHeight: 1 }}>{FLAG}</span>
            <span style={{ flex: 1, fontSize: 35, fontWeight: 500, color: INK }}>{COUNTRY}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 20px', borderRadius: 999,
              background: 'rgba(31,138,91,0.12)', border: '1px solid rgba(31,138,91,0.55)',
              transform: `scale(${apSc})`, boxShadow: `0 0 ${apGlow}px rgba(31,138,91,0.35)`, opacity: ap }}>
              <span style={{ width: 13, height: 13, borderRadius: '50%', background: GREEN, boxShadow: '0 0 10px rgba(31,138,91,0.6)' }} />
              <span style={{ fontFamily: MONO, fontSize: 22, fontWeight: 600, letterSpacing: '0.08em', color: GREEN }}>AVAILABLE</span>
            </span>
          </div>
        )}
      </div>
    );
  }

  // ---------- SCENE 2: the mine card (photo tile, left) + copy (right) ----------
  function CardReveal() {
    const t = useTime();
    if (t < 4.4) return null;
    const inP = Easing.easeOutCubic(seg(t, 4.6, 5.6));
    const ty = (1 - inP) * 80;
    const sc = 0.92 + 0.08 * inP;
    const floatY = Math.sin((t - 5.6) * 0.85) * 9;
    const floatR = Math.sin((t - 5.6) * 0.62) * 0.7;
    const CW = 740, CH = Math.round(CW * 627 / 873);
    const headP = Easing.easeOutCubic(seg(t, 5.8, 6.5));
    const eyeP = Easing.easeOutCubic(seg(t, 5.55, 6.1));
    const ctaP = Easing.easeOutCubic(seg(t, 7.0, 7.6));
    return (
      <div style={{ position: 'absolute', inset: 0 }}>
        {/* warm glow behind card */}
        <div style={{ position: 'absolute', left: 552 - (CW + 120) / 2, top: 540 - (CH + 120) / 2,
          width: CW + 120, height: CH + 120, borderRadius: 80, filter: 'blur(64px)', opacity: 0.55 * inP,
          background: 'radial-gradient(circle at 58% 52%, rgba(232,144,108,0.5), rgba(137,186,164,0.28) 50%, transparent 72%)' }} />
        {/* floating card (transparent cutout) */}
        <img src="mine-card-cut.png" alt="mine wallet card"
          style={{ position: 'absolute', width: CW, height: CH, left: 552 - CW / 2, top: 540 - CH / 2 + ty + floatY,
            transform: `scale(${sc}) rotate(${floatR}deg)`, transformOrigin: '50% 50%', opacity: inP,
            filter: 'drop-shadow(0 48px 64px rgba(14,31,42,0.30)) drop-shadow(0 10px 18px rgba(14,31,42,0.16))', display: 'block' }} />
        {/* copy (right) */}
        <div style={{ position: 'absolute', left: 1112, right: 120, top: 392, fontFamily: SONO }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: eyeP,
            transform: `translateY(${(1 - eyeP) * 14}px)` }}>
            <span style={{ width: 32, height: 3, borderRadius: 3, background: GRAD }} />
            <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: 19, letterSpacing: '0.22em', color: INK_MUTE }}>THE MINE CARD · 172 COUNTRIES</span>
          </div>
          <div style={{ marginTop: 26, fontWeight: 500, fontSize: 80, lineHeight: 1.08, letterSpacing: '-0.025em', color: INK,
            opacity: headP, transform: `translateY(${(1 - headP) * 22}px)` }}>
            Independence<br />is <Grad>mine.</Grad>
          </div>
          <div style={{ marginTop: 48, display: 'inline-flex', alignItems: 'center', gap: 13,
            opacity: ctaP, transform: `translateY(${(1 - ctaP) * 16}px)`,
            padding: '18px 32px', borderRadius: 999, background: '#FFFFFF', border: '1px solid rgba(14,31,42,0.12)',
            boxShadow: '0 14px 30px -12px rgba(14,31,42,0.2)' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: GRAD }} />
            <span style={{ fontFamily: MONO, fontSize: 30, fontWeight: 500, color: INK, letterSpacing: '0.01em' }}>mine.financial</span>
          </div>
        </div>
      </div>
    );
  }

  function TopLogo() {
    const t = useTime();
    // sits on cream in both scenes (top-left), so always legible
    return (
      <img src="mine-wordmark-ink.svg" alt="mine"
        style={{ position: 'absolute', top: 78, left: 120, height: 46,
          opacity: 0.92 * seg(t, 0.2, 0.9) }} />
    );
  }

  function Film() {
    return (
      <Stage width={1920} height={1080} duration={9.5} background="#FAF6F2" persistKey="mine-card-16x9">
        <Backdrop />
        <TopLogo />
        <SearchModule />
        <CardReveal />
      </Stage>
    );
  }
  window.MineCardAd = Film;
})();
