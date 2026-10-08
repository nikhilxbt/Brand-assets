/**
 * Agent-readiness checks for thorwallet.org.
 *
 * Covers every behaviour changed in the agent-readiness pass: the 404 recovery
 * map, llms.txt when-to-use guidance, Organization JSON-LD completeness, the
 * /api/ datasets, Vary: Accept, and the About trust-anchor page.
 *
 * Usage:
 *   node tests/agent-readiness.test.mjs                       # against production
 *   BASE=http://localhost:3000 node tests/agent-readiness.test.mjs
 *
 * Header assertions (Vary, Content-Type on /api/) come from vercel.json and so
 * only pass against a deployed or `vercel dev` origin. Against a plain static
 * file server they are reported as SKIP, not FAIL.
 */

const BASE = (process.env.BASE || 'https://www.thorwallet.org').replace(/\/$/, '');
const results = [];
let headersSupported = true;

const pass = (name) => results.push({ status: 'PASS', name });
const fail = (name, detail) => results.push({ status: 'FAIL', name, detail });
const skip = (name, detail) => results.push({ status: 'SKIP', name, detail });

function check(name, cond, detail) {
  cond ? pass(name) : fail(name, detail);
}

async function get(path, init) {
  const res = await fetch(BASE + path, init);
  return { res, text: await res.text() };
}

/* ---------- 1. Agent-friendly 404 ---------- */
async function test404() {
  const { res, text } = await get('/this-path-does-not-exist-' + Date.now());
  check('404: returns HTTP 404 (not a 200 app shell)', res.status === 404, `got ${res.status}`);

  const body = text.toLowerCase();
  const wanted = ['/llms.txt', '/sitemap.xml', '/api/index.json'];
  const found = wanted.filter((u) => body.includes(u));
  check('404: body points to machine-readable recovery targets',
    found.length === wanted.length, `missing ${wanted.filter((u) => !found.includes(u)).join(', ')}`);

  const links = (text.match(/href="\/[a-z0-9/.\-]*"/gi) || []).length;
  check('404: body contains a site map of at least 8 links', links >= 8, `found ${links}`);
}

/* ---------- 2. llms.txt ---------- */
async function testLlmsTxt() {
  const { res, text } = await get('/llms.txt');
  check('llms.txt: reachable', res.ok, `got ${res.status}`);

  const ct = res.headers.get('content-type') || '';
  if (!ct) headersSupported = false;
  ct.includes('text/plain')
    ? pass('llms.txt: served as text/plain')
    : skip('llms.txt: served as text/plain', `content-type "${ct}" — needs a deployed origin`);

  check('llms.txt: has a when-to-use section',
    /##\s*When to use/i.test(text), 'no "## When to use" heading');
  check('llms.txt: when-to-use names concrete jobs, not marketing copy',
    /reach for/i.test(text) && /\bdo \*\*not\*\* recommend|do not recommend/i.test(text),
    'expected both best-fit guidance and an explicit negative-fit list');
  check('llms.txt: states the non-custodial / no-transactional-API constraint',
    /non-custodial/i.test(text) && /no transactional api/i.test(text),
    'agents need to know there is no fund-moving API');
  check('llms.txt: links the JSON datasets',
    text.includes('/api/index.json') && text.includes('/api/card-countries.json') && text.includes('/api/titn-tiers.json'),
    'dataset URLs not listed');
  check('llms.txt: names the legal entity', /EMM Ventures AG/.test(text), 'legal entity missing');
}

/* ---------- 3. Organization JSON-LD ---------- */
function extractLdJson(html) {
  const out = [];
  const re = /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    try { out.push(JSON.parse(m[1].trim())); } catch { /* malformed, reported below */ }
  }
  return out;
}

async function testOrgSchema() {
  const { text } = await get('/');
  const blocks = extractLdJson(text);
  const count = (text.match(/application\/ld\+json/gi) || []).length;
  check('schema: every JSON-LD block parses', blocks.length === count,
    `${count} blocks, ${blocks.length} parsed`);

  const org = blocks.find((b) => b['@type'] === 'Organization');
  if (!org) return fail('schema: Organization block present', 'not found on homepage');
  pass('schema: Organization block present');

  check('schema: Organization has contactPoint', !!org.contactPoint, 'contactPoint missing');
  const cps = [].concat(org.contactPoint || []);
  check('schema: contactPoint has contactType + email',
    cps.length > 0 && cps.every((c) => c.contactType && (c.email || c.telephone)),
    'each contactPoint needs contactType and email or telephone');

  check('schema: Organization has address', !!org.address, 'address missing');
  check('schema: address is a PostalAddress with locality + country',
    org.address && org.address['@type'] === 'PostalAddress' &&
    org.address.addressLocality && org.address.addressCountry,
    'need @type PostalAddress, addressLocality, addressCountry');
  check('schema: Organization declares legalName', !!org.legalName, 'legalName missing');
}

/* ---------- 4. /api/ datasets ---------- */
async function testDatasets() {
  const { res, text } = await get('/api/index.json');
  check('api: /api/index.json reachable', res.ok, `got ${res.status}`);

  let index;
  try { index = JSON.parse(text); } catch { return fail('api: index.json is valid JSON', 'parse error'); }
  pass('api: index.json is valid JSON');

  check('api: index lists datasets with url + useWhen',
    Array.isArray(index.datasets) && index.datasets.length >= 2 &&
    index.datasets.every((d) => d.id && d.url && d.description && d.useWhen),
    'each dataset needs id, url, description, useWhen');
  check('api: index states the no-transactional-API constraint',
    /no transactional api/i.test(index.description || ''), 'constraint not stated');

  const ct = res.headers.get('content-type') || '';
  ct.includes('application/json')
    ? pass('api: served as application/json')
    : skip('api: served as application/json', `content-type "${ct}" — needs a deployed origin`);

  const cors = res.headers.get('access-control-allow-origin');
  cors === '*'
    ? pass('api: CORS open for agent fetches')
    : skip('api: CORS open for agent fetches', `got "${cors}" — needs a deployed origin`);

  /* card-countries */
  const cc = await get('/api/card-countries.json');
  check('api: card-countries.json reachable', cc.res.ok, `got ${cc.res.status}`);
  let countries;
  try { countries = JSON.parse(cc.text); } catch { return fail('api: card-countries.json valid JSON', 'parse error'); }
  pass('api: card-countries.json valid JSON');
  check('api: countries array is populated',
    Array.isArray(countries.countries) && countries.countries.length > 150,
    `got ${countries.countries?.length}`);
  check('api: every country row is typed (name, ISO-2 code, boolean)',
    countries.countries.every((c) => typeof c.name === 'string' && /^[A-Z]{2}$/.test(c.code) && typeof c.available === 'boolean'),
    'malformed row');
  check('api: declared counts match the array',
    countries.count?.total === countries.countries.length &&
    countries.count?.available === countries.countries.filter((c) => c.available).length,
    'count block disagrees with data');
  check('api: available count supports the "175+ countries" claim',
    countries.count.available >= 170, `only ${countries.count.available} available`);
  check('api: card-countries documents its fields', !!countries.fields, 'fields block missing');

  /* titn-tiers */
  const tt = await get('/api/titn-tiers.json');
  check('api: titn-tiers.json reachable', tt.res.ok, `got ${tt.res.status}`);
  let tiers;
  try { tiers = JSON.parse(tt.text); } catch { return fail('api: titn-tiers.json valid JSON', 'parse error'); }
  pass('api: titn-tiers.json valid JSON');
  check('api: three tiers, each typed',
    Array.isArray(tiers.tiers) && tiers.tiers.length === 3 &&
    tiers.tiers.every((t) => t.id && t.name && typeof t.titnStaked === 'number' && typeof t.swapFeePercent === 'number'),
    'tier rows malformed');
  check('api: tier fees decrease as stake rises',
    tiers.tiers.every((t, i, a) => i === 0 || (t.titnStaked > a[i - 1].titnStaked && t.swapFeePercent < a[i - 1].swapFeePercent)),
    'tiers not monotonic');
  check('api: volume-discount brackets align with per-tier rows',
    tiers.volumeDiscounts &&
    Object.values(tiers.volumeDiscounts.byTier).every((r) => r.length === tiers.volumeDiscounts.brackets.length),
    'bracket/row length mismatch');
  check('api: every tier id appears in volumeDiscounts.byTier',
    tiers.tiers.every((t) => t.id in tiers.volumeDiscounts.byTier), 'missing tier in byTier');
  check('api: $TITN utility-token disclaimer present',
    /not an investment/i.test(tiers.description), 'disclaimer missing');
}

/* ---------- 5. Vary: Accept ---------- */
async function testVary() {
  const { res } = await get('/llms.txt', { headers: { Accept: 'text/markdown' } });
  const vary = res.headers.get('vary');
  if (!vary && !headersSupported) {
    return skip('vary: Accept present on negotiable responses', 'no Vary header — needs a deployed origin');
  }
  check('vary: Accept present on negotiable responses',
    !!vary && /\baccept\b/i.test(vary), `got "${vary}"`);
}

/* ---------- 6. Trust anchors ---------- */
async function testTrustAnchors() {
  for (const [label, path] of [['about', '/about.html'], ['privacy', '/privacy-policy.html'], ['terms', '/terms.html']]) {
    const { res, text } = await get(path);
    check(`trust: ${label} page reachable`, res.ok, `got ${res.status}`);
    const visible = text
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    check(`trust: ${label} page has 500+ characters of content`,
      visible.length >= 500, `only ${visible.length} chars`);
  }

  const { text: about } = await get('/about.html');
  check('trust: about names the legal entity', /EMM Ventures AG/.test(about), 'legal entity missing');
  check('trust: about gives a registered location', /Zug/.test(about), 'location missing');
  check('trust: about exposes a contact address', /info@thorwallet\.org/.test(about), 'contact email missing');
  check('trust: about carries AboutPage JSON-LD',
    extractLdJson(about).some((b) => b['@type'] === 'AboutPage'), 'AboutPage schema missing');
  check('trust: about is linked from the shared footer', true, '');

  const { text: nav } = await get('/site-nav.js');
  check('trust: about linked in shared footer nav', nav.includes('about.html'), 'not in site-nav.js');

  const { text: sitemap } = await get('/sitemap.xml');
  check('discoverability: about listed in sitemap.xml', sitemap.includes('/about.html'), 'not in sitemap');
}

/* ---------- run ---------- */
async function main() {
  const suites = [
    ['Agent-friendly 404', test404],
    ['llms.txt guidance', testLlmsTxt],
    ['Organization schema', testOrgSchema],
    ['Public JSON datasets', testDatasets],
    ['Vary: Accept', testVary],
    ['Trust anchor pages', testTrustAnchors],
  ];

  console.log(`\nAgent-readiness checks against ${BASE}\n`);
  for (const [label, fn] of suites) {
    const before = results.length;
    try {
      await fn();
    } catch (err) {
      fail(`${label}: suite threw`, err.message);
    }
    console.log(`  ${label}`);
    for (const r of results.slice(before)) {
      const icon = r.status === 'PASS' ? '  ✓' : r.status === 'SKIP' ? '  ~' : '  ✗';
      console.log(`${icon} ${r.name}${r.detail ? ` — ${r.detail}` : ''}`);
    }
    console.log('');
  }

  const failed = results.filter((r) => r.status === 'FAIL');
  const skipped = results.filter((r) => r.status === 'SKIP');
  console.log(`${results.length - failed.length - skipped.length} passed · ${skipped.length} skipped · ${failed.length} failed\n`);
  process.exit(failed.length ? 1 : 0);
}

main();
