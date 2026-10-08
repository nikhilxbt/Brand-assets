/* THORWALLET - privacy-first analytics loader.
   Google Analytics only loads after explicit consent (GDPR / nFADP).
   Choice persists in localStorage. Also wires conversion events
   (store badges, web app, referral, download nav) once active. */
(function () {
  "use strict";
  var GA_ID = "G-78ZQY4HRV0";
  var KEY = "tw-consent";

  function t(s) { return (window.__t ? window.__t(s) : s); }

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  /* ---- conversion events (no-op until GA is active) ---- */
  document.addEventListener("click", function (e) {
    if (typeof window.gtag !== "function" || !e.target.closest) return;

    /* language picker (buttons, not links) */
    var langOpt = e.target.closest(".lang-opt");
    if (langOpt) {
      window.gtag("event", "language_change", {
        site_language: langOpt.getAttribute("data-lang") || langOpt.textContent.trim(),
        page_path: location.pathname
      });
      return;
    }

    var a = e.target.closest("a");
    if (!a) return;
    var h = a.href || "";
    var rel = a.getAttribute("href") || "";

    /* $TITN exchange links */
    var exchange =
      h.indexOf("binance.com") > -1 ? "binance" :
      h.indexOf("coinbase.com") > -1 ? "coinbase" :
      h.indexOf("gate.io") > -1 ? "gate" :
      h.indexOf("mexc.com") > -1 ? "mexc" : null;
    if (exchange) {
      window.gtag("event", "click_buy_titn", { exchange: exchange, link_url: h, page_path: location.pathname });
      return;
    }

    /* social links */
    var network =
      h.indexOf("t.me/") > -1 ? "telegram" :
      h.indexOf("x.com/") > -1 || h.indexOf("twitter.com/") > -1 ? "x" :
      h.indexOf("medium.com") > -1 ? "medium" : null;
    if (network) {
      window.gtag("event", "click_social", { network: network, link_url: h, page_path: location.pathname });
      return;
    }

    var name =
      h.indexOf("apps.apple.com") > -1 ? "click_app_store" :
      h.indexOf("play.google.com") > -1 ? "click_google_play" :
      h.indexOf("referral.thorwallet.org") > -1 ? "click_get_app" :
      h.indexOf("app.thorwallet.org") > -1 ? "click_web_app" :
      /(^|\/)download(\.html)?$/.test(rel.split("#")[0]) ? "nav_download" :
      h.indexOf("thorwalletdex.substack.com") > -1 ? "click_newsletter" :
      h.indexOf("faqs.thorwallet.org") > -1 ? "click_faqs" : null;
    if (name) window.gtag("event", name, { link_url: h, page_path: location.pathname });
  }, true);

  /* ---- consent state ---- */
  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}
  if (choice === "granted") { loadGA(); return; }
  if (choice === "denied") return;

  /* ---- banner ---- */
  function show() {
    if (document.querySelector(".consent")) return;
    var bar = document.createElement("div");
    bar.className = "consent";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookie consent");
    var p = document.createElement("p");
    p.textContent = t("We use one analytics cookie to understand how the site is used - nothing else, and only if you agree.");
    var btns = document.createElement("div");
    btns.className = "consent-btns";
    var ok = document.createElement("button");
    ok.type = "button"; ok.className = "btn btn-accent btn-sm";
    ok.textContent = t("Allow analytics");
    var no = document.createElement("button");
    no.type = "button"; no.className = "btn btn-ghost btn-sm";
    no.textContent = t("Decline");
    ok.addEventListener("click", function () { try { localStorage.setItem(KEY, "granted"); } catch (e) {} loadGA(); bar.remove(); });
    no.addEventListener("click", function () { try { localStorage.setItem(KEY, "denied"); } catch (e) {} bar.remove(); });
    btns.appendChild(ok); btns.appendChild(no);
    bar.appendChild(p); bar.appendChild(btns);
    document.body.appendChild(bar);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", show);
  else show();
})();
