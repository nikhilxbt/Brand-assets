/* THORWALLET - i18n engine + language picker.
   Translates by exact English source string. Persists choice and reloads
   so the typewriter + dynamic bits pick up the new language cleanly.
   Load AFTER i18n-data*.js and AFTER site-nav.js, BEFORE site.js. */
(function () {
  "use strict";
  var LANGS = [
    ["en", "English"], ["es", "Español"], ["de", "Deutsch"], ["nl", "Nederlands"],
    ["uk", "Українська"], ["ru", "Русский"], ["fr", "Français"], ["pt", "Português"],
    ["zh", "中文"], ["ko", "한국어"]
  ];
  var DICT = window.__I18N__ || {};
  var STORE = "tw_lang";
  function getLang() { try { return localStorage.getItem(STORE) || "en"; } catch (e) { return "en"; } }
  function setLang(l) { try { localStorage.setItem(STORE, l); } catch (e) {} location.reload(); }
  var lang = getLang();
  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  function lookup(s) { var t = DICT[s]; return (t && t[lang] != null) ? t[lang] : null; }

  window.__t = function (s) { if (lang === "en") return s; return lookup(s.trim()) || s; };

  function translate() {
    document.documentElement.setAttribute("lang", lang);
    if (lang === "en") return;

    /* Pass 1 - mixed-content elements (text + inline spans/b): replace whole. */
    var els = document.querySelectorAll("li, dd, p, .price, [data-i18n]");
    Array.prototype.forEach.call(els, function (el) {
      if (el.querySelector("a, button, input")) return; /* leave nav/links to text pass */
      var attr = el.getAttribute("data-i18n");
      var hasChildEl = false;
      for (var i = 0; i < el.childNodes.length; i++) { if (el.childNodes[i].nodeType === 1) { hasChildEl = true; break; } }
      var key = attr || (hasChildEl ? norm(el.textContent) : null);
      if (!key) return;
      var t = lookup(key);
      if (t != null) el.textContent = t;
    });

    /* Pass 2 - plain text nodes. */
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var tag = n.parentNode && n.parentNode.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var raw = node.nodeValue;
      var t = lookup(raw.trim());
      if (t == null) return;
      if (t === "" || /[\u3000-\u9fff\uac00-\ud7af\uff00-\uffef]/.test(t)) {
        node.nodeValue = t; /* CJK / empty: drop English inter-word spaces */
      } else {
        var lead = (raw.match(/^\s*/) || [""])[0];
        var trail = (raw.match(/\s*$/) || [""])[0];
        node.nodeValue = lead + t + trail;
      }
    });
  }

  translate();

  /* ---- Language picker ---- */
  function labelFor(l) { for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === l) return LANGS[i][1]; return "English"; }
  function build() {
    var hosts = document.querySelectorAll("[data-lang-picker]");
    Array.prototype.forEach.call(hosts, function (host) {
      host.classList.add("lang-picker");
      host.innerHTML = "";
      var btn = document.createElement("button");
      btn.type = "button"; btn.className = "lang-btn"; btn.setAttribute("aria-label", "Language");
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18"/></svg><span>' + labelFor(lang) + '</span>';
      var menu = document.createElement("div"); menu.className = "lang-menu";
      LANGS.forEach(function (L) {
        var o = document.createElement("button");
        o.type = "button"; o.className = "lang-opt" + (L[0] === lang ? " active" : ""); o.textContent = L[1];
        o.setAttribute("data-lang", L[0]);
        o.addEventListener("click", function (e) { e.stopPropagation(); setLang(L[0]); });
        menu.appendChild(o);
      });
      host.appendChild(btn); host.appendChild(menu);
      btn.addEventListener("click", function (e) { e.stopPropagation(); host.classList.toggle("open"); });
    });
    document.addEventListener("click", function () {
      Array.prototype.forEach.call(document.querySelectorAll(".lang-picker.open"), function (h) { h.classList.remove("open"); });
    });
  }
  build();
})();
