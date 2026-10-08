/* Shared nav + mobile menu + footer for THORWallet deep pages.
   Runs before site.js so site.js can wire interactions. */
(function () {
  var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  function act(href) { return href.toLowerCase() === path ? ' aria-current="page" style="color:var(--text-hi);"' : ""; }

  var navHTML =
  '<nav class="nav is-frosted" aria-label="Primary"><div class="nav-inner">' +
    '<a class="nav-logo" href="index.html" aria-label="THORWallet home"><img src="assets/thorwallet-logo-white.png" alt="THORWallet" /></a>' +
    '<div class="nav-links">' +
      '<a href="index.html"' + act("index.html") + '>Home</a>' +
      '<a href="cards.html"' + act("cards.html") + '>Card</a>' +
      '<div class="nav-trade"><button aria-haspopup="true" aria-expanded="false">Features' +
        '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>' +
        '<div class="nav-dropdown mega" role="menu">' +
          '<div class="mega-col"><h5>Trade</h5>' +
            '<a href="swap.html" role="menuitem"><b>Swap</b><span>Native cross-chain, no bridges or wrapped tokens</span></a>' +
            '<a href="index.html#limit" role="menuitem"><b>Limit Orders</b><span>Set a target price, executes automatically</span></a>' +
            '<a href="index.html#stocks" role="menuitem"><b>Stocks</b><span>Tokenized US equities &amp; ETFs, 24/7</span></a>' +
          '</div>' +
          '<div class="mega-col"><h5>Grow &amp; secure</h5>' +
            '<a href="index.html#earn" role="menuitem"><b>Earn</b><span>Yield on stablecoins, pools &amp; $TITN staking</span></a>' +
            '<a href="index.html#multisig" role="menuitem"><b>Multisig</b><span>Multi-device vaults for any chain &amp; token</span></a>' +
            '<a href="cards.html" role="menuitem"><b>Card &amp; Swiss account</b><span>Spend crypto with a global Mastercard</span></a>' +
          '</div>' +
          '<div class="mega-col"><h5>Who it\'s for</h5>' +
            '<a href="index.html#swaps" role="menuitem"><b>For traders</b><span>Best-rate routing across 20k+ tokens</span></a>' +
            '<a href="index.html#multisig" role="menuitem"><b>For Whales &amp; Degens</b><span>Multisig vaults, 20k+ tokens, your keys</span></a>' +
            '<a href="cards.html" role="menuitem"><b>For everyday spend</b><span>Swiss account, 175+ countries</span></a>' +
            '<a href="compare.html" role="menuitem"><b>Compare wallets</b><span>vs MetaMask, Trust Wallet &amp; more</span></a>' +
          '</div>' +
        '</div></div>' +
      '<a href="titn.html"' + act("titn.html") + '>$TITN</a>' +
      '<a href="blog.html"' + act("blog.html") + '>Blog</a>' +
      '<a href="https://faqs.thorwallet.org/" target="_blank" rel="noopener">FAQs</a>' +
    '</div>' +
    '<div class="nav-cta">' +
      '<div class="lang-picker" data-lang-picker></div>' +
      '<a class="btn btn-ghost btn-sm btn-web" href="https://app.thorwallet.org">Web App</a>' +
      '<a class="btn btn-primary btn-sm" href="download.html">Download</a>' +
    '</div>' +
    '<button class="nav-burger" aria-label="Menu" aria-expanded="false"><span></span></button>' +
  '</div></nav>' +
  '<div class="mobile-menu" aria-hidden="true">' +
    '<a href="index.html">Home</a><a href="cards.html">Card</a>' +
    '<a href="swap.html">Swap</a><a href="index.html#limit">Limit Orders</a><a href="index.html#stocks">Stocks</a>' +
    '<a href="index.html#earn">Earn</a><a href="titn.html">$TITN</a><a href="blog.html">Blog</a>' +
    '<a href="compare.html">Compare</a>' +
    '<a href="https://faqs.thorwallet.org/" target="_blank" rel="noopener">FAQs</a>' +
    '<a class="btn btn-ghost" href="https://app.thorwallet.org">Web App</a>' +
    '<a class="btn btn-primary" href="download.html">Download</a>' +
    '<div class="lang-picker mobile-lang" data-lang-picker></div>' +
  '</div>';

  var footHTML =
  '<footer class="footer"><div class="container"><div class="footer-top">' +
    '<div class="footer-brand"><img src="assets/thorwallet-logo-white.png" alt="THORWallet" />' +
      '<p>The self-custody, multi-chain DeFi superapp. All chains. All yield. One app.</p>' +
      '<div class="footer-socials">' +
        '<a href="https://t.me/THORWalletOfficial" aria-label="Telegram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.3-.1-.5-.6-.2L6.1 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.8-7.2c.9-.3 1.6.2 1.6 1.4z"/></svg></a>' +
        '<a href="https://x.com/thorwallet" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.6 7.5L22 22h-6.8l-4.8-6.3L4.8 22H2l7.1-8.1L2 2h6.9l4.3 5.7L18.2 2zm-2.4 18h1.9L8.3 4h-2l9.5 16z"/></svg></a>' +
        '<a href="https://thorwallet.medium.com" aria-label="Medium"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="6.5" cy="12" rx="5.5" ry="5"/><ellipse cx="16.5" cy="12" rx="2.6" ry="4.6"/><ellipse cx="21.5" cy="12" rx="1.2" ry="4.2"/></svg></a>' +
      '</div></div>' +
    '<div class="footer-col"><h4>THORWallet</h4><ul>' +
      '<li><a href="index.html">Home</a></li><li><a href="cards.html">Card</a></li><li><a href="swap.html">Trade</a></li>' +
      '<li><a href="index.html#earn">Earn</a></li><li><a href="titn.html">$TITN</a></li><li><a href="blog.html">Blog</a></li>' +
      '<li><a href="compare.html">Compare</a></li><li><a href="download.html">Download</a></li><li><a href="https://app.thorwallet.org">Web App</a></li></ul></div>' +
    '<div class="footer-col"><h4>Support</h4><ul><li><a href="https://faqs.thorwallet.org/" target="_blank" rel="noopener">FAQs</a></li><li><a href="brand.html">Brand kit</a></li><li><a href="careers.html">Careers</a></li><li><a href="mailto:info@thorwallet.org">Contact</a></li></ul></div>' +
    '<div class="footer-col"><h4>Documentation</h4><ul><li><a href="terms.html">Terms of Service</a></li><li><a href="privacy-policy.html">Privacy Policy</a></li></ul></div>' +
  '</div>' +
  '<div class="footer-fine"><span>© 2026 THORWallet · EMM Ventures AG · Zug, Switzerland</span>' +
    '<span>Self-custody, non-custodial. $TITN is a utility token, not an investment, and its value may fall to zero.</span></div>' +
  '</div></footer>';

  document.body.insertAdjacentHTML("afterbegin", navHTML);
  document.body.insertAdjacentHTML("beforeend", footHTML);
})();
