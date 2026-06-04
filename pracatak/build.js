/* ============================================================
   Сборка preview-standalone.html:
   - инлайнит CSS, JS, SVG-эмблему и favicon
   - ПРЕДРЕНДЕРИТ вакансии/отзывы/гарантии/вкладки прямо в HTML,
     чтобы контент был виден даже если просмотрщик не выполняет JS.
   Запуск: node build.js
   ============================================================ */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const dir = __dirname;
const read = (p) => fs.readFileSync(path.join(dir, p), "utf8");

/* --- 1. Достаём данные из app.js без браузера --- */
const appCode = read("js/app.js");
const sandbox = {
  document: { addEventListener() {}, getElementById() { return null; }, querySelectorAll() { return []; } },
  window: {}, console,
};
vm.createContext(sandbox);
vm.runInContext(
  appCode + "\n;this.__data = { SITE, RECRUITER, COUNTRIES, VACANCIES, REVIEWS, GUARANTEES };",
  sandbox
);
const { SITE, RECRUITER, COUNTRIES, VACANCIES, REVIEWS, GUARANTEES } = sandbox.__data;
const flagName = (slug) => { const c = COUNTRIES.find((x) => x.slug === slug); return `${c.flag} ${c.name}`; };

/* --- 2. Предрендер HTML-блоков (1:1 с функциями в app.js) --- */
const chipsHTML =
  `<button class="chip is-active" data-c="all">Все страны <i>${VACANCIES.length}</i></button>` +
  COUNTRIES.map((c) => {
    const n = VACANCIES.filter((v) => v.country === c.slug).length;
    return `<button class="chip" data-c="${c.slug}">${c.flag} ${c.name} <i>${n}</i></button>`;
  }).join("");

const vacanciesHTML = VACANCIES.map((v) => {
  const c = COUNTRIES.find((x) => x.slug === v.country);
  return `
      <article class="vac-card">
        <div class="vac-card__top">
          <span class="vac-card__flag">${c.flag} ${c.name}</span>
          ${v.hot ? '<span class="vac-card__hot">🔥 Срочно</span>' : ""}
        </div>
        <h3 class="vac-card__title">${v.title}</h3>
        <div class="vac-card__city">📍 ${v.city}</div>
        <div class="vac-card__salary">${v.salary} <span>${v.unit}</span></div>
        <div class="vac-card__tags">
          <span class="tag">${v.type}</span>
          ${v.housing ? '<span class="tag tag--gold">🏠 Жильё включено</span>' : ""}
        </div>
        <a href="#apply" class="btn btn--ghost vac-card__btn" data-vac="${v.title} — ${c.name}, ${v.city}">Откликнуться</a>
      </article>`;
}).join("");

const reviewsHTML = REVIEWS.map((r) => `
    <article class="review">
      <div class="review__stars">${"★".repeat(r.rating)}</div>
      <p class="review__text">«${r.text}»</p>
      <div class="review__meta">
        <span class="review__name">${r.name}</span>
        <span class="review__country">→ ${r.country}</span>
      </div>
    </article>`).join("");

const guaranteesHTML = GUARANTEES.map((g) => `
    <article class="guarantee">
      <div class="guarantee__icon">${g.icon}</div>
      <h3 class="guarantee__title">${g.title}</h3>
      <p class="guarantee__text">${g.text}</p>
    </article>`).join("");

/* --- 3. Собираем HTML --- */
let html = read("index.html");
const css = read("css/style.css");
const js = appCode;
const emblem = read("assets/emblem.svg");

// инлайн CSS / JS
html = html.replace(/<link rel="stylesheet" href="css\/style.css" \/>/, "<style>\n" + css + "\n</style>");
html = html.replace(/<script src="js\/app.js"><\/script>/, "<script>\n" + js + "\n</script>");

// favicon + эмблема
const fav = "data:image/svg+xml;base64," + Buffer.from(emblem).toString("base64");
html = html.replace(/href="assets\/emblem.svg"/g, () => `href="${fav}"`);
html = html.replace(/<img class="logo__badge"[^>]*>/g, () => emblem.replace("<svg ", '<svg class="logo__badge" '));

// предрендер контента в контейнеры
html = html.replace('id="countryFilter"></div>', `id="countryFilter">${chipsHTML}</div>`);
html = html.replace('id="vacancyGrid"></div>', `id="vacancyGrid">${vacanciesHTML}</div>`);
html = html.replace('id="reviewGrid"></div>', `id="reviewGrid">${reviewsHTML}</div>`);
html = html.replace('id="guaranteeGrid"></div>', `id="guaranteeGrid">${guaranteesHTML}</div>`);

// рекрутёр
html = html.replace('id="recruiterPhoto" class="recruiter__photo" src=""', `id="recruiterPhoto" class="recruiter__photo" src="${RECRUITER.photo}"`);
html = html.replace('id="recruiterQuote"></blockquote>', `id="recruiterQuote">«${RECRUITER.quote}»</blockquote>`);
html = html.replace('id="recruiterName"></div>', `id="recruiterName">${RECRUITER.name}</div>`);
html = html.replace('id="recruiterRole"></div>', `id="recruiterRole">${RECRUITER.role}</div>`);

// контакты
const tel = SITE.phone.replace(/\s/g, "");
html = html.replace(/href="#" data-tg/g, `href="${SITE.telegram}" data-tg`);
html = html.replace(/href="#" data-wa/g, `href="${SITE.whatsapp}" data-wa`);
html = html.replace(/href="#" data-vb/g, `href="${SITE.viber}" data-vb`);
html = html.replace('href="#" data-phone="text"></a>', `href="tel:${tel}" data-phone="text">${SITE.phone}</a>`);
html = html.replace('href="#" data-email="text"></a>', `href="mailto:${SITE.email}" data-email="text">${SITE.email}</a>`);
html = html.replace('<span id="year"></span>', `<span id="year">${new Date().getFullYear()}</span>`);

fs.writeFileSync(path.join(dir, "preview-standalone.html"), html);
console.log(`OK: preview-standalone.html — ${html.length} bytes, ${VACANCIES.length} вакансий предрендерено`);
