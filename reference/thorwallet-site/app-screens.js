/* THORWALLET - live app screens: markup, scaling, tickers.
   Faithful recreations of real app screens (Create vault,
   Limit Orders, tokenized-stocks sheet, Earn) with looping
   motion. Fills .app-screen[data-app], scales 375x812. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var STATUS =
    '<div class="as-status"><span class="t">12:11' +
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 18h12l-1.8-2.4V10a4.8 4.8 0 0 0-3.4-4.6V4.6a1.3 1.3 0 1 0-2.6 0v.8c-.5.15-.97.4-1.4.7L3 2.3 1.9 3.4l18 18 1.1-1.1-3.2-3.2zM7.2 8.6 14 15.4V18H7.2z" opacity="0.9"/></svg></span>' +
    '<svg viewBox="0 0 54 12" fill="currentColor" aria-hidden="true">' +
    '<rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1" opacity="0.4"/><rect x="15" y="1" width="3" height="11" rx="1" opacity="0.4"/>' +
    '<path d="M28 4.5a7 7 0 0 1 9 0l-1.6 1.9a4.5 4.5 0 0 0-5.8 0L28 4.5zm2.9 3.4a3 3 0 0 1 3.2 0L32.5 10l-1.6-2.1z"/>' +
    '<rect x="42" y="2" width="10" height="8" rx="2.5" fill="none" stroke="currentColor"/><rect x="43.5" y="3.5" width="5.5" height="5" rx="1"/><rect x="52.6" y="4.5" width="1.4" height="3" rx="0.7"/>' +
    '</svg></div>';

  var BACK = '<svg viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2 2 10l8 8"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  var PHONE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="6.5" y="2" width="11" height="20" rx="2.5"/><path d="M10.5 18.5h3"/></svg>';
  var SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>';
  var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  var SWAP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4v13M7 4 4 7m3-3 3 3"/><path d="M17 20V7m0 13 3-3m-3 3-3-3"/></svg>';
  var SHIELD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 4 5.5v5.2c0 4.9 3.4 9.5 8 10.8 4.6-1.3 8-5.9 8-10.8V5.5L12 2z"/><path d="m9 11.5 2.2 2.2L15.5 9.5"/></svg>';
  var PLUSC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" style="width:14px;height:14px;opacity:0.85;"><circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" opacity="0.35"/><path d="M12 8.5v7M8.5 12h7" stroke="#121F32" stroke-width="2.4"/></svg>';
  var APPLE = '<svg viewBox="0 0 24 24" fill="#fff" style="width:17px;height:17px;" aria-hidden="true"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/></svg>';

  /* ---- real token / brand marks (vector replicas) ---- */
  var USDC_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true" style="width:100%;height:100%;display:block;">' +
    '<circle cx="12" cy="12" r="12" fill="#2775CA"/>' +
    '<path fill="#fff" d="M15.4 13.9c0-1.7-1-2.3-3-2.6-1.5-.2-1.8-.6-1.8-1.3 0-.7.5-1.1 1.5-1.1.9 0 1.4.3 1.6 1.1 0 .1.2.2.3.2h.8c.2 0 .3-.1.3-.3v-.1c-.2-1.1-1.1-2-2.2-2.1v-1.2c0-.2-.1-.3-.3-.3h-.8c-.2 0-.3.1-.3.3v1.2c-1.5.2-2.4 1.2-2.4 2.4 0 1.6 1 2.2 3 2.5 1.4.2 1.8.5 1.8 1.3s-.7 1.3-1.6 1.3c-1.3 0-1.7-.5-1.9-1.3 0-.1-.2-.2-.3-.2h-.9c-.2 0-.3.1-.3.3v.1c.2 1.2 1 2.1 2.6 2.3v1.2c0 .2.1.3.3.3h.8c.2 0 .3-.1.3-.3v-1.2c1.5-.2 2.5-1.3 2.5-2.5z"/>' +
    '<path fill="#fff" d="M9.5 19.3c-3.1-1.1-5-4.1-5-7.3 0-3.2 1.9-6.2 5-7.3.2-.1.3-.2.3-.4v-.7c0-.2-.1-.3-.3-.3h-.1C5.6 4.5 3 8 3 12c0 4 2.6 7.5 6.4 8.7h.1c.2 0 .3-.1.3-.3v-.7c0-.2-.1-.3-.3-.4zM14.6 3.3h-.1c-.2 0-.3.1-.3.3v.7c0 .2.1.3.3.4 3.1 1.1 5 4.1 5 7.3 0 3.2-1.9 6.2-5 7.3-.2.1-.3.2-.3.4v.7c0 .2.1.3.3.3h.1C18.4 19.5 21 16 21 12c0-4-2.6-7.5-6.4-8.7z"/></svg>';
  var USDT_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true" style="width:100%;height:100%;display:block;">' +
    '<rect x="4.2" y="4.2" width="15.6" height="15.6" rx="3.6" transform="rotate(45 12 12)" fill="#26A17B"/>' +
    '<path fill="#fff" d="M13.1 10.5V8.9h3.1V6.8H7.8v2.1h3.1v1.6c-2.5.1-4.4.7-4.4 1.4 0 .7 1.9 1.3 4.4 1.4v4.4h2.2v-4.4c2.5-.1 4.4-.7 4.4-1.4 0-.7-1.9-1.3-4.4-1.4zm-1.1 2.1c-2.3 0-3.8-.4-4.2-.7.4-.3 1.9-.7 4.2-.7s3.8.4 4.2.7c-.4.3-1.9.7-4.2.7z"/></svg>';
  var TESLA_SVG =
    '<svg viewBox="0 0 24 24" fill="#E82127" aria-hidden="true" style="width:17px;height:17px;">' +
    '<path d="M12 5.2c-3.5 0-6.7.7-9.2 1.8 1 1.5 2.6 2.5 4.4 2.7.1-.5.5-.8 1.1-.9 1.2-.2 2.4-.3 3.7-.3s2.5.1 3.7.3c.6.1 1 .4 1.1.9 1.8-.2 3.4-1.2 4.4-2.7-2.5-1.1-5.7-1.8-9.2-1.8z"/>' +
    '<path d="M12 9.4c-.5 0-1 0-1.5.1L12 21.2l1.5-11.7c-.5-.1-1-.1-1.5-.1z"/></svg>';
  var NVDA_SVG =
    '<svg viewBox="0 0 24 24" fill="#fff" fill-rule="evenodd" aria-hidden="true" style="width:17px;height:17px;">' +
    '<path d="M9.6 9.6v-1.4c.14-.01.28-.02.42-.02 3.9-.12 6.46 3.36 6.46 3.36s-2.76 3.83-5.72 3.83c-.4 0-.78-.06-1.15-.18v-4.3c1.52.18 1.82.85 2.73 2.37l2.03-1.71s-1.48-1.94-3.98-1.94c-.27 0-.53.02-.79.03zm0-4.69v2.12l.42-.03c5.42-.18 8.96 4.45 8.96 4.45s-4.06 4.93-8.29 4.93c-.37 0-.74-.03-1.09-.09v1.31c.3.04.61.06.91.06 3.94 0 6.79-2.01 9.55-4.39.46.37 2.33 1.26 2.72 1.65-2.62 2.2-8.74 3.97-12.21 3.97-.33 0-.65-.02-.97-.05v1.84H24V4.91H9.6zm0 10.2v1.11c-3.65-.65-4.66-4.44-4.66-4.44s1.75-1.94 4.66-2.25v1.22h-.01c-1.52-.18-2.71 1.24-2.71 1.24s.67 2.4 2.72 3.12zM3.11 11.62s2.16-3.19 6.49-3.52V6.91C4.8 7.3 .65 11.36.65 11.36s2.35 6.79 8.95 7.41v-1.23c-4.84-.61-6.49-5.92-6.49-5.92z"/></svg>';
  var ISHARES_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true" style="width:100%;height:100%;display:block;">' +
    '<circle cx="12" cy="12" r="12" fill="#4F3D8B"/>' +
    '<text x="12" y="14" text-anchor="middle" font-size="5.4" font-weight="700" fill="#fff" font-family="inherit">iShares</text></svg>';
  /* Base network badge - blue disc with the left slot */
  var BASE_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true" style="width:100%;height:100%;display:block;">' +
    '<circle cx="12" cy="12" r="12" fill="#0052FF"/>' +
    '<path fill="#fff" d="M12 19.5a7.5 7.5 0 1 0-7.46-8.25h9.66v1.5H4.54A7.5 7.5 0 0 0 12 19.5z"/></svg>';

  function usdcIco(size) {
    return '<span class="as-ico" style="width:' + size + 'px;height:' + size + 'px;border:0;background:transparent;">' + USDC_SVG +
      '<span class="bdg">' + BASE_SVG + '</span></span>';
  }
  function stockIco(bg, ch, fg, fz) {
    return '<span class="as-ico st-ico" style="background:' + bg + ';border:0;color:' + (fg || '#fff') + ';' + (fz ? 'font-size:' + fz + 'px;' : '') + '">' + ch +
      '<span class="bdg"><img src="assets/chains/eth.png" alt="" /></span></span>';
  }

  var T = {};

  /* ===== MULTISIG - the real "Create" vault screen ===== */
  T.multisig =
    STATUS +
    '<div class="as-back">' + BACK + ' Create</div>' +
    '<div class="as-body">' +
      '<div>' +
        '<div class="ms-banner">' + SHIELD + ' Multisig for max security</div>' +
        '<div class="ms-wrap">' +
          '<div class="ms-tiles">' +
            '<div class="ms-tile ms-t1"><span class="ms-glow1"></span>' + PHONE + '<span class="lbl">Device 1</span><span class="ms-paired ms-p1">' + CHECK + '</span></div>' +
            '<div class="ms-tile ms-t2"><span class="ms-glow2"></span>' + PHONE + '<span class="lbl">Device 2</span><span class="ms-paired ms-p2">' + CHECK + '</span></div>' +
            '<div class="ms-tile add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" style="width:30px;height:30px;"><path d="M12 5v14M5 12h14"/></svg><span class="lbl">+ Device</span></div>' +
          '</div>' +
          '<div class="ms-min">Minimum 2 devices needed</div>' +
          '<div class="ms-checks">' +
            '<div class="ms-check-row ms-cr1">' + CHECK + ' Use multiple devices to sign transactions</div>' +
            '<div class="ms-check-row ms-cr2">' + CHECK + ' Each device has an individual backup</div>' +
            '<div class="ms-check-row ms-cr3">' + CHECK + ' Custom multisig setup (2 of 3, 3 of 4, etc.)</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="flex:1"></div>' +
    '</div>' +
    '<div class="as-btn ms-start">Start</div>' +
    '<div class="as-btn ghost">Pair</div>' +
    '<div class="as-home"></div>';

  /* ===== LIMIT - the real "Limit Orders" screen ===== */
  T.limit =
    STATUS +
    '<div class="as-back">' + BACK + ' Limit Orders</div>' +
    '<div class="as-body">' +
      '<div class="as-card lm-input">' +
        '<div class="top"><span class="lm-amt">1</span>' +
        '<span class="as-tokpill"><span class="as-ico"><img src="assets/chains/eth.png" alt="" /></span>ETH ' + CHEV + '</span></div>' +
        '<div class="lm-meta"><span>$4,286.21</span><span class="bal">1.20 ETH ' + PLUSC + '</span></div>' +
      '</div>' +
      '<div class="lm-fab"><span>' + SWAP + '</span></div>' +
      '<div class="as-card lm-input">' +
        '<div class="top"><span class="lm-amt">4,286.21</span>' +
        '<span class="as-tokpill">' + usdcIco(28) + 'USDC ' + CHEV + '</span></div>' +
        '<div class="lm-meta"><span>$4,285.90</span><span class="bal">26.93 USDC ' + PLUSC + '</span></div>' +
      '</div>' +
      '<div class="as-card lm-when">' +
        '<span class="cap">When 1 ETH is worth</span>' +
        '<div class="lm-target-row">' +
          '<span class="lm-target">' +
            '<span class="lm-t0">4,286.21</span><span class="lm-t1">4,500.52</span><span class="lm-t2">4,714.83</span><span class="lm-t3">4,929.14</span>' +
          '</span>' +
          '<span class="lm-usdc">' + usdcIco(26) + ' USDC</span>' +
        '</div>' +
        '<div class="lm-approx">~$4,286.05</div>' +
        '<div class="lm-chips">' +
          '<span class="lm-chip lm-c0">Market</span><span class="lm-chip lm-c1">+5%</span><span class="lm-chip lm-c2">+10%</span><span class="lm-chip lm-c3">+15%</span>' +
        '</div>' +
        '<div class="lm-expiry"><span class="k">Expires In</span><span class="v">3 days ' + CHEV + '</span></div>' +
      '</div>' +
      '<div style="flex:1"></div>' +
      '<div class="lm-balance"><span><span class="k">Balance</span><div class="v">1.20 ETH</div></span><span class="lm-max">Max</span></div>' +
      '<div class="as-toast lm-toast">' + CHECK + ' Limit order placed - executes automatically</div>' +
    '</div>' +
    '<div class="as-btn lm-next">Next</div>' +
    '<div class="as-home"></div>';

  /* ===== STOCKS - the real tokenized-assets sheet ===== */
  T.stocks =
    STATUS +
    '<div class="st-handle"></div>' +
    '<div class="st-search">' + SEARCH + ' Search</div>' +
    '<div class="st-chips"><span class="st-chip on">Stock Assets</span><span class="st-chip">Stable</span></div>' +
    '<div class="as-body" style="padding-top:8px; gap:11px;">' +
      '<div class="as-card st-row"><div class="as-row">' +
        stockIco('#0E0E0E', APPLE) +
        '<span class="as-main"><span class="as-name">AAPLON</span><span class="as-sub" style="display:block;">Apple (Ondo Toke…</span></span>' +
        '<span class="as-right"><span class="st-usd" data-tick="aapl">USD 214.32</span><div class="as-delta up" data-tick-delta="aapl">+1.84%</div></span>' +
      '</div></div>' +
      '<div class="as-card st-row"><div class="as-row">' +
        stockIco('#FFFFFF', TESLA_SVG) +
        '<span class="as-main"><span class="as-name">TSLAON</span><span class="as-sub" style="display:block;">Tesla (Ondo Tokeni…</span></span>' +
        '<span class="as-right"><span class="st-usd" data-tick="tsla">USD 352.10</span><div class="as-delta down" data-tick-delta="tsla">-0.42%</div></span>' +
      '</div></div>' +
      '<div class="as-card st-row"><div class="as-row">' +
        stockIco('#76B900', NVDA_SVG) +
        '<span class="as-main"><span class="as-name">NVDAON</span><span class="as-sub" style="display:block;">Nvidia (Ondo Token…</span></span>' +
        '<span class="as-right"><span class="st-usd" data-tick="nvda">USD 1,204.50</span><div class="as-delta up" data-tick-delta="nvda">+2.31%</div></span>' +
      '</div></div>' +
      '<div class="as-card st-row"><div class="as-row">' +
        stockIco('#16407A', 'P&amp;G', '#fff', 10) +
        '<span class="as-main"><span class="as-name">PGON</span><span class="as-sub" style="display:block;">Procter &amp; Gamble (…</span></span>' +
        '<span class="as-right"><span class="st-usd" data-tick="pg">USD 168.44</span><div class="as-delta up" data-tick-delta="pg">+0.21%</div></span>' +
      '</div></div>' +
      '<div class="as-card st-row"><div class="as-row">' +
        stockIco('transparent', ISHARES_SVG) +
        '<span class="as-main"><span class="as-name">IVVON</span><span class="as-sub" style="display:block;">iShares Core S&amp;P 50…</span></span>' +
        '<span class="as-right"><span class="st-usd" data-tick="ivv">USD 568.22</span><div class="as-delta up" data-tick-delta="ivv">+0.65%</div></span>' +
      '</div></div>' +
      '<div style="flex:1"></div>' +
    '</div>' +
    '<div class="as-home"></div>';

  /* ===== EARN - the real Earn list with positions ===== */
  T.earn =
    STATUS +
    '<div class="er-top"><span class="er-tabs"><span class="er-tab on">Earn</span><span class="er-tab">Pools</span></span><span class="er-search">' + SEARCH + '</span></div>' +
    '<div class="as-body" style="padding-top:4px;">' +
      '<div class="er-sect">My positions</div>' +
      '<div class="as-card er-card er-row1">' +
        '<div class="as-row">' + usdcIco(46) +
          '<span class="as-main"><span class="er-name">USDC</span><span class="er-tag">Lending</span></span>' +
          '<span class="as-right"><span class="er-apy">7.92% APY</span><span class="er-prov"><i style="background:#27AE60;"></i>Blend</span></span>' +
        '</div>' +
        '<div class="er-pos">' +
          '<span><span class="er-k">Deposit</span><div class="er-v">12,500 USDC <em>~$12,500</em></div></span>' +
          '<span class="r"><span class="er-k">Rewards earned</span><div class="er-v"><span class="er-rew">' + USDC_SVG + '</span><span data-earn-usdc>41.27 USDC</span></div></span>' +
        '</div>' +
      '</div>' +
      '<div class="as-card er-card er-titn er-row2">' +
        '<div class="as-row"><span class="as-ico" style="width:46px;height:46px;border:0;background:#000;"><img src="assets/titn-token.webp" alt="" style="width:46%;height:62%;object-fit:contain;border-radius:0;" /><span class="bdg">' + BASE_SVG + '</span></span>' +
          '<span class="as-main"><span class="er-name">TITN</span><span class="er-tag stake">Staking</span></span>' +
          '<span class="as-right"><span class="er-apy">~70% of Fees</span><span class="er-prov"><span class="er-bolt">⚡</span>Thorwallet Fee Rebate</span></span>' +
        '</div>' +
        '<div class="er-pos">' +
          '<span><span class="er-k">Stake</span><div class="er-v">580,024 TITN <em>~$5,921.70</em></div></span>' +
          '<span class="r"><span class="er-k">Rewards earned</span><div class="er-v"><span class="er-rew">' + USDC_SVG + '</span><span data-earn-titn>0.68 USDC</span></div></span>' +
        '</div>' +
      '</div>' +
      '<div class="er-sect">Stablecoins</div>' +
      '<div class="as-card er-card er-row3"><div class="as-row">' + usdcIco(46) +
        '<span class="as-main"><span class="er-name">USDC</span><span class="er-tag">Lending</span></span>' +
        '<span class="as-right"><span class="er-apy">2.07% - 6.55% APY</span><span class="er-prov"><i style="background:#8A7CF8;"></i>Aave</span></span>' +
      '</div></div>' +
      '<div class="as-card er-card"><div class="as-row"><span class="as-ico" style="width:46px;height:46px;border:0;background:transparent;">' + USDT_SVG + '<span class="bdg" style="background:#5A78E8;"></span></span>' +
        '<span class="as-main"><span class="er-name">USDT</span><span class="er-tag">Lending</span></span>' +
        '<span class="as-right"><span class="er-apy">2.72% APY</span><span class="er-prov"><i style="background:#8A7CF8;"></i>Aave</span></span>' +
      '</div></div>' +
      '<div style="flex:1"></div>' +
    '</div>' +
    '<div class="er-fade"></div>' +
    '<div class="er-nav">' +
      '<span class="it"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 2v20M16.5 6.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 1.6 2.6 4.5 3 4.8 1.4 4.8 3.2-2.1 3.3-4.8 3.3-4.8-1.4-4.8-3.1"/></svg>Wallet</span>' +
      '<span class="it on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="m7 14 3-3 2.5 2.5L17 9"/></svg>Earn</span>' +
      '<span class="it tr"><span class="fab">' + SWAP + '</span>Trade</span>' +
      '<span class="it"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m13.5 2-8 11h5l-2 9 8.5-12h-5.2L13.5 2z"/></svg>Rewards</span>' +
      '<span class="it"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19"/></svg>Cards</span>' +
    '</div>' +
    '<div class="as-home"></div>';

  /* ---- inject ---- */
  var hosts = Array.prototype.slice.call(document.querySelectorAll(".app-screen[data-app]"));
  hosts.forEach(function (host) {
    var tpl = T[host.getAttribute("data-app")];
    if (!tpl) return;
    host.innerHTML = "";
    var root = document.createElement("div");
    root.className = "as-root";
    root.innerHTML = tpl;
    host.appendChild(root);
  });

  /* ---- scale 375x812 design to host ---- */
  function fit(host) {
    var root = host.querySelector(".as-root");
    if (!root) return;
    var w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    var s = w / 375;
    root.style.transform = "scale(" + s + ")";
    root.style.height = Math.max(812, h / s) + "px";
  }
  function fitAll() { hosts.forEach(fit); }
  if ("ResizeObserver" in window) {
    var ro = new ResizeObserver(fitAll);
    hosts.forEach(function (h) { ro.observe(h); });
  } else {
    window.addEventListener("resize", fitAll);
  }
  fitAll();
  setTimeout(fitAll, 300);

  /* ---- gentle data tickers (skipped under reduced motion) ---- */
  if (reduce) return;
  function fmt(n, d) { return n.toLocaleString("en-US", { minimumFractionDigits: d == null ? 2 : d, maximumFractionDigits: d == null ? 2 : d }); }
  var quotes = { aapl: [214.32, 1.84], tsla: [352.10, -0.42], nvda: [1204.50, 2.31], ivv: [568.22, 0.65], pg: [168.44, 0.21] };
  setInterval(function () {
    if (document.hidden) return;
    Object.keys(quotes).forEach(function (k) {
      var q = quotes[k];
      var drift = (Math.random() - 0.48) * q[0] * 0.0012;
      q[0] = Math.max(0.01, q[0] + drift);
      q[1] = q[1] + drift / q[0] * 100;
      document.querySelectorAll('[data-tick="' + k + '"]').forEach(function (el) { el.textContent = "USD " + fmt(q[0]); });
      document.querySelectorAll('[data-tick-delta="' + k + '"]').forEach(function (el) {
        el.textContent = (q[1] >= 0 ? "+" : "") + q[1].toFixed(2) + "%";
        el.classList.toggle("up", q[1] >= 0);
        el.classList.toggle("down", q[1] < 0);
      });
    });
  }, 1600);
  var rewUsdc = 41.27, rewTitn = 0.68;
  setInterval(function () {
    if (document.hidden) return;
    rewUsdc += 0.01;
    document.querySelectorAll("[data-earn-usdc]").forEach(function (el) { el.textContent = fmt(rewUsdc) + " USDC"; });
  }, 1800);
  setInterval(function () {
    if (document.hidden) return;
    rewTitn += 0.01;
    document.querySelectorAll("[data-earn-titn]").forEach(function (el) { el.textContent = fmt(rewTitn) + " USDC"; });
  }, 2600);
})();
