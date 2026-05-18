/* ============================================
   HR & Recruit — Site JS
   ============================================ */

const SITE = {
  name: "HR & Recruit",
  legal: "HR & Recruit Limited",
  company: "Company No. 15117049",
  address: "59-61 Charlotte Street, St Pauls Square, Birmingham, B3 1PX, UK",
  email: "hello@hrandrecruit.co.uk",
  phone: "+44 121 000 0000",
  countries: [
    { slug: "uk",          code: "UK", name: "United Kingdom", ru: "Великобритания",   tagline: "Сельское хозяйство и упаковка", rate: "1900–2200", count: 4 },
    { slug: "germany",     code: "DE", name: "Germany",        ru: "Германия",         tagline: "Производство и логистика",      rate: "1850–2100", count: 4 },
    { slug: "netherlands", code: "NL", name: "Netherlands",    ru: "Нидерланды",       tagline: "Теплицы и пищевая отрасль",     rate: "1900–2200", count: 4 },
    { slug: "greece",      code: "GR", name: "Greece",         ru: "Греция",           tagline: "Отели сезона 4★ и 5★",         rate: "1800–2000", count: 4 },
    { slug: "italy",       code: "IT", name: "Italy",          ru: "Италия",           tagline: "Отели и курортные комплексы",   rate: "1800–2050", count: 4 },
  ]
};

/* ---------- HEADER ---------- */
function renderHeader(activePage = "") {
  const countryItems = SITE.countries.map(c => `
    <a class="dropdown-item" href="country.html?c=${c.slug}">
      <span class="dropdown-code">${c.code}</span>
      <span class="dropdown-name">${c.ru}</span>
      <span class="dropdown-meta">€${c.rate}</span>
    </a>
  `).join("");

  return `
    <header class="site-header">
      <div class="container nav">
        <a href="index.html" class="logo" aria-label="HR & Recruit">
          <span class="logo-mark">HR</span>
          <span>&amp; Recruit</span>
          <span class="logo-sub">ЕС</span>
        </a>
        <nav class="nav-links">
          <div class="has-dropdown">
            <a href="#" class="nav-link ${["uk","germany","netherlands","greece","italy","country"].includes(activePage) ? "is-active" : ""}">Страны ↓</a>
            <div class="dropdown">${countryItems}</div>
          </div>
          <a href="services.html"   class="nav-link ${activePage==="services" ? "is-active" : ""}">Услуги и цены</a>
          <a href="cases.html"      class="nav-link ${activePage==="cases" ? "is-active" : ""}">Кейсы</a>
          <a href="guarantees.html" class="nav-link ${activePage==="guarantees" ? "is-active" : ""}">Гарантии</a>
          <a href="about.html"      class="nav-link ${activePage==="about" ? "is-active" : ""}">О компании</a>
          <a href="contacts.html"   class="nav-link ${activePage==="contacts" ? "is-active" : ""}">Контакты</a>
        </nav>
        <div class="nav-cta">
          <div class="lang-toggle">
            <button class="is-active">UA</button>
            <button>RU</button>
            <button>EN</button>
          </div>
          <a href="#apply" class="btn btn-primary btn-sm">Оставить заявку</a>
          <button class="menu-toggle" aria-label="Меню" onclick="toggleMobileNav()">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  const countryLinks = SITE.countries.map(c => `<li><a href="country.html?c=${c.slug}">${c.ru}</a></li>`).join("");

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">
              <span class="logo-mark" style="background: var(--brass); color: var(--bg-dark);">HR</span>
              <span>&amp; Recruit</span>
            </div>
            <p class="footer-tagline">
              Лицензированное британское агентство для&nbsp;легальной работы в&nbsp;ЕС и&nbsp;Великобритании.
            </p>
            <div style="display: flex; align-items: center; gap: 16px; font-size: 0.8125rem; color: rgba(245,241,232,0.65);">
              <span>🇬🇧 ${SITE.company}</span>
              <span>•</span>
              <span>Birmingham, UK</span>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Страны</div>
            <ul class="footer-list">${countryLinks}</ul>
          </div>
          <div>
            <div class="footer-col-title">Компания</div>
            <ul class="footer-list">
              <li><a href="about.html">О нас</a></li>
              <li><a href="guarantees.html">Гарантии и лицензии</a></li>
              <li><a href="cases.html">Кейсы клиентов</a></li>
              <li><a href="services.html">Услуги и цены</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-col-title">Документы</div>
            <ul class="footer-list">
              <li><a href="offer.html">Публичная оферта</a></li>
              <li><a href="privacy.html">Политика конфиденциальности</a></li>
              <li><a href="cookies.html">Cookies</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-col-title">Контакты</div>
            <ul class="footer-list">
              <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
              <li><a href="tel:${SITE.phone.replace(/\s/g,"")}">${SITE.phone}</a></li>
              <li><a href="contacts.html">Все каналы связи →</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-legal">
          <div class="footer-legal-text">
            <strong>HR &amp; Recruit Limited.</strong> Зарегистрирована в Англии и Уэльсе под номером 15117049.
            Юридический адрес: 59-61 Charlotte Street, St Pauls Square, Birmingham, West Midlands, B3 1PX, United Kingdom.
            SIC-коды деятельности: 78109, 78200, 78300 (Companies House).
            Деятельность регулируется UK Consumer Rights Act 2015 и Consumer Contracts Regulations 2013.
            Платежи обрабатываются Stripe Payments Europe Ltd.
          </div>
          <div class="footer-legal-text" style="text-align: right; min-width: 200px;">
            © ${new Date().getFullYear()} HR &amp; Recruit Ltd<br>
            Все права защищены
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
        Мы используем cookies для работы сайта и аналитики. Вы можете принять все cookies
        или оставить только необходимые. Подробнее — в нашей <a href="cookies.html" style="text-decoration: underline;">политике cookies</a>.
      </div>
      <div class="cookie-actions">
        <button class="btn btn-primary btn-sm" onclick="acceptCookies('all')">Принять все</button>
        <button class="btn btn-ghost btn-sm"   onclick="acceptCookies('essential')">Только необходимые</button>
      </div>
    </div>
  `;
}

function acceptCookies(level) {
  localStorage.setItem("hr-cookies-accepted", level);
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.classList.add("is-hidden");
}

/* ---------- MESSENGER FAB ---------- */
function renderMessengerFab() {
  return `
    <div class="messenger-fab" id="messengerFab">
      <div class="messenger-list">
        <a class="messenger-item" href="https://t.me/" target="_blank" rel="noopener">
          <span class="messenger-dot is-tg"></span> Telegram
        </a>
        <a class="messenger-item" href="https://wa.me/" target="_blank" rel="noopener">
          <span class="messenger-dot is-wa"></span> WhatsApp
        </a>
        <a class="messenger-item" href="viber://chat?number=" target="_blank" rel="noopener">
          <span class="messenger-dot is-vb"></span> Viber
        </a>
      </div>
      <button class="messenger-toggle" aria-label="Написать в мессенджер" onclick="toggleMessenger()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `;
}

function toggleMessenger() {
  document.getElementById("messengerFab")?.classList.toggle("is-open");
}

/* ---------- FAQ ---------- */
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", e => {
      // не закрывать при клике на ссылки внутри ответа
      if (e.target.closest("a")) return;
      item.classList.toggle("is-open");
    });
  });
}

/* ---------- REVEAL ON SCROLL ---------- */
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
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
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
    links.style.display = "flex";
    links.style.position = "absolute";
    links.style.top = "72px";
    links.style.left = "0";
    links.style.right = "0";
    links.style.background = "var(--bg-elev)";
    links.style.flexDirection = "column";
    links.style.padding = "24px";
    links.style.borderBottom = "1px solid var(--line)";
    links.style.gap = "16px";
  }
}

/* ---------- INIT ---------- */
function initSite(activePage = "") {
  document.getElementById("siteHeader") .innerHTML = renderHeader(activePage);
  document.getElementById("siteFooter") .innerHTML = renderFooter();
  document.getElementById("siteCookies").innerHTML = renderCookieBanner();
  document.getElementById("siteMessenger").innerHTML = renderMessengerFab();
  initFAQ();
  initReveal();
}

/* ---------- HELPERS ---------- */
function fmtEur(n) { return "€" + new Intl.NumberFormat("en-GB").format(n); }
function getQueryParam(key) { return new URLSearchParams(window.location.search).get(key); }
