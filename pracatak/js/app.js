/* ============================================================
   PracaTak — демо-данные и логика страницы
   Все данные тут демо/рандомные — заменишь на реальные.
   ============================================================ */

/* --- Контакты бренда (заменить на реальные) --- */
const SITE = {
  name: "PracaTak",
  tagline: "Praca za granicą — Twoja przyszłość bez granic",
  phone: "+48 000 000 000",
  email: "kontakt@pracatak.eu",
  telegram: "https://t.me/pracatak",
  whatsapp: "https://wa.me/48000000000",
  viber: "viber://chat?number=48000000000",
};

/* --- Рекрутёр (главное лицо доверия) --- */
const RECRUITER = {
  name: "Анна Ковальская",
  role: "Старший рекрутёр · основатель PracaTak",
  years: 10,
  clients: 12000,
  photo: "https://placehold.co/640x800/151515/D4AF37?text=Recruiter+Photo",
  quote:
    "За 10 лет я лично провела через трудоустройство больше 12 000 человек. " +
    "Я не продаю «мечту» — я подбираю реальную работу с реальным контрактом. " +
    "Поэтому 8 из 10 новых клиентов приходят по рекомендации.",
};

/* --- 10 стран --- */
const COUNTRIES = [
  { slug: "pl", name: "Польша",        flag: "🇵🇱" },
  { slug: "de", name: "Германия",      flag: "🇩🇪" },
  { slug: "cz", name: "Чехия",         flag: "🇨🇿" },
  { slug: "nl", name: "Нидерланды",    flag: "🇳🇱" },
  { slug: "uk", name: "Великобритания",flag: "🇬🇧" },
  { slug: "it", name: "Италия",        flag: "🇮🇹" },
  { slug: "es", name: "Испания",       flag: "🇪🇸" },
  { slug: "no", name: "Норвегия",      flag: "🇳🇴" },
  { slug: "lt", name: "Литва",         flag: "🇱🇹" },
  { slug: "sk", name: "Словакия",      flag: "🇸🇰" },
];

/* --- Демо-вакансии (рандомные, по 3-4 на страну) --- */
const VACANCIES = [
  /* 🇵🇱 Польша */
  { country: "pl", title: "Упаковщик на склад",          city: "Вроцлав",    salary: "4 800 zł",  unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: true },
  { country: "pl", title: "Сварщик MIG/MAG",             city: "Познань",    salary: "32 zł",     unit: "/час",      type: "Опыт 1 год", hot: false, housing: true },
  { country: "pl", title: "Оператор производства",       city: "Лодзь",      salary: "4 500 zł",  unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "pl", title: "Кладовщик-комплектовщик",     city: "Варшава",    salary: "5 200 zł",  unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: false },

  /* 🇩🇪 Германия */
  { country: "de", title: "Работник производства",       city: "Мюнхен",     salary: "2 600 €",   unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: true },
  { country: "de", title: "Водитель категории C+E",      city: "Гамбург",    salary: "3 100 €",   unit: "нетто/мес", type: "Права C+E",  hot: false, housing: false },
  { country: "de", title: "Сборщик мебели",              city: "Кёльн",      salary: "2 500 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "de", title: "Помощник на складе",          city: "Берлин",     salary: "2 400 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },

  /* 🇨🇿 Чехия */
  { country: "cz", title: "Оператор линии",              city: "Брно",       salary: "38 000 Kč", unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "cz", title: "Электрик-монтажник",          city: "Прага",      salary: "190 Kč",    unit: "/час",      type: "Опыт 2 года",hot: false, housing: true },
  { country: "cz", title: "Работник склада",             city: "Пльзень",    salary: "35 000 Kč", unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: true },
  { country: "cz", title: "Швея",                        city: "Острава",    salary: "32 000 Kč", unit: "нетто/мес", type: "Опыт 1 год", hot: false, housing: true },

  /* 🇳🇱 Нидерланды */
  { country: "nl", title: "Сборщик заказов",             city: "Венло",      salary: "2 400 €",   unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: true },
  { country: "nl", title: "Работник теплицы",            city: "Роттердам",  salary: "2 300 €",   unit: "нетто/мес", type: "Сезон",      hot: false, housing: true },
  { country: "nl", title: "Упаковщик цветов",            city: "Алсмер",     salary: "2 350 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "nl", title: "Оператор склада",             city: "Эйндховен",  salary: "2 600 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: false },

  /* 🇬🇧 Великобритания */
  { country: "uk", title: "Сборщик урожая",              city: "Норфолк",    salary: "£1 950",    unit: "нетто/мес", type: "Сезон. виза",hot: true,  housing: true },
  { country: "uk", title: "Работник склада",             city: "Манчестер",  salary: "£2 100",    unit: "нетто/мес", type: "Без опыта",  hot: false, housing: false },
  { country: "uk", title: "Упаковщик пищ. производства", city: "Лидс",       salary: "£2 000",    unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "uk", title: "Оператор линии",              city: "Бирмингем",  salary: "£2 150",    unit: "нетто/мес", type: "Опыт 1 год", hot: false, housing: false },

  /* 🇮🇹 Италия */
  { country: "it", title: "Помощник на ферме",           city: "Верона",     salary: "1 700 €",   unit: "нетто/мес", type: "Сезон",      hot: false, housing: true },
  { country: "it", title: "Горничная в отель",           city: "Римини",     salary: "1 600 €",   unit: "нетто/мес", type: "Сезон",      hot: true,  housing: true },
  { country: "it", title: "Сборщик винограда",           city: "Тоскана",    salary: "1 650 €",   unit: "нетто/мес", type: "Сезон",      hot: false, housing: true },
  { country: "it", title: "Работник пекарни",            city: "Милан",      salary: "1 800 €",   unit: "нетто/мес", type: "Опыт 1 год", hot: false, housing: false },

  /* 🇪🇸 Испания */
  { country: "es", title: "Сборщик клубники",            city: "Уэльва",     salary: "1 500 €",   unit: "нетто/мес", type: "Сезон",      hot: false, housing: true },
  { country: "es", title: "Работник консервного завода", city: "Валенсия",   salary: "1 650 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "es", title: "Сборщик апельсинов",          city: "Севилья",    salary: "1 550 €",   unit: "нетто/мес", type: "Сезон",      hot: true,  housing: true },
  { country: "es", title: "Упаковщик на складе",         city: "Мадрид",     salary: "1 700 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: false },

  /* 🇳🇴 Норвегия */
  { country: "no", title: "Рыбообработчик",              city: "Берген",     salary: "2 900 €",   unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: true },
  { country: "no", title: "Разнорабочий на стройке",     city: "Осло",       salary: "3 200 €",   unit: "нетто/мес", type: "Опыт 1 год", hot: false, housing: false },
  { country: "no", title: "Работник рыбной фермы",       city: "Тромсё",     salary: "3 000 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "no", title: "Сотрудник клининга",          city: "Ставангер",  salary: "2 700 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },

  /* 🇱🇹 Литва */
  { country: "lt", title: "Швея",                        city: "Вильнюс",    salary: "1 200 €",   unit: "нетто/мес", type: "Опыт 1 год", hot: false, housing: true },
  { country: "lt", title: "Оператор станка",             city: "Каунас",     salary: "1 300 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
  { country: "lt", title: "Работник склада",             city: "Клайпеда",   salary: "1 250 €",   unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: true },

  /* 🇸🇰 Словакия */
  { country: "sk", title: "Оператор станка ЧПУ",         city: "Братислава", salary: "1 400 €",   unit: "нетто/мес", type: "Опыт 1 год", hot: false, housing: true },
  { country: "sk", title: "Сборщик автокомпонентов",     city: "Жилина",     salary: "1 350 €",   unit: "нетто/мес", type: "Без опыта",  hot: true,  housing: true },
  { country: "sk", title: "Работник производства",       city: "Кошице",     salary: "1 300 €",   unit: "нетто/мес", type: "Без опыта",  hot: false, housing: true },
];

/* --- Отзывы --- */
const REVIEWS = [
  { name: "Олег, 34", country: "Германия",     text: "Боялся обмана — слишком много мошенников. Но контракт подписал ДО любых оплат. Работаю на заводе под Мюнхеном, всё как обещали.", rating: 5 },
  { name: "Марина, 28", country: "Нидерланды",  text: "Анна вела меня лично с первого звонка. Жильё нашли заранее, встретили в аэропорту. Спасибо за человеческое отношение!", rating: 5 },
  { name: "Виктор, 41", country: "Норвегия",    text: "Зарплата выше, чем была в Польше, и жильё включено. На руки реально больше в 2 раза. Уже перевёз жену.", rating: 5 },
  { name: "Татьяна, 36", country: "Чехия",      text: "Без английского и без опыта взяли на упаковку. Всё объяснили по-русски, помогли с документами. Рекомендую знакомым.", rating: 5 },
  { name: "Сергей, 45", country: "Великобритания", text: "Сезонная виза, всё официально. £1 950 на руки, караван бесплатно. Второй сезон еду уже спокойно.", rating: 5 },
  { name: "Ирина, 31", country: "Италия",       text: "Хотела на лето подзаработать в отеле. Подобрали за 2 недели, помогли с жильём. Отношение топ.", rating: 5 },
  { name: "Дмитрий, 39", country: "Польша",     text: "Сварщиком устроился за неделю. Ставка честная, переработки оплачивают. Никаких скрытых платежей.", rating: 5 },
  { name: "Алина, 26", country: "Испания",      text: "Первый раз ехала за границу — было страшно. Анна на связи была даже ночью. Всё прошло гладко.", rating: 5 },
];

/* --- Гарантии --- */
const GUARANTEES = [
  { icon: "📄", title: "Контракт ДО оплат", text: "Вы подписываете официальный договор с работодателем раньше, чем платите хоть копейку. Это главный признак, что вас не обманут." },
  { icon: "🆓", title: "Подбор бесплатный", text: "За трудоустройство платит работодатель, а не вы. Мы не берём предоплат «за бронь вакансии»." },
  { icon: "🏠", title: "Жильё заранее",     text: "Адрес и условия проживания известны до вылета. Никаких «разберёмся на месте»." },
  { icon: "🛂", title: "Только легально",   text: "Официальное трудоустройство, белая зарплата, страховка. Работаем по закону страны." },
  { icon: "🗣️", title: "Поддержка по-русски", text: "Сопровождаем на родном языке на каждом этапе — от анкеты до первого рабочего дня." },
  { icon: "🤝", title: "Личный рекрутёр",   text: "С вами работает конкретный человек с именем и опытом, а не безликий колл-центр." },
];

/* ============================================================
   Рендер
   ============================================================ */
function renderStats() {
  // ничего, статичные в HTML
}

function renderCountryFilter() {
  const wrap = document.getElementById("countryFilter");
  if (!wrap) return;
  const countOf = (slug) => VACANCIES.filter((v) => v.country === slug).length;
  const all = `<button class="chip is-active" data-c="all">Все страны <i>${VACANCIES.length}</i></button>`;
  const items = COUNTRIES.map(
    (c) => `<button class="chip" data-c="${c.slug}">${c.flag} ${c.name} <i>${countOf(c.slug)}</i></button>`
  ).join("");
  wrap.innerHTML = all + items;

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    wrap.querySelectorAll(".chip").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderVacancies(btn.dataset.c);
  });
}

function renderVacancies(filter = "all") {
  const grid = document.getElementById("vacancyGrid");
  if (!grid) return;
  const list = filter === "all" ? VACANCIES : VACANCIES.filter((v) => v.country === filter);

  // плавная смена карточек
  grid.classList.remove("is-in");
  void grid.offsetWidth;
  grid.classList.add("is-in");

  grid.innerHTML = list
    .map((v) => {
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
        <a href="#apply" class="btn btn--ghost vac-card__btn" data-vac="${v.title} — ${c.name}, ${v.city}">
          Откликнуться
        </a>
      </article>`;
    })
    .join("");

  // подставляем выбранную вакансию в форму
  grid.querySelectorAll("[data-vac]").forEach((a) => {
    a.addEventListener("click", () => {
      const sel = document.getElementById("vacancyField");
      if (sel) sel.value = a.dataset.vac;
    });
  });
}

function renderReviews() {
  const grid = document.getElementById("reviewGrid");
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(
    (r) => `
    <article class="review">
      <div class="review__stars">${"★".repeat(r.rating)}</div>
      <p class="review__text">«${r.text}»</p>
      <div class="review__meta">
        <span class="review__name">${r.name}</span>
        <span class="review__country">→ ${r.country}</span>
      </div>
    </article>`
  ).join("");
}

function renderGuarantees() {
  const grid = document.getElementById("guaranteeGrid");
  if (!grid) return;
  grid.innerHTML = GUARANTEES.map(
    (g) => `
    <article class="guarantee">
      <div class="guarantee__icon">${g.icon}</div>
      <h3 class="guarantee__title">${g.title}</h3>
      <p class="guarantee__text">${g.text}</p>
    </article>`
  ).join("");
}

function renderRecruiter() {
  const img = document.getElementById("recruiterPhoto");
  if (img) img.src = RECRUITER.photo;
  const q = document.getElementById("recruiterQuote");
  if (q) q.textContent = "«" + RECRUITER.quote + "»";
  const n = document.getElementById("recruiterName");
  if (n) n.textContent = RECRUITER.name;
  const ro = document.getElementById("recruiterRole");
  if (ro) ro.textContent = RECRUITER.role;

  // hero-карточка
  const hp = document.getElementById("recruiterPhotoHero");
  if (hp) hp.src = RECRUITER.photo;
  const hn = document.getElementById("heroName");
  if (hn) hn.textContent = RECRUITER.name;
  const hr = document.getElementById("heroRole");
  if (hr) hr.textContent = RECRUITER.role;
}

function renderContacts() {
  document.querySelectorAll("[data-tg]").forEach((a) => (a.href = SITE.telegram));
  document.querySelectorAll("[data-wa]").forEach((a) => (a.href = SITE.whatsapp));
  document.querySelectorAll("[data-vb]").forEach((a) => (a.href = SITE.viber));
  document.querySelectorAll("[data-email]").forEach((a) => {
    a.href = "mailto:" + SITE.email;
    if (a.dataset.email === "text") a.textContent = SITE.email;
  });
  document.querySelectorAll("[data-phone]").forEach((a) => {
    a.href = "tel:" + SITE.phone.replace(/\s/g, "");
    if (a.dataset.phone === "text") a.textContent = SITE.phone;
  });
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function initForm() {
  const form = document.getElementById("applyForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = document.getElementById("formSuccess");
    // TODO: подключить реальный бэкенд / Formspree / Telegram-бот
    form.style.display = "none";
    if (ok) ok.style.display = "block";
  });
}

function initNav() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("is-open"));
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("is-open"))
    );
  }
  // shadow on scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCountryFilter();
  renderVacancies();
  renderReviews();
  renderGuarantees();
  renderRecruiter();
  renderContacts();
  initForm();
  initNav();
});
