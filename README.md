# HR & Recruit — корпоративний сайт

Британське кадрове агентство для працевлаштування у 5 країн ЄС та Великобританії.
Сайт побудований як статика (HTML + CSS + чистий JS) без фреймворку — щоб легко редагувати без білду.

---

## Структура файлів

```
europeservice/
├── css/
│   └── styles.css           # Дизайн-система: токени, типографіка, компоненти
├── js/
│   └── main.js              # Спільні компоненти (хедер, футер, банери, FAQ)
├── data/
│   └── site.js              # ⭐ Всі вакансії, FAQ, кейси — головний файл для редагування
├── index.html               # Головна
├── country.html             # Універсальна сторінка країни → ?c=uk|germany|netherlands|greece|italy
├── vacancy.html             # Універсальна сторінка вакансії → ?id=<id-з-site.js>
├── services.html            # Послуги та ціни
├── about.html               # Про компанію
├── guarantees.html          # Гарантії та ліцензії
├── cases.html               # Кейси клієнтів
├── contacts.html            # Контакти
├── offer.html               # Публічна оферта (UK Law)
├── privacy.html             # Політика конфіденційності (UK GDPR)
└── cookies.html             # Cookies policy
```

---

## Дизайн — «Editorial European HR»

Конкретна стилістика, від якої не варто відступати:

- **Кольори:** теплий кремовий фон `#F5F1E8` + глибокий зелений `#1B3A2F` + жжена терракота `#C2410C`
- **Шрифти:** Fraunces (заголовки, variable serif) + Instrument Sans (body) + JetBrains Mono (коди/мітки)
- **НЕ використовуємо:** фіолетові градієнти, carousel-слайдери, countdown-таймери,
  стокові фото усміхнених робітників, кнопки «Замов зараз!!!»

Логіка: цільова аудиторія — українці, які бояться шахрайства. Агресивний маркетинг
викликає підозру. Стриманий editorial вигляд = «справжнє європейське агентство».

---

## ⭐ Як замінити демо-контент на реальний

### 1. Вакансії — `data/site.js`

Усі 20 вакансій — це масив `window.VACANCIES`. Кожен елемент має поля:

```js
{
  id: "uk-mushroom-picker",      // унікальний slug; під ним відкривається vacancy.html?id=uk-mushroom-picker
  country: "uk",                 // має співпадати з countries[].slug
  countryName: "Велика Британія",
  city: "Норфолк, Англія",
  title: "Сборщик шампіньонів",
  type: "Сезонна виза",
  contract: "6 місяців",
  start: "Травень 2026",
  rate: 2100,                    // число — €/міс нетто
  rateMeta: "нетто/міс",
  hours: "48 год/тиж",
  overtime: "оплачується ×1.5",
  accommodation: "Гуртожиток на фермі, €60/тиж утримання",
  img: "https://...",            // Hero-зображення (1200×800)
  gallery: ["url1", "url2", "url3", "url4"],  // Робоче місце (800×600)
  housing: ["url1", "url2", "url3", "url4"],  // Житло (800×600)
  summary: "Текст-опис на 2-3 речення.",
  duties: ["Обов'язок 1", "Обов'язок 2", ...],         // 5 пунктів
  requirements: ["Вимога 1", ...],                      // 5 пунктів
  included: [                                            // 6 карток «Що включено»
    { icon: "home",   label: "Проживання",  value: "..." },
    { icon: "doc",    label: "Контракт",    value: "..." },
    { icon: "shield", label: "Страховка",   value: "..." },
    { icon: "plane",  label: "Трансфер",    value: "..." },
    { icon: "money",  label: "Оплата",      value: "..." },
    { icon: "back",   label: "Бонус",       value: "..." }
  ]
}
```

**Доступні іконки для `included`:** `home, doc, shield, plane, money, back, wifi, food`

**Щоб додати/видалити вакансію** — просто відредагуй масив. Сторінки `country.html` та `vacancy.html` зчитують його автоматично, нічого більше не треба чіпати.

### 2. Фото

Зараз всюди — заглушки з `placehold.co` у фірмових кольорах. Замінити просто:

1. Завантаж реальні фото у папку `images/` (створи її)
2. У `data/site.js` заміни URL:
   ```js
   // Було:
   img: "https://placehold.co/1200x800/1B3A2F/F5F1E8?text=Mushroom+Farm+UK",
   // Стало:
   img: "images/uk-mushroom-1.jpg",
   ```

**Рекомендовані розміри:**
- Hero вакансії: 1200×800 px
- Галерея робочого місця і житла: 800×600 px
- Hero країни (`country.html` band): 2400×900 px
- Фото кейсів: 600×800 px (вертикальне)

### 3. FAQ і кейси

Також у `data/site.js` — масиви `window.FAQ` та `window.CASES`.

### 4. Контактні дані

У `js/main.js` зверху об'єкт `SITE`:
```js
const SITE = {
  email: "hello@hrandrecruit.co.uk",   // ← замінити на реальний коли буде
  phone: "+44 121 000 0000",           // ← замінити
  ...
}
```

Також у footer-секції з'являються контактні дані з цього об'єкта автоматично.

### 5. Месенджери (плаваюча кнопка)

У `js/main.js`, функція `renderMessengerFab` — там посилання `https://t.me/`, `https://wa.me/`, `viber://chat?number=`. Підставити реальні юзернейми/номери.

---

## Підключення Stripe (на майбутнє)

Зараз форма оплати немає — є лише ціни на сторінці послуг. Коли будете готові:

1. **Створити в Stripe Dashboard 6 продуктів:**
   - `prod_uk_documents` — €300
   - `prod_uk_arrival` — €250
   - `prod_uk_combo` — €500
   - `prod_eu_documents` — €200
   - `prod_eu_arrival` — €150
   - `prod_eu_combo` — €320

2. **Створити Stripe Checkout Sessions** (через бекенд або Stripe Payment Links). Для початку можна обійтися Payment Links — це готові URL без коду.

3. **Замінити в `services.html`** кнопки на ці Payment Links:
   ```html
   <a href="https://buy.stripe.com/xxx" class="btn btn-accent">Оплатити €300</a>
   ```

4. **При оплаті обов'язково додати в Checkout 2 checkbox:**
   - Згода з публічною офертою (посилання на `offer.html`)
   - **«Розумію, що послуга починає надаватись негайно і я відмовляюсь від 14-денного cooling-off права»** ← це юридично критично, без цього не можна почати роботу за UK Consumer Contracts Regulations 2013.

---

## Підключення форми заявки

Зараз форма показує `alert("Демо-форма")`. Щоб підключити до реального бекенду:

У кожному HTML файлі знайти `onsubmit="event.preventDefault(); alert(...)` і замінити на щось типу:

```js
onsubmit="event.preventDefault();
  fetch('/api/lead', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(Object.fromEntries(new FormData(this)))
  }).then(() => alert('Заявку надіслано'));
"
```

Або підключити Formspree / Netlify Forms / Tally — будь-який no-code сервіс.

---

## Як перевірити сайт локально

Файли працюють як статичні HTML — просто:

```bash
cd europeservice
python3 -m http.server 8000
# Відкрити http://localhost:8000
```

Або через VS Code Live Server extension. Жодного білду не потрібно.

---

## Деплой

Підходить будь-який статичний хостинг:

- **Cloudflare Pages** (рекомендовано — швидкий, безкоштовний, з CDN)
- **Netlify** (drag-and-drop папки)
- **Vercel**
- **GitHub Pages**

Для домену типу `hrandrecruit.co.uk` — налаштовуєте DNS на провайдера хостингу. Завжди вмикайте HTTPS (зазвичай безкоштовно через Let's Encrypt).

---

## Перед запуском обов'язково замінити

- [ ] Контактні дані (email, телефон) в `js/main.js → SITE`
- [ ] Месенджери (Telegram, WhatsApp, Viber) в `js/main.js → renderMessengerFab`
- [ ] Демо-вакансії в `data/site.js → VACANCIES` на реальні
- [ ] Демо-фото (placehold.co) на реальні в усіх вакансіях
- [ ] Фото у кейсах (`window.CASES`)
- [ ] Підключити форму заявки до бекенду/Formspree
- [ ] Підключити Stripe Payment Links
- [ ] Налаштувати email для Stripe-нотифікацій
- [ ] Перевірити політики (privacy, cookies, оферта) з юристом
- [ ] Додати Google Analytics або Plausible (за бажанням)
- [ ] Налаштувати OG-теги для Facebook/Telegram preview (наразі базові)
- [ ] Додати реальні фото в директорію `images/`

---

## Контакти технічної підтримки сайту

Розробка та архітектура: внутрішня команда HR & Recruit.

Питання щодо контенту — Anna.
