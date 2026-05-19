/* ============================================
   HR & Recruit — i18n system
   Default language: RU. Supports UA, EN.
   Usage in HTML: <span data-i18n="hero.title"></span>
   ============================================ */

const TRANSLATIONS = {
  /* ============================================ RUSSIAN ============================================ */
  ru: {
    nav: {
      countries: "Страны",
      services: "Услуги и цены",
      documents: "Документы",
      cases: "Отзывы",
      guarantees: "Гарантии",
      about: "О компании",
      contacts: "Контакты",
      apply: "Оставить заявку",
    },
    hero: {
      eyebrow: "20 проверенных вакансий · 5 стран",
      titleA: "Работа в Европе.",
      titleB: "От €1800",
      titleC: "до €2400 в месяц.",
      lede: "Сельское хозяйство, заводы, теплицы, отели. Контракты от 4 до 12 месяцев. Официальное оформление, жильё в стоимости.",
      cta1: "Смотреть вакансии",
      cta2: "Калькулятор заработка",
      microcopy: "Контракт от работодателя · Жильё включено · Сезон или год",
    },
    vacShowcase: {
      head: "Открытые вакансии",
      sub: "Все позиции проверены, контракт подписывается до выезда",
      seeAll: "Все вакансии",
    },
    calc: {
      head: "Сколько вы заработаете?",
      sub: "Передвиньте параметры — посмотрите на сезон или год",
      labelCountry: "Страна",
      labelDuration: "Длительность",
      labelEffort: "Темп работы",
      labelExpenses: "Жильё и питание",
      effortLow: "Спокойный",
      effortLowSub: "только базовая ставка",
      effortMed: "Стандарт",
      effortMedSub: "с понаднормовыми",
      effortHigh: "Максимум",
      effortHighSub: "выходные + ночные",
      expIncluded: "Включено",
      expIncludedSub: "у работодателя",
      expSelf: "Сам платишь",
      expSelfSub: "≈ €300/мес",
      resultLabel: "Чистыми за период",
      resultMeta: "после налогов и расходов",
      brkGross: "Брутто-зарплата",
      brkTax: "Налоги и взносы",
      brkExp: "Расходы (жильё, еда)",
      brkNet: "На руки чистыми",
    },
    countriesSec: {
      eyebrow: "5 направлений",
      titleA: "Куда поехать?",
      sub: "У каждой страны — свой профиль работ и свои особенности оплаты.",
    },
    cases: {
      eyebrow: "Реальные люди — реальные деньги",
      titleA: "Сколько привезли",
      titleB: "наши кандидаты.",
      all: "Все отзывы",
    },
    faq: {
      eyebrow: "Частые вопросы",
      title: "Самое важное — коротко.",
      sub: "Подробные ответы — в публичной оферте и от менеджера при заявке.",
    },
    apply: {
      eyebrow: "Оставить заявку",
      titleA: "Подберём вакансию",
      titleB: "под ваш опыт.",
      lede: "Заполните форму — менеджер свяжется в течение 24 часов, подберёт 2–4 вакансии под ваш опыт, организует собеседование.",
      stepsTitle: "Как мы работаем",
      s1: "Заявка через сайт или мессенджер",
      s2: "Подбор 2–4 вакансий под вас",
      s3: "Собеседование с работодателем",
      s4: "Подписание контракта и подготовка к выезду",
      formName: "Имя и фамилия",
      formPhone: "Телефон",
      formEmail: "Email",
      formCountry: "Желаемая страна",
      formCountryPh: "— выберите страну —",
      formAny: "Не важно — посоветуйте",
      formMessenger: "Удобный мессенджер",
      formCall: "Звонок на телефон",
      formAgree: "Согласен на обработку персональных данных согласно",
      formAgreeLink: "политике конфиденциальности",
      formSubmit: "Отправить заявку",
      formNote: "Менеджер свяжется в течение 24 часов и подберёт 2–4 варианта.",
    },
    trustRibbon: {
      i1: "UK-агентство",
      i1m: "Companies House № 15117049",
      i2: "20 вакансий",
      i2m: "в 5 странах ЕС и UK",
      i3: "Жильё включено",
      i3m: "во всех вакансиях",
      i4: "Прямой контракт",
      i4m: "с работодателем до выезда",
      i5: "Сопровождение по прибытии",
      i5m: "первые 14 дней",
    },
    footer: {
      tagline: "Британское агентство для легального трудоустройства в ЕС и UK. Без обмана и серых схем.",
      colCountries: "Страны",
      colCompany: "Компания",
      colDocs: "Документы",
      colContacts: "Контакты",
      about: "О нас",
      guarantees: "Гарантии и лицензии",
      casesLink: "Отзывы клиентов",
      servicesLink: "Услуги и цены",
      offer: "Публичная оферта",
      privacy: "Политика конфиденциальности",
      cookies: "Cookies",
      contacts: "Все каналы связи →",
      legal: "Зарегистрирована в Англии и Уэльсе под номером 15117049. Юридический адрес: 59-61 Charlotte Street, St Pauls Square, Birmingham, West Midlands, B3 1PX, United Kingdom. SIC-коды: 78109, 78200, 78300. Деятельность регулируется UK Consumer Rights Act 2015. Платежи обрабатываются Stripe Payments Europe Ltd.",
      copyright: "Все права защищены",
    },
    cookies: {
      text: "Мы используем cookies для работы сайта и аналитики. Подробнее — в нашей",
      link: "политике cookies",
      acceptAll: "Принять все",
      acceptEssential: "Только необходимые",
    },
    misc: {
      vacancies: "вакансий",
      currency: "/мес",
      free: "бесплатно",
      contractFrom: "Контракт от",
      start: "Старт",
      apply: "Откликнуться",
      details: "Подробнее",
      perSeason: "за сезон",
      perMonth: "в месяц",
      months: "месяцев",
    },
  },

  /* ============================================ UKRAINIAN ============================================ */
  uk: {
    nav: {
      countries: "Країни",
      services: "Послуги та ціни",
      documents: "Документи",
      cases: "Відгуки",
      guarantees: "Гарантії",
      about: "Про компанію",
      contacts: "Контакти",
      apply: "Залишити заявку",
    },
    hero: {
      eyebrow: "20 перевірених вакансій · 5 країн",
      titleA: "Робота в Європі.",
      titleB: "Від €1800",
      titleC: "до €2400 на місяць.",
      lede: "Сільське господарство, заводи, теплиці, готелі. Контракти від 4 до 12 місяців. Офіційне оформлення, житло у вартості.",
      cta1: "Дивитися вакансії",
      cta2: "Калькулятор заробітку",
      microcopy: "Контракт від роботодавця · Житло включене · Сезон або рік",
    },
    vacShowcase: {
      head: "Відкриті вакансії",
      sub: "Усі позиції перевірені, контракт підписується до виїзду",
      seeAll: "Усі вакансії",
    },
    calc: {
      head: "Скільки ви заробите?",
      sub: "Пересуньте параметри — подивіться на сезон або рік",
      labelCountry: "Країна",
      labelDuration: "Тривалість",
      labelEffort: "Темп роботи",
      labelExpenses: "Житло та харчування",
      effortLow: "Спокійний",
      effortLowSub: "тільки базова ставка",
      effortMed: "Стандарт",
      effortMedSub: "з понаднормовими",
      effortHigh: "Максимум",
      effortHighSub: "вихідні + нічні",
      expIncluded: "Включено",
      expIncludedSub: "у роботодавця",
      expSelf: "Сам платиш",
      expSelfSub: "≈ €300/міс",
      resultLabel: "Чистими за період",
      resultMeta: "після податків і витрат",
      brkGross: "Брутто-зарплата",
      brkTax: "Податки і внески",
      brkExp: "Витрати (житло, їжа)",
      brkNet: "На руки чистими",
    },
    countriesSec: {
      eyebrow: "5 напрямків",
      titleA: "Куди поїхати?",
      sub: "У кожної країни — свій профіль робіт і свої особливості оплати.",
    },
    cases: {
      eyebrow: "Реальні люди — реальні гроші",
      titleA: "Скільки привезли",
      titleB: "наші кандидати.",
      all: "Усі відгуки",
    },
    faq: {
      eyebrow: "Часті питання",
      title: "Найважливіше — коротко.",
      sub: "Детальні відповіді — у публічній оферті і від менеджера при заявці.",
    },
    apply: {
      eyebrow: "Залишити заявку",
      titleA: "Підберемо вакансію",
      titleB: "під ваш досвід.",
      lede: "Заповніть форму — менеджер зв'яжеться протягом 24 годин, підбере 2–4 вакансії під ваш досвід, організує співбесіду.",
      stepsTitle: "Як ми працюємо",
      s1: "Заявка через сайт або месенджер",
      s2: "Підбір 2–4 вакансій під вас",
      s3: "Співбесіда з роботодавцем",
      s4: "Підписання контракту і підготовка до виїзду",
      formName: "Ім'я та прізвище",
      formPhone: "Телефон",
      formEmail: "Email",
      formCountry: "Бажана країна",
      formCountryPh: "— оберіть країну —",
      formAny: "Не важливо — порадьте",
      formMessenger: "Зручний месенджер",
      formCall: "Дзвінок на телефон",
      formAgree: "Згоден на обробку персональних даних згідно з",
      formAgreeLink: "політикою конфіденційності",
      formSubmit: "Надіслати заявку",
      formNote: "Менеджер зв'яжеться протягом 24 годин і підбере 2–4 варіанти.",
    },
    trustRibbon: {
      i1: "UK-агентство",
      i1m: "Companies House № 15117049",
      i2: "20 вакансій",
      i2m: "у 5 країнах ЄС та UK",
      i3: "Житло включене",
      i3m: "в усіх вакансіях",
      i4: "Прямий контракт",
      i4m: "з роботодавцем до виїзду",
      i5: "Супровід після прибуття",
      i5m: "перші 14 днів",
    },
    footer: {
      tagline: "Британське агентство для легального працевлаштування в ЄС та UK. Без обману і сірих схем.",
      colCountries: "Країни",
      colCompany: "Компанія",
      colDocs: "Документи",
      colContacts: "Контакти",
      about: "Про нас",
      guarantees: "Гарантії та ліцензії",
      casesLink: "Відгуки клієнтів",
      servicesLink: "Послуги та ціни",
      offer: "Публічна оферта",
      privacy: "Політика конфіденційності",
      cookies: "Cookies",
      contacts: "Усі канали зв'язку →",
      legal: "Зареєстрована в Англії та Уельсі під номером 15117049. Юридична адреса: 59-61 Charlotte Street, St Pauls Square, Birmingham, West Midlands, B3 1PX, United Kingdom. SIC-коди: 78109, 78200, 78300. Діяльність регулюється UK Consumer Rights Act 2015. Платежі обробляються Stripe Payments Europe Ltd.",
      copyright: "Усі права захищені",
    },
    cookies: {
      text: "Ми використовуємо cookies для роботи сайту та аналітики. Детальніше — у нашій",
      link: "політиці cookies",
      acceptAll: "Прийняти всі",
      acceptEssential: "Тільки необхідні",
    },
    misc: { vacancies: "вакансій", currency: "/міс", free: "безкоштовно", contractFrom: "Контракт від", start: "Старт", apply: "Відгукнутися", details: "Детальніше", perSeason: "за сезон", perMonth: "на місяць", months: "місяців" },
  },

  /* ============================================ ENGLISH ============================================ */
  en: {
    nav: {
      countries: "Countries",
      services: "Services & pricing",
      documents: "Documents",
      cases: "Stories",
      guarantees: "Guarantees",
      about: "About",
      contacts: "Contact",
      apply: "Apply",
    },
    hero: {
      eyebrow: "20 verified jobs · 5 countries",
      titleA: "Work in Europe.",
      titleB: "From €1,800",
      titleC: "to €2,400 per month.",
      lede: "Agriculture, factories, greenhouses, hotels. Contracts from 4 to 12 months. Official paperwork, accommodation included.",
      cta1: "Browse jobs",
      cta2: "Earnings calculator",
      microcopy: "Direct employer contract · Housing included · Seasonal or annual",
    },
    vacShowcase: {
      head: "Open jobs",
      sub: "All positions verified, contract signed before you travel",
      seeAll: "All jobs",
    },
    calc: {
      head: "How much will you earn?",
      sub: "Move the parameters — see season or year totals",
      labelCountry: "Country",
      labelDuration: "Duration",
      labelEffort: "Work pace",
      labelExpenses: "Housing & food",
      effortLow: "Steady",
      effortLowSub: "base rate only",
      effortMed: "Standard",
      effortMedSub: "with overtime",
      effortHigh: "Maximum",
      effortHighSub: "weekends + nights",
      expIncluded: "Included",
      expIncludedSub: "by employer",
      expSelf: "Paid by you",
      expSelfSub: "≈ €300/mo",
      resultLabel: "Net for the period",
      resultMeta: "after taxes and expenses",
      brkGross: "Gross salary",
      brkTax: "Taxes & contributions",
      brkExp: "Living expenses",
      brkNet: "Net in hand",
    },
    countriesSec: {
      eyebrow: "5 destinations",
      titleA: "Where to go?",
      sub: "Each country has its own work profile and payment specifics.",
    },
    cases: {
      eyebrow: "Real people — real money",
      titleA: "What our candidates",
      titleB: "brought home.",
      all: "All stories",
    },
    faq: {
      eyebrow: "FAQ",
      title: "The essentials — short.",
      sub: "Detailed answers in the public offer and from the manager on call.",
    },
    apply: {
      eyebrow: "Apply",
      titleA: "We'll find a job",
      titleB: "matching your experience.",
      lede: "Fill the form — a manager contacts you within 24 hours, matches 2–4 jobs to your background, schedules an interview.",
      stepsTitle: "How it works",
      s1: "Apply via website or messenger",
      s2: "We match 2–4 jobs to your profile",
      s3: "Interview with the employer",
      s4: "Contract signing and travel preparation",
      formName: "Full name",
      formPhone: "Phone",
      formEmail: "Email",
      formCountry: "Preferred country",
      formCountryPh: "— select country —",
      formAny: "Doesn't matter — advise me",
      formMessenger: "Preferred messenger",
      formCall: "Phone call",
      formAgree: "I agree to the processing of personal data per the",
      formAgreeLink: "privacy policy",
      formSubmit: "Send application",
      formNote: "Manager will contact you within 24 hours with 2–4 matched positions.",
    },
    trustRibbon: {
      i1: "UK agency",
      i1m: "Companies House № 15117049",
      i2: "20 jobs",
      i2m: "across 5 EU & UK countries",
      i3: "Housing included",
      i3m: "in all positions",
      i4: "Direct contract",
      i4m: "with employer before travel",
      i5: "Arrival support",
      i5m: "first 14 days",
    },
    footer: {
      tagline: "UK-registered agency for legal employment in the EU and UK. No scams, no grey schemes.",
      colCountries: "Countries",
      colCompany: "Company",
      colDocs: "Documents",
      colContacts: "Contact",
      about: "About",
      guarantees: "Guarantees & licenses",
      casesLink: "Customer stories",
      servicesLink: "Services & pricing",
      offer: "Public offer",
      privacy: "Privacy policy",
      cookies: "Cookies",
      contacts: "All channels →",
      legal: "Registered in England and Wales, company number 15117049. Registered office: 59-61 Charlotte Street, St Pauls Square, Birmingham, West Midlands, B3 1PX, United Kingdom. SIC codes: 78109, 78200, 78300. Activity governed by UK Consumer Rights Act 2015. Payments processed by Stripe Payments Europe Ltd.",
      copyright: "All rights reserved",
    },
    cookies: {
      text: "We use cookies for site functionality and analytics. Read more in our",
      link: "cookies policy",
      acceptAll: "Accept all",
      acceptEssential: "Essential only",
    },
    misc: { vacancies: "jobs", currency: "/mo", free: "free", contractFrom: "Contract from", start: "Start", apply: "Apply", details: "Details", perSeason: "for the season", perMonth: "per month", months: "months" },
  },
};

/* ---------- LANG STATE ---------- */
function getLang() { return localStorage.getItem("hr-lang") || "ru"; }
function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem("hr-lang", lang);
  applyLang(lang);
}

function t(path) {
  const lang = getLang();
  const parts = path.split(".");
  let cur = TRANSLATIONS[lang];
  for (const p of parts) {
    if (!cur || cur[p] == null) return path;
    cur = cur[p];
  }
  return cur;
}

function applyLang(lang) {
  document.documentElement.lang = lang === "uk" ? "uk" : (lang === "en" ? "en" : "ru");

  // Translate every element with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val && val !== key) el.innerHTML = val;
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = t(key);
    if (val && val !== key) el.setAttribute("placeholder", val);
  });

  // Update lang toggle visual state
  document.querySelectorAll(".lang-toggle button").forEach(b => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });

  // Custom event for other scripts to re-render dynamic content
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
