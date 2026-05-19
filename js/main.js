/* ============================================
   HR & Recruit — Main JS (i18n-aware)
   ============================================ */

const SITE = {
  name: "HR & Recruit",
  legal: "HR & Recruit Limited",
  company: "Company No. 15117049",
  address: "59-61 Charlotte Street, St Pauls Square, Birmingham, B3 1PX, UK",
  email: "hello@hrandrecruit.co.uk",
  phone: "+44 121 000 0000",
  whatsapp: "https://wa.me/",       // ← подставить реальный номер
  telegram: "https://t.me/",         // ← подставить @username
  viber: "viber://chat?number=",     // ← подставить номер
  countries: [
    { slug: "uk",          code: "UK", name_ru: "Великобритания", name_uk: "Велика Британія", name_en: "United Kingdom", tag_ru: "Фермы, теплицы, водители", tag_uk: "Ферми, теплиці, водії",         tag_en: "Farms, greenhouses, drivers", rate: "1900–2900", count: 4 },
    { slug: "germany",     code: "DE", name_ru: "Германия",       name_uk: "Німеччина",       name_en: "Germany",        tag_ru: "Заводы, склады, стройка",  tag_uk: "Заводи, склади, будівництво", tag_en: "Factories, logistics, build", rate: "2050–2700", count: 4 },
    { slug: "netherlands", code: "NL", name_ru: "Нидерланды",     name_uk: "Нідерланди",      name_en: "Netherlands",    tag_ru: "Теплицы, склады, стройка", tag_uk: "Теплиці, склади, будова",     tag_en: "Greenhouses, logistics",      rate: "2100–2750", count: 4 },
    { slug: "czechia",     code: "CZ", name_ru: "Чехия",          name_uk: "Чехія",           name_en: "Czechia",        tag_ru: "Заводы, стройка, водители",tag_uk: "Заводи, будова, водії",       tag_en: "Factories, construction",     rate: "1350–1850", count: 5 },
    { slug: "denmark",     code: "DK", name_ru: "Дания",          name_uk: "Данія",           name_en: "Denmark",        tag_ru: "Фермы, рыбозаводы",        tag_uk: "Ферми, рибозаводи",          tag_en: "Farms, fish processing",      rate: "2600–2950", count: 4 },
    { slug: "norway",      code: "NO", name_ru: "Норвегия",       name_uk: "Норвегія",        name_en: "Norway",         tag_ru: "Рыба, ягоды, стройка",     tag_uk: "Риба, ягоди, будова",         tag_en: "Fish, berries, construction", rate: "3000–3600", count: 4 },
    { slug: "switzerland", code: "CH", name_ru: "Швейцария",      name_uk: "Швейцарія",       name_en: "Switzerland",    tag_ru: "Отели, стройка, лесники",  tag_uk: "Готелі, будова, лісники",     tag_en: "Hotels, construction, forest",rate: "3500–4200", count: 4 },
    { slug: "greece",      code: "GR", name_ru: "Греция",         name_uk: "Греція",          name_en: "Greece",         tag_ru: "Отели на островах",        tag_uk: "Готелі на островах",          tag_en: "Island hotels",               rate: "1850–2100", count: 4 },
    { slug: "italy",       code: "IT", name_ru: "Италия",         name_uk: "Італія",          name_en: "Italy",          tag_ru: "Отели, курорты, стройка",  tag_uk: "Готелі, курорти, будова",     tag_en: "Hotels, resorts, building",   rate: "1850–2050", count: 4 },
  ]
};

function countryName(c, lang) { return c["name_" + lang] || c.name_ru; }
function countryTag(c, lang)  { return c["tag_"  + lang] || c.tag_ru;  }

/* ---------- HEADER ---------- */
function renderHeader(activePage = "") {
  const lang = getLang();
  const countryItems = SITE.countries.map(c => `
    <a class="dropdown-item" href="country.html?c=${c.slug}">
      <span class="dropdown-code">${c.code}</span>
      <span class="dropdown-name">${countryName(c, lang)}</span>
      <span class="dropdown-meta">€${c.rate}</span>
    </a>
  `).join("");

  return `
    <header class="site-header">
      <div class="container nav">
        <a href="index.html" class="logo" aria-label="HR & Recruit">
          <span class="logo-mark">HR</span>
          <span>&amp; Recruit</span>
        </a>
        <nav class="nav-links">
          <div class="has-dropdown">
            <a href="#" class="nav-link ${["uk","germany","netherlands","greece","italy","country"].includes(activePage) ? "is-active" : ""}" data-i18n="nav.countries"></a>
            <div class="dropdown">${countryItems}</div>
          </div>
          <a href="services.html"   class="nav-link ${activePage==="services" ? "is-active" : ""}" data-i18n="nav.services"></a>
          <a href="documents.html"  class="nav-link ${activePage==="documents" ? "is-active" : ""}" data-i18n="nav.documents"></a>
          <a href="cases.html"      class="nav-link ${activePage==="cases" ? "is-active" : ""}" data-i18n="nav.cases"></a>
          <a href="guarantees.html" class="nav-link ${activePage==="guarantees" ? "is-active" : ""}" data-i18n="nav.guarantees"></a>
          <a href="about.html"      class="nav-link ${activePage==="about" ? "is-active" : ""}" data-i18n="nav.about"></a>
          <a href="contacts.html"   class="nav-link ${activePage==="contacts" ? "is-active" : ""}" data-i18n="nav.contacts"></a>
        </nav>
        <div class="nav-cta">
          <div class="lang-toggle">
            <button data-lang="ru" onclick="setLang('ru')">RU</button>
            <button data-lang="uk" onclick="setLang('uk')">UA</button>
            <button data-lang="en" onclick="setLang('en')">EN</button>
          </div>
          <a href="#apply" class="btn btn-accent btn-sm" data-i18n="nav.apply"></a>
          <button class="menu-toggle" aria-label="Menu" onclick="toggleMobileNav()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  const lang = getLang();
  const countryLinks = SITE.countries.map(c => `<li><a href="country.html?c=${c.slug}">${countryName(c, lang)}</a></li>`).join("");

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">
              <span class="logo-mark">HR</span>
              <span>&amp; Recruit</span>
            </div>
            <p class="footer-tagline" data-i18n="footer.tagline"></p>
            <div style="display: flex; align-items: center; gap: 12px; font-size: 0.8125rem; color: rgba(250,250,247,0.65); font-family: var(--font-mono); letter-spacing: 0.05em;">
              <span>🇬🇧 ${SITE.company}</span>
              <span>·</span>
              <span>Birmingham, UK</span>
            </div>
          </div>
          <div>
            <div class="footer-col-title" data-i18n="footer.colCountries"></div>
            <ul class="footer-list">${countryLinks}</ul>
          </div>
          <div>
            <div class="footer-col-title" data-i18n="footer.colCompany"></div>
            <ul class="footer-list">
              <li><a href="about.html"      data-i18n="footer.about"></a></li>
              <li><a href="guarantees.html" data-i18n="footer.guarantees"></a></li>
              <li><a href="cases.html"      data-i18n="footer.casesLink"></a></li>
              <li><a href="services.html"   data-i18n="footer.servicesLink"></a></li>
            </ul>
          </div>
          <div>
            <div class="footer-col-title" data-i18n="footer.colDocs"></div>
            <ul class="footer-list">
              <li><a href="offer.html"   data-i18n="footer.offer"></a></li>
              <li><a href="privacy.html" data-i18n="footer.privacy"></a></li>
              <li><a href="cookies.html" data-i18n="footer.cookies"></a></li>
            </ul>
          </div>
          <div>
            <div class="footer-col-title" data-i18n="footer.colContacts"></div>
            <ul class="footer-list">
              <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
              <li><a href="tel:${SITE.phone.replace(/\s/g,'')}">${SITE.phone}</a></li>
              <li><a href="contacts.html" data-i18n="footer.contacts"></a></li>
            </ul>
          </div>
        </div>
        <div class="footer-legal">
          <div class="footer-legal-text">
            <strong>${SITE.legal}.</strong>
            <span data-i18n="footer.legal"></span>
          </div>
          <div class="footer-legal-text" style="text-align: right; min-width: 200px;">
            © ${new Date().getFullYear()} HR &amp; Recruit Ltd<br>
            <span data-i18n="footer.copyright"></span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* ---------- COOKIE BANNER ---------- */
function renderCookieBanner() {
  if (localStorage.getItem("hr-cookies-accepted")) return "";
  return `
    <div class="cookie-banner" id="cookieBanner">
      <div class="cookie-text">
        <span data-i18n="cookies.text"></span> <a href="cookies.html" style="text-decoration: underline;" data-i18n="cookies.link"></a>.
      </div>
      <div class="cookie-actions">
        <button class="btn btn-primary btn-sm" onclick="acceptCookies('all')"       data-i18n="cookies.acceptAll"></button>
        <button class="btn btn-ghost   btn-sm" onclick="acceptCookies('essential')" data-i18n="cookies.acceptEssential"></button>
      </div>
    </div>
  `;
}

function acceptCookies(level) {
  localStorage.setItem("hr-cookies-accepted", level);
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.classList.add("is-hidden");
}

/* ---------- MESSENGER FAB (WhatsApp-first) ---------- */
function renderMessengerFab() {
  return `
    <div class="messenger-fab" id="messengerFab">
      <div class="messenger-list">
        <a class="messenger-item" href="${SITE.whatsapp}" target="_blank" rel="noopener">
          <span class="messenger-dot is-wa"></span> WhatsApp
        </a>
        <a class="messenger-item" href="${SITE.telegram}" target="_blank" rel="noopener">
          <span class="messenger-dot is-tg"></span> Telegram
        </a>
        <a class="messenger-item" href="${SITE.viber}" target="_blank" rel="noopener">
          <span class="messenger-dot is-vb"></span> Viber
        </a>
      </div>
      <button class="messenger-toggle" aria-label="Messenger" onclick="toggleMessenger()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </button>
    </div>
  `;
}

function toggleMessenger() {
  document.getElementById("messengerFab")?.classList.toggle("is-open");
}

/* ---------- MOBILE STICKY CTA ---------- */
function renderMobileSticky() {
  return `
    <div class="mobile-sticky">
      <a href="#apply" class="btn btn-accent btn-block" data-i18n="nav.apply"></a>
    </div>
  `;
}

/* ---------- FAQ ---------- */
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", e => {
      if (e.target.closest("a")) return;
      item.classList.toggle("is-open");
    });
  });
}

/* ---------- REVEAL ---------- */
function initReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- MOBILE NAV ---------- */
function toggleMobileNav() {
  const links = document.querySelector(".nav-links");
  if (!links) return;
  const shown = links.style.display === "flex";
  if (shown) {
    links.style.display = "";
  } else {
    Object.assign(links.style, {
      display: "flex",
      position: "absolute",
      top: "68px",
      left: "0",
      right: "0",
      background: "var(--bg-elev)",
      flexDirection: "column",
      padding: "20px",
      borderBottom: "1px solid var(--line)",
      gap: "12px",
    });
  }
}

/* ---------- HELPERS ---------- */
function fmtEur(n) { return "€" + new Intl.NumberFormat("en-GB").format(n); }
function getQueryParam(key) { return new URLSearchParams(window.location.search).get(key); }

/* ---------- INIT ---------- */
function initSite(activePage = "") {
  document.getElementById("siteHeader") .innerHTML = renderHeader(activePage);
  document.getElementById("siteFooter") .innerHTML = renderFooter();
  document.getElementById("siteCookies").innerHTML = renderCookieBanner();
  document.getElementById("siteMessenger").innerHTML = renderMessengerFab();
  const sticky = document.getElementById("siteMobileSticky");
  if (sticky) sticky.innerHTML = renderMobileSticky();
  applyLang(getLang());
  initFAQ();
  initReveal();
}

/* Re-render dynamic blocks on language change */
document.addEventListener("langchange", () => {
  const header = document.getElementById("siteHeader");
  const footer = document.getElementById("siteFooter");
  if (header) {
    // get currently active page from existing nav-link.is-active
    const active = header.querySelector(".nav-link.is-active");
    let activeKey = "";
    if (active) {
      const text = active.getAttribute("data-i18n");
      activeKey = text ? text.replace("nav.", "") : "";
    }
    header.innerHTML = renderHeader(activeKey);
  }
  if (footer) footer.innerHTML = renderFooter();
  applyLang(getLang());
});
