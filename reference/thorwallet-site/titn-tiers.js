/* THORWallet — $TITN tier section variants + switcher. */
(function () {
  "use strict";
  var wrap = document.querySelector(".titn-variants");
  if (!wrap) return;
  var sw = document.querySelector(".tv-switch");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- V1: animated fee count-down + magnitude bars ---- */
  var rowsAnimated = false;
  function countFee(el, from, to) {
    if (!el) return;
    if (reduce) { el.textContent = to + "%"; return; }
    var dur = 900, start = null;
    (function step(ts) {
      if (!start) start = ts;
      var t = Math.min(1, (ts - start) / dur);
      var e = 1 - Math.pow(1 - t, 3);
      var val = from + (to - from) * e;
      el.textContent = val.toFixed(2) + "%";
      if (t < 1) requestAnimationFrame(step); else el.textContent = to + "%";
    })(performance.now());
  }
  function animateRows() {
    var rows = wrap.querySelectorAll(".tv-rows .titn-row[data-bar]");
    for (var i = 0; i < rows.length; i++) {
      var bar = rows[i].querySelector(".tn-bar");
      if (bar) bar.style.width = rows[i].getAttribute("data-bar") + "%";
      countFee(rows[i].querySelector(".fee"), 1.25, parseFloat(rows[i].getAttribute("data-fee")));
    }
    rowsAnimated = true;
  }
  function resetRows() {
    var bars = wrap.querySelectorAll(".tv-rows .tn-bar");
    for (var i = 0; i < bars.length; i++) bars[i].style.width = "0";
    rowsAnimated = false;
  }

  /* ---- switcher ---- */
  function setTv(v) {
    wrap.setAttribute("data-tv", v);
    if (sw) {
      var b = sw.querySelectorAll("button");
      for (var i = 0; i < b.length; i++) b[i].classList.toggle("active", b[i].getAttribute("data-tv-btn") === v);
    }
    try { localStorage.setItem("tw-titn-v", v); } catch (e) {}
    if (v === "1") { resetRows(); requestAnimationFrame(animateRows); }
  }
  if (sw) {
    sw.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-tv-btn]");
      if (b) setTv(b.getAttribute("data-tv-btn"));
    });
  }
  var saved;
  try { saved = localStorage.getItem("tw-titn-v"); } catch (e) {}
  setTv(saved || wrap.getAttribute("data-tv") || "1");

  /* trigger row animation when scrolled into view */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && wrap.getAttribute("data-tv") === "1" && !rowsAnimated) animateRows();
      });
    }, { threshold: 0.25 });
    io.observe(wrap);
  } else if (wrap.getAttribute("data-tv") === "1") {
    animateRows();
  }

  /* ---- V3: interactive stake slider ---- */
  var range = document.getElementById("tnsl-range");
  if (range) {
    var tierEl = document.getElementById("tnsl-tier");
    var feeEl = document.getElementById("tnsl-fee");
    var saveEl = document.getElementById("tnsl-save");
    function fmt(n) { return n.toLocaleString("en-US"); }
    function upd() {
      var v = +range.value, tier, fee;
      if (v >= 100000) { tier = "Community Plus"; fee = 0.2; }
      else if (v >= 10000) { tier = "Community"; fee = 0.5; }
      else { tier = "Standard"; fee = 1.25; }
      tierEl.textContent = tier;
      feeEl.textContent = fee;
      var save = Math.round((1 - fee / 1.25) * 100);
      saveEl.innerHTML = v >= 10000
        ? ("Staking <b>" + fmt(v) + " $TITN</b> cuts your swap fee to <b>" + fee + "%</b> — that's <b>" + save + "% lower</b> than Standard.")
        : "Move the slider - stake more $TITN to cut your fee.";
      var pct = (v / parseFloat(range.max)) * 100;
      range.style.background = "linear-gradient(90deg, rgba(49,253,157,0.45) " + pct + "%, var(--surface-2) " + pct + "%)";
    }
    range.addEventListener("input", upd);
    upd();
  }
})();
