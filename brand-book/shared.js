// Shared nav + footer bootstrap for the Thorwallet brand manual.
// Loaded as plain JS (no Babel).
(function () {
  const PAGES = [
    { href: "index.html", label: "Overview" },
    { href: "story.html", label: "Story" },
    { href: "logo.html", label: "Logo" },
    { href: "color.html", label: "Color" },
    { href: "typography.html", label: "Type" },
    { href: "imagery.html", label: "Imagery" },
    { href: "iconography.html", label: "Icons" },
    { href: "ui.html", label: "UI" },
    { href: "web.html", label: "Web" },
    { href: "print.html", label: "Print" },
    { href: "social.html", label: "Social" },
    { href: "card.html", label: "Card" },
  ];

  function buildNav() {
    const here = decodeURIComponent(location.pathname.split("/").pop() || "").toLowerCase();
    const navEl = document.querySelector("[data-brand-nav]");
    if (!navEl) return;
    const sectionLabel = navEl.getAttribute("data-section") || "Brand Guidelines";
    navEl.classList.add("brand-nav");
    navEl.innerHTML = `
      <div class="brand-nav-inner">
        <a class="logo-link" href="index.html">
          <img class="tw-logo" src="${(window.__resources && window.__resources.twLogo) || "assets/thorwallet-logo.png"}" alt="Thorwallet" style="height:22px;width:auto;" />
        </a>
        <span class="crumbs">${sectionLabel}</span>
        <nav class="nav-links">
          ${PAGES.map(p =>
            `<a href="${encodeURI(p.href)}" class="${p.href.toLowerCase() === here ? "active" : ""}">${p.label}</a>`
          ).join("")}
        </nav>
      </div>
    `;
  }

  function buildFoot() {
    const f = document.querySelector("[data-brand-foot]");
    if (!f) return;
    f.classList.add("brand-foot");
    f.innerHTML = `
      <div class="brand-foot-inner">
        <div>
          <h4>Thorwallet</h4>
          <p class="colophon">All chains. All yield. One app.<br/>New Brand Guidelines &middot; v0.1 &middot; Edition 2026</p>
        </div>
        <div>
          <h4>Sections</h4>
          <ul>
            ${PAGES.map(p => `<li><a href="${encodeURI(p.href)}">${p.label}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:brand@thorwallet.org">brand@thorwallet.org</a></li>
            <li><a href="#">Asset library &rarr;</a></li>
            <li><a href="#">Request usage &rarr;</a></li>
          </ul>
        </div>
      </div>
    `;
  }

  function init() {
    buildNav();
    buildFoot();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
