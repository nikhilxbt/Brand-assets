/* THORWALLET site - interactions. Vanilla JS, rAF-driven. */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isDesktop = function () { return window.innerWidth > 900; };

  /* ---------- NAV: frost on scroll ---------- */
  var nav = document.querySelector(".nav");
  function onScrollNav() {
    if (!nav) return;
    if (window.scrollY > window.innerHeight * 0.7) nav.classList.add("is-frosted");
    else nav.classList.remove("is-frosted");
  }

  /* ---------- Trade dropdown ---------- */
  var trade = document.querySelector(".nav-trade");
  if (trade) {
    var tBtn = trade.querySelector("button");
    tBtn.addEventListener("click", function (e) { e.stopPropagation(); trade.classList.toggle("open"); tBtn.setAttribute("aria-expanded", trade.classList.contains("open")); });
    document.addEventListener("click", function () { trade.classList.remove("open"); tBtn.setAttribute("aria-expanded", "false"); });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector(".nav-burger");
  var menu = document.querySelector(".mobile-menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { menu.classList.remove("open"); document.body.style.overflow = ""; burger.setAttribute("aria-expanded", "false"); });
    });
  }

  /* ---------- HERO scrub ---------- */
  var pin = document.querySelector(".hero-pin");
  var frames = Array.prototype.slice.call(document.querySelectorAll(".hero-frame"));
  var rotImg = document.getElementById("rotato-frame");
  var cue = document.querySelector(".hero-scrollcue");
  var heroStats = document.querySelector("[data-hero-stats]");
  var lastIndex = -1;

  /* ----- Rotato frame map (scroll-scrubbed image sequence) ----- */
  /* Hi-res sequence: frame-0004.webp … frame-0502.webp. A handful of source
     frames are missing; we substitute the nearest available frame. */
  var ROT_MISSING = {};
  var ROT_MIN = 4, ROT_MAX = 502, rotLast = -1;
  var rotSrc = [];
  if (rotImg) (function buildRotato() {
    function pad(n) { return ("000" + n).slice(-4); }
    function url(n) { return "assets/rotato-hd/frame-" + pad(n) + ".webp"; }
    for (var i = ROT_MIN; i <= ROT_MAX; i++) {
      var a = i;
      if (ROT_MISSING[i]) {
        var lo = i, hi = i;
        while (ROT_MISSING[lo] && lo > ROT_MIN) lo--;
        while (ROT_MISSING[hi] && hi < ROT_MAX) hi++;
        a = (i - lo <= hi - i) ? lo : hi;
      }
      rotSrc[i] = url(a);
    }
    var uniq = {};
    if (window.innerWidth > 900) for (var j = ROT_MIN; j <= ROT_MAX; j += 2) {
      var s = rotSrc[j];
      if (s && !uniq[s]) {
        uniq[s] = 1;
        var im = new Image();
        im.decoding = "async";
        im.src = s;
        if (im.decode) im.decode().catch(function () {});
      }
    }
  })();
  function setRot(p) {
    if (!rotImg) return;
    var idx = Math.round(ROT_MIN + (ROT_MAX - ROT_MIN) * Math.min(1, Math.max(0, p)));
    idx -= (idx - ROT_MIN) % 2; /* snap to a step-2 grid - fewer src swaps = smoother scrub */
    if (idx === rotLast) return;
    rotLast = idx;
    rotImg.src = rotSrc[idx];
  }

  /* ----- Mobile rotato (portrait sequence, scrubbed on phones/iPad portrait) ----- */
  var ROT_M_MAX = 126, rotMLast = -1, rotSrcM = [];
  if (rotImg) (function buildRotatoM() {
    function padm(n) { return ("000" + n).slice(-4); }
    for (var i = 0; i <= ROT_M_MAX; i++) rotSrcM[i] = "assets/rotato-m/mframe-" + padm(i) + ".webp";
    if (window.innerWidth <= 900) { var u = {}; for (var j = 0; j <= ROT_M_MAX; j++) { var s = rotSrcM[j]; if (!u[s]) { u[s] = 1; var im = new Image(); im.decoding = "async"; im.src = s; } } }
  })();
  function setRotM(p) {
    if (!rotImg) return;
    var idx = Math.round(ROT_M_MAX * Math.min(1, Math.max(0, p)));
    if (idx === rotMLast) return;
    rotMLast = idx;
    rotImg.src = rotSrcM[idx];
  }

  function setFrame(i) {
    if (i === lastIndex) return;
    lastIndex = i;
    frames.forEach(function (f, idx) { f.classList.toggle("active", idx === i); });
  }

  var lede = document.querySelector(".hero-lede");
  var heroPanels = Array.prototype.slice.call(document.querySelectorAll(".hero-panel"));
  function heroUpdate() {
    if (!pin) return;
    if (!isDesktop()) {
      frames.forEach(function (f) { f.classList.add("active"); });
      var rectM = pin.getBoundingClientRect();
      var totalM = pin.offsetHeight - window.innerHeight;
      var pM = totalM > 0 ? Math.min(1, Math.max(0, (-rectM.top) / totalM)) : 0;
      if (rotImg) { if (reduceMotion) rotImg.src = rotSrcM[ROT_M_MAX]; else setRotM(pM); }
      var firstA = heroPanels.length ? parseFloat(heroPanels[0].getAttribute("data-start")) : 1;
      if (lede) {
        lede.style.transform = "none";
        lede.style.opacity = pM < firstA - 0.05 ? "1" : (pM < firstA + 0.01 ? String(Math.max(0, (firstA + 0.01 - pM) / 0.06).toFixed(3)) : "0");
        lede.style.pointerEvents = pM < firstA ? "auto" : "none";
      }
      if (heroStats) heroStats.style.opacity = (pM < 0.05 ? (1 - pM / 0.05) : 0).toFixed(3);
      heroPanels.forEach(function (el) {
        var a = parseFloat(el.getAttribute("data-start")), b = parseFloat(el.getAttribute("data-end"));
        el.classList.toggle("m-in", pM >= a && pM < b);
        el.style.opacity = ""; el.style.transform = "";
      });
      if (cue) cue.style.opacity = "0";
      return;
    }
    var rect = pin.getBoundingClientRect();
    var total = pin.offsetHeight - window.innerHeight;
    var p = Math.min(1, Math.max(0, (-rect.top) / total));
    if (!reduceMotion) setRot(p);
    else if (rotImg) rotImg.src = rotSrc[ROT_MAX];
    if (lede) {
      var lop = !reduceMotion && p > 0 ? (p < 0.085 ? (1 - p / 0.085) : 0) : 1;
      lede.style.opacity = lop.toFixed(3);
      lede.style.transform = reduceMotion ? "translate(-50%, 0)" : "translate(-50%, " + rect.top.toFixed(0) + "px)";
      lede.style.pointerEvents = (p > 0.05 || rect.top < -120) ? "none" : "auto";
    }
    heroPanels.forEach(function (el) {
      var a = parseFloat(el.getAttribute("data-start"));
      var b = parseFloat(el.getAttribute("data-end"));
      var f = 0.06, op, ty;
      if (reduceMotion) { op = (p >= a - 0.02 && p < b) ? 1 : 0; ty = 0; }
      else if (p < a) { op = 0; ty = 64; }
      else if (p < a + f) { var t1 = (p - a) / f; op = t1; ty = 64 * (1 - t1); }
      else if (p < b - f) { op = 1; ty = 0; }
      else if (p < b) { var t2 = (p - (b - f)) / f; op = 1 - t2; ty = -42 * t2; }
      else { op = 0; ty = -42; }
      el.style.opacity = op.toFixed(3);
      el.style.transform = "translateY(calc(-50% + " + ty.toFixed(1) + "px))";
    });
    if (cue) cue.style.opacity = window.scrollY > 60 ? "0" : "0.9";
    if (heroStats) heroStats.style.opacity = (p < 0.05 ? (1 - p / 0.05) : 0).toFixed(3);
  }

  /* ---------- Reveals (scroll-based, environment-robust) ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  function revealCheck() {
    for (var i = revealEls.length - 1; i >= 0; i--) {
      var el = revealEls[i];
      var r = el.getBoundingClientRect();
      if (reduceMotion || (r.top < window.innerHeight * 0.92 && r.bottom > -40)) {
        el.classList.add("in"); maybeCount(el); revealEls.splice(i, 1);
      }
    }
  }

  /* ---------- Count-up ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    var dur = 1100, start = null;
    var fmt = function (n) {
      if (target >= 1000) return Math.round(n).toLocaleString("en-US");
      return (target % 1 === 0) ? Math.round(n).toString() : n.toFixed(1);
    };
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min(1, (ts - start) / dur);
      var e = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + fmt(target * e) + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function maybeCount(scope) {
    var nodes = scope.matches && scope.matches("[data-count]") ? [scope] : [];
    if (scope.querySelectorAll) nodes = nodes.concat(Array.prototype.slice.call(scope.querySelectorAll("[data-count]")));
    nodes.forEach(function (n) { if (!n._counted) { n._counted = true; if (reduceMotion) { n.textContent = (n.getAttribute("data-prefix") || "") + n.getAttribute("data-count") + (n.getAttribute("data-suffix") || ""); } else animateCount(n); } });
  }

  /* ---------- Plan card tilt ---------- */
  if (!reduceMotion) {
    document.querySelectorAll(".tilt").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(900px) rotateY(" + (px * 6).toFixed(2) + "deg) rotateX(" + (-py * 6).toFixed(2) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
  }

  /* ---------- Pinned feature scrollytelling ---------- */
  var featPin = document.querySelector("[data-feat]");
  var featPanels = featPin ? Array.prototype.slice.call(featPin.querySelectorAll(".feat-panel")) : [];
  var featScreens = featPin ? Array.prototype.slice.call(featPin.querySelectorAll(".feat-screen")) : [];
  var featRail = featPin ? Array.prototype.slice.call(featPin.querySelectorAll(".feat-rail button")) : [];
  var featBar = featPin ? featPin.querySelector("[data-feat-progress]") : null;
  var featSteps = featPanels.length || 1;
  var featLast = -1;

  function featSet(step) {
    if (step === featLast) return;
    featLast = step;
    featPanels.forEach(function (el, i) { el.classList.toggle("active", i === step); });
    featScreens.forEach(function (el, i) { el.classList.toggle("active", i === step); });
    featRail.forEach(function (el, i) { el.classList.toggle("active", i === step); });
  }
  function featUpdate() {
    if (!featPin || !isDesktop()) { if (featBar) featBar.style.width = "0"; return; }
    var rect = featPin.getBoundingClientRect();
    var total = featPin.offsetHeight - window.innerHeight;
    var p = Math.min(1, Math.max(0, (-rect.top) / total));
    var step = Math.min(featSteps - 1, Math.max(0, Math.floor(p * featSteps)));
    featSet(step);
    if (featBar) featBar.style.width = (p * 100).toFixed(2) + "%";
  }
  featRail.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var i = parseInt(btn.getAttribute("data-go"), 10);
      var total = featPin.offsetHeight - window.innerHeight;
      var y = featPin.offsetTop + (total * (i + 0.5) / featSteps);
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  /* ---------- Card plan expand/collapse (all three in sync) ---------- */
  (function () {
    var toggles = Array.prototype.slice.call(document.querySelectorAll(".plan-toggle"));
    if (!toggles.length) return;
    var plans = Array.prototype.slice.call(document.querySelectorAll(".plan[data-plan]"));
    function setAll(open) {
      plans.forEach(function (p) { p.classList.toggle("open", open); });
      toggles.forEach(function (b) {
        b.setAttribute("aria-expanded", open ? "true" : "false");
        var l = b.querySelector("span");
        if (l) l.textContent = open ? (window.__t ? window.__t("Hide benefits & fees") : "Hide benefits & fees") : (window.__t ? window.__t("See all benefits & fees") : "See all benefits & fees");
      });
    }
    toggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setAll(!document.querySelector(".plan.open"));
      });
    });
  })();

  /* ---------- Typewriter headline + gated rails ---------- */
  var twHead = document.querySelector("[data-tw]");
  var twRails = document.querySelector("[data-rails]");
  var swapsSection = document.getElementById("swaps");
  var twChars = [];
  var twStarted = false;
  if (twHead) {
    Array.prototype.slice.call(twHead.querySelectorAll(".tw-seg")).forEach(function (seg) {
      var txt = seg.textContent; seg.textContent = "";
      for (var i = 0; i < txt.length; i++) {
        var s = document.createElement("span"); s.className = "tw-ch"; s.textContent = txt[i];
        seg.appendChild(s); twChars.push(s);
      }
    });
    twHead.classList.add("tw-ready");
  }
  if (twRails) twRails.classList.add("rails-ready");
  function twStart() {
    if (twStarted) return; twStarted = true;
    if (reduceMotion) {
      twChars.forEach(function (c) { c.classList.add("tw-on"); });
      if (twRails) twRails.classList.add("rails-in");
      return;
    }
    var i = 0;
    (function tick() {
      if (i > 0) twChars[i - 1].classList.remove("tw-cursor");
      if (i >= twChars.length) { if (twRails) setTimeout(function () { twRails.classList.add("rails-in"); }, 240); return; }
      twChars[i].classList.add("tw-on", "tw-cursor");
      i++;
      setTimeout(tick, twChars[i - 1].textContent === " " ? 16 : 32);
    })();
  }
  function twTrigger() {
    if (twStarted || !twHead) return;
    var r = twHead.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.82 && r.bottom > 0) twStart();
  }
  function twParallax() {
    if (!twHead || !swapsSection) return;
    if (reduceMotion || !isDesktop()) { twHead.style.transform = ""; return; }
    var r = swapsSection.getBoundingClientRect();
    var vh = window.innerHeight || 1;
    var p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
    twHead.style.transform = "translateX(" + ((0.5 - p) * 120).toFixed(1) + "px)";
  }

  /* ---------- Loop ---------- */
  var ticking = false;
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { heroUpdate(); featUpdate(); onScrollNav(); revealCheck(); twTrigger(); twParallax(); ticking = false; }); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { lastIndex = -1; featLast = -1; heroUpdate(); featUpdate(); onScrollNav(); revealCheck(); twTrigger(); });
  heroUpdate(); featUpdate(); onScrollNav(); revealCheck(); twTrigger(); twParallax();
  setTimeout(function () { revealCheck(); twTrigger(); }, 200); setTimeout(function () { revealCheck(); twTrigger(); }, 800);
})();

/* ---------- Signature signal sweep (one-time, on first reveal) ---------- */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  var els = Array.prototype.slice.call(document.querySelectorAll(".btn-primary, .btn-accent, .outline-accent"));
  if (!els.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add(el.classList.contains("outline-accent") ? "swept-text" : "swept");
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(function (el) { io.observe(el); });
})();

/* ---------- Card stage pointer tilt ---------- */
(function () {
  var stage = document.querySelector("[data-card-stage]");
  if (!stage) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var fan = stage.querySelector(".cs-fan");
  if (!fan) return;
  stage.addEventListener("pointermove", function (e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    var r = stage.getBoundingClientRect();
    var px = (e.clientX - r.left) / r.width - 0.5;
    var py = (e.clientY - r.top) / r.height - 0.5;
    fan.style.transform = "rotateY(" + (px * 10).toFixed(2) + "deg) rotateX(" + (-py * 8).toFixed(2) + "deg)";
  });
  stage.addEventListener("pointerleave", function () { fan.style.transform = ""; });
})();

/* ---------- Card tiers: synced "see all perks" expander ---------- */
(function () {
  var toggles = Array.prototype.slice.call(document.querySelectorAll(".tier-toggle"));
  if (!toggles.length) return;
  var tiers = Array.prototype.slice.call(document.querySelectorAll(".tiers .tier"));
  function setAll(open) {
    tiers.forEach(function (t) { t.classList.toggle("open", open); });
    toggles.forEach(function (b) {
      b.setAttribute("aria-expanded", open ? "true" : "false");
      var l = b.querySelector("span");
      if (l) l.textContent = open ? "Hide benefits & fees" : "See all benefits & fees";
    });
  }
  toggles.forEach(function (b) {
    b.addEventListener("click", function () { setAll(!document.querySelector(".tier.open")); });
  });
})();
