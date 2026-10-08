/* THORWallet — card country availability (searchable).
   Source: AML Country Classification. Red (non-serviced) = not available;
   orange (high-risk, EDD) + green (no-risk) = available. */
(function () {
  "use strict";
  function T(s){ return (window.__t ? window.__t(s) : s); }
  var listEl = document.getElementById("country-list");
  if (!listEl) return;
  var searchEl = document.getElementById("country-search");
  var chips = Array.prototype.slice.call(document.querySelectorAll(".cty-chip"));
  var countEl = document.getElementById("cty-count");

  /* [name, ISO-2, available] */
  var DATA = [
    ["Afghanistan","AF",true],["Albania","AL",true],["Algeria","DZ",false],["Andorra","AD",true],
    ["Angola","AO",false],["Anguilla","AI",true],["Antigua & Barbuda","AG",true],["Argentina","AR",true],
    ["Armenia","AM",true],["Aruba","AW",true],["Australia","AU",true],["Austria","AT",true],["Azerbaijan","AZ",true],
    ["Bahamas","BS",true],["Bahrain","BH",true],["Bangladesh","BD",true],["Barbados","BB",true],
    ["Belarus","BY",false],["Belgium","BE",true],["Belize","BZ",true],["Benin","BJ",true],["Bermuda","BM",true],
    ["Bolivia","BO",false],["Bosnia & Herzegovina","BA",true],["Botswana","BW",true],["British Virgin Islands","VG",false],
    ["Brunei","BN",true],["Bulgaria","BG",false],["Burkina Faso","BF",false],["Burundi","BI",true],
    ["Cambodia","KH",true],["Cameroon","CM",false],["Canada","CA",true],["Cayman Islands","KY",true],
    ["Central African Republic","CF",true],["Chad","TD",true],["Chile","CL",true],["China","CN",false],
    ["Colombia","CO",true],["Comoros","KM",true],["Congo - Brazzaville","CG",true],["Congo - Kinshasa","CD",false],
    ["Costa Rica","CR",true],["Côte d'Ivoire","CI",false],["Croatia","HR",true],["Cuba","CU",true],
    ["Curaçao","CW",true],["Cyprus","CY",true],["Czechia","CZ",true],["Denmark","DK",true],["Djibouti","DJ",true],
    ["Dominica","DM",true],["Dominican Republic","DO",true],["Ecuador","EC",true],["Egypt","EG",true],
    ["El Salvador","SV",true],["Equatorial Guinea","GQ",true],["Eritrea","ER",true],["Estonia","EE",true],
    ["Eswatini","SZ",true],["Ethiopia","ET",true],["Fiji","FJ",true],["Finland","FI",true],["France","FR",true],
    ["Gabon","GA",true],["Gambia","GM",true],["Georgia","GE",true],["Germany","DE",true],["Ghana","GH",true],
    ["Gibraltar","GI",true],["Greece","GR",true],["Grenada","GD",true],["Guernsey","GG",true],["Guinea","GN",true],
    ["Guinea-Bissau","GW",true],["Guyana","GY",true],["Haiti","HT",false],["Honduras","HN",true],["Hong Kong","HK",true],
    ["Hungary","HU",true],["Iceland","IS",true],["India","IN",true],["Indonesia","ID",true],["Iran","IR",false],
    ["Iraq","IQ",true],["Ireland","IE",true],["Isle of Man","IM",true],["Israel","IL",true],["Italy","IT",true],
    ["Jamaica","JM",true],["Japan","JP",true],["Jersey","JE",true],["Jordan","JO",true],["Kazakhstan","KZ",true],
    ["Kenya","KE",false],["Kiribati","KI",true],["Kosovo","XK",true],["Kuwait","KW",true],["Kyrgyzstan","KG",true],
    ["Laos","LA",false],["Latvia","LV",true],["Lebanon","LB",false],["Lesotho","LS",true],["Liberia","LR",true],
    ["Libya","LY",true],["Liechtenstein","LI",true],["Lithuania","LT",true],["Luxembourg","LU",true],["Macau","MO",true],
    ["Madagascar","MG",true],["Malaysia","MY",true],["Maldives","MV",true],["Mali","ML",true],["Malta","MT",true],
    ["Marshall Islands","MH",true],["Mauritania","MR",true],["Mauritius","MU",true],["Mexico","MX",true],
    ["Micronesia","FM",true],["Moldova","MD",true],["Monaco","MC",false],["Mongolia","MN",true],["Montserrat","MS",true],
    ["Morocco","MA",true],["Mozambique","MZ",false],["Myanmar","MM",false],["Namibia","NA",false],["Nauru","NR",true],
    ["Nepal","NP",false],["Netherlands","NL",true],["New Zealand","NZ",true],["Nicaragua","NI",true],["Nigeria","NG",false],
    ["Niue","NU",true],["North Korea","KP",false],["North Macedonia","MK",true],["Norway","NO",true],["Pakistan","PK",true],
    ["Palau","PW",true],["Panama","PA",true],["Papua New Guinea","PG",true],["Paraguay","PY",true],["Peru","PE",true],
    ["Philippines","PH",true],["Poland","PL",true],["Portugal","PT",true],["Puerto Rico","PR",true],["Qatar","QA",true],
    ["Romania","RO",true],["Russia","RU",false],["Rwanda","RW",true],["Saint Kitts & Nevis","KN",true],
    ["Saint Lucia","LC",true],["Saint Vincent & Grenadines","VC",true],["San Marino","SM",true],
    ["São Tomé & Príncipe","ST",true],["Saudi Arabia","SA",true],["Senegal","SN",true],["Serbia","RS",true],
    ["Seychelles","SC",true],["Sierra Leone","SL",true],["Singapore","SG",true],["Slovakia","SK",true],
    ["Slovenia","SI",true],["Solomon Islands","SB",true],["Somalia","SO",true],["South Africa","ZA",false],
    ["South Sudan","SS",false],["Spain","ES",true],["Sri Lanka","LK",true],["Sudan","SD",true],["Suriname","SR",true],
    ["Sweden","SE",true],["Switzerland","CH",true],["Syria","SY",false],["Taiwan","TW",true],["Tajikistan","TJ",true],
    ["Tanzania","TZ",true],["Thailand","TH",true],["Timor-Leste","TL",true],["Togo","TG",true],["Tonga","TO",true],
    ["Trinidad & Tobago","TT",true],["Tunisia","TN",true],["Turkey","TR",true],["Turkmenistan","TM",true],
    ["Turks & Caicos","TC",true],["Tuvalu","TV",true],["Uganda","UG",true],["Ukraine","UA",true],
    ["United Arab Emirates","AE",true],["United Kingdom","GB",true],["United States","US",true],["Uruguay","UY",true],
    ["Uzbekistan","UZ",true],["Vanuatu","VU",true],["Vatican City","VA",true],["Venezuela","VE",false],
    ["Vietnam","VN",false],["Yemen","YE",false],["Zambia","ZM",true],["Zimbabwe","ZW",true]
  ];

  function flag(cc) {
    return cc.toUpperCase().replace(/./g, function (ch) {
      return String.fromCodePoint(127397 + ch.charCodeAt(0));
    });
  }

  var state = { q: "", filter: "all" };

  function render() {
    var rows = "", shown = 0;
    for (var i = 0; i < DATA.length; i++) {
      var n = DATA[i][0], c = DATA[i][1], a = DATA[i][2];
      if (state.filter === "available" && !a) continue;
      if (state.filter === "not" && a) continue;
      if (state.q && n.toLowerCase().indexOf(state.q) < 0) continue;
      shown++;
      rows += '<li class="cty-row' + (a ? "" : " is-off") + '">' +
        '<span class="cty-flag" aria-hidden="true">' + flag(c) + '</span>' +
        '<span class="cty-name">' + n + '</span>' +
        '<span class="cty-badge ' + (a ? "ok" : "no") + '">' + T(a ? "Available" : "Not available") + '</span>' +
        '</li>';
    }
    listEl.innerHTML = rows || '<li class="cty-empty">' + T("No countries match your search.") + '</li>';
    if (countEl) countEl.textContent = shown + " " + T(shown === 1 ? "country" : "countries");
  }

  searchEl.addEventListener("input", function () { state.q = this.value.trim().toLowerCase(); render(); });
  chips.forEach(function (b) {
    b.addEventListener("click", function () {
      chips.forEach(function (x) { x.classList.remove("active"); x.setAttribute("aria-pressed", "false"); });
      b.classList.add("active"); b.setAttribute("aria-pressed", "true");
      state.filter = b.getAttribute("data-filter"); render();
    });
  });
  render();
})();
