/* THORWALLET — theme toggle (dark default, light opt-in). Persists to localStorage. */
(function () {
  "use strict";
  var KEY = "tw-theme";
  function cur() { return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"; }
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function swapLogos() {
    var c = cur();
    var marks = document.querySelectorAll(".hero-mark");
    for (var i = 0; i < marks.length; i++) {
      marks[i].src = c === "light" ? "assets/thorwallet-lockup-darktext.png" : "assets/thorwallet-lockup-gradient.png";
    }
  }
  function paint() {
    var c = cur();
    var toggles = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < toggles.length; i++) {
      var b = toggles[i];
      var label = b.classList.contains("theme-toggle-m");
      var lbl = c === "light" ? "Dark mode" : "Light mode";
      if (window.__t) lbl = window.__t(lbl);
      b.innerHTML = (c === "light" ? MOON : SUN) + (label ? '<span>' + lbl + '</span>' : '');
      b.setAttribute("aria-label", c === "light" ? "Switch to dark mode" : "Switch to light mode");
    }
  }
  function apply(t) {
    if (t === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    try { localStorage.setItem(KEY, t); } catch (e) {}
    paint();
    swapLogos();
  }
  function make(cls) {
    var b = document.createElement("button");
    b.type = "button"; b.className = cls; b.setAttribute("data-theme-toggle", "");
    b.addEventListener("click", function () { apply(cur() === "light" ? "dark" : "light"); });
    return b;
  }
  function init() {
    var cta = document.querySelector(".nav-cta");
    if (cta && !cta.querySelector("[data-theme-toggle]")) cta.insertBefore(make("theme-toggle"), cta.firstChild);
    var mm = document.querySelector(".mobile-menu");
    if (mm && !mm.querySelector("[data-theme-toggle]")) {
      var lang = mm.querySelector(".lang-picker");
      var t = make("theme-toggle theme-toggle-m");
      if (lang) mm.insertBefore(t, lang); else mm.appendChild(t);
    }
    paint();
    swapLogos();
  }
  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
