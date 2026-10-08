/* THORWALLET - live Medium feed loader.
   Pulls latest posts from the Medium publication at runtime and renders
   them into any [data-medium-feed] grid. If the feed can't be reached,
   the curated fallback cards already in the grid are left untouched. */
(function () {
  "use strict";
  var FEED = "https://thorwallet.medium.com/feed";
  var ENDPOINT = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(FEED);
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  var grids = Array.prototype.slice.call(document.querySelectorAll("[data-medium-feed]"));
  if (!grids.length) return;

  function fmtDate(s) {
    var d = new Date(s);
    if (isNaN(d)) return "";
    return d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear();
  }
  function cleanLink(u) { return (u || "#").split("?")[0]; }
  function decode(s) {
    var t = document.createElement("textarea"); t.innerHTML = s || ""; return t.value;
  }
  function firstImage(it) {
    var bad = /\/_\/stat|stat\?|\/da\/|pixel/i;
    if (it.thumbnail && /^https?:/.test(it.thumbnail) && !bad.test(it.thumbnail)) return it.thumbnail;
    var html = (it.content || "") + (it.description || "");
    var re = /<img[^>]+src=["']([^"']+)["']/ig, m;
    while ((m = re.exec(html))) { if (!bad.test(m[1])) return m[1]; }
    return "";
  }

  function render(grid, items) {
    var limit = parseInt(grid.getAttribute("data-limit"), 10) || items.length;
    var frag = document.createDocumentFragment();
    items.slice(0, limit).forEach(function (it, i) {
      var a = document.createElement("a");
      a.className = "post reveal in";
      a.href = cleanLink(it.link);
      a.target = "_blank";
      a.rel = "noopener";
      if (i % 3 === 1) a.setAttribute("data-delay", "1");
      if (i % 3 === 2) a.setAttribute("data-delay", "2");

      var src = firstImage(it);
      if (src) {
        a.classList.add("has-thumb");
        var thumb = document.createElement("div"); thumb.className = "post-thumb";
        var im = document.createElement("img");
        im.loading = "lazy"; im.alt = ""; im.src = src;
        im.onerror = function () { a.classList.remove("has-thumb"); if (thumb.parentNode) thumb.parentNode.removeChild(thumb); };
        thumb.appendChild(im); a.appendChild(thumb);
      }

      var date = document.createElement("span"); date.className = "date"; date.textContent = fmtDate(it.pubDate);
      var h = document.createElement("h3"); h.textContent = decode(it.title);
      var more = document.createElement("span"); more.className = "more"; more.textContent = (window.__t ? window.__t("Read on Medium →") : "Read on Medium →");
      a.appendChild(date); a.appendChild(h); a.appendChild(more);
      frag.appendChild(a);
    });
    grid.innerHTML = "";
    grid.appendChild(frag);
  }

  fetch(ENDPOINT)
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (data) {
      if (!data || data.status !== "ok" || !data.items || !data.items.length) return;
      grids.forEach(function (g) { render(g, data.items); });
      try {
        var posts = data.items.map(function (it) {
          var bp = { "@type": "BlogPosting", "headline": decode(it.title), "url": cleanLink(it.link), "datePublished": it.pubDate, "author": { "@type": "Organization", "name": "THORWallet" }, "publisher": { "@type": "Organization", "name": "THORWallet", "logo": { "@type": "ImageObject", "url": "https://www.thorwallet.org/assets/thorwallet-logo-white.png" } } };
          var img = firstImage(it); if (img) bp.image = img;
          return bp;
        });
        var ld = { "@context": "https://schema.org", "@type": "Blog", "name": "THORWallet Blog", "url": location.href.split("#")[0], "blogPost": posts };
        var sc = document.createElement("script"); sc.type = "application/ld+json"; sc.textContent = JSON.stringify(ld);
        document.head.appendChild(sc);
      } catch (e) { /* schema is best-effort */ }
      var latest = fmtDate(data.items[0].pubDate);
      if (latest) Array.prototype.forEach.call(document.querySelectorAll("[data-last-update]"), function (el) { el.textContent = latest; });
    })
    .catch(function () { /* keep curated fallback cards */ });
})();
