/* ============================================
   HR & Recruit — Master data
   Vacancies / FAQ / Cases
   All vacancy content is DEMO — replace before launch
   ============================================ */

window.VACANCIES = [
  /* ============ UNITED KINGDOM ============ */
  {
    id: "uk-mushroom-picker",
    country: "uk",
    countryName: "Великобритания",
    city: "Норфолк, Англия",
    title: "Сборщик шампиньонов",
    type: "Сезонная виза",
    contract: "6 месяцев",
    start: "Май 2026",
    rate: 2100,
    rateMeta: "нетто/мес",
    hours: "48 ч/нед",
    overtime: "оплачивается ×1.5",
    accommodation: "Общежитие на ферме, €60/нед удержание",
    img: "https://placehold.co/1200x800/1B3A2F/F5F1E8?text=Mushroom+Farm+UK&font=lato",
    gallery: [
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Mushroom+Farm+Inside",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Working+Area",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Packing+Line",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Farm+Exterior"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Dorm+Room+2pp",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Shared+Kitchen",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Bathroom",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Common+Area"
    ],
    summary: "Современная ферма по выращиванию шампиньонов на востоке Англии. Закрытые отапливаемые помещения, работа круглый год, стабильный график. Один из крупнейших поставщиков сетей Tesco и Sainsbury's.",
    duties: [
      "Сбор зрелых шампиньонов на стеллажных грядках по нормативу качества",
      "Сортировка и первичная упаковка в лотки для торговых сетей",
      "Соблюдение санитарных норм фермы (HACCP-стандарт)",
      "Работа в команде из 4–6 человек на смену",
      "Поддержание чистоты рабочей зоны"
    ],
    requirements: [
      "Возраст 21–55 лет",
      "Готовность к физической работе стоя",
      "Загранпаспорт со сроком действия минимум 18 мес",
      "Отсутствие судимостей (police check)",
      "Базовый английский — приветствуется, но не обязателен"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Общежитие на ферме, удержание €60/нед" },
      { icon: "doc",    label: "Контракт",       value: "Прямой с фермой по UK Seasonal Worker route" },
      { icon: "shield", label: "Страховка",      value: "Медицинская и от несчастных случаев" },
      { icon: "plane",  label: "Трансфер",       value: "Аэропорт → ферма от ваших координаторов" },
      { icon: "money",  label: "Оплата",         value: "Еженедельная, на UK bank account" },
      { icon: "back",   label: "Возврат",        value: "При успешной отработке — компенсация перелёта" }
    ]
  },
  {
    id: "uk-veg-packer",
    country: "uk",
    countryName: "Великобритания",
    city: "Линкольншир, Англия",
    title: "Упаковщик овощей",
    type: "Сезонная виза",
    contract: "5 месяцев",
    start: "Апрель 2026",
    rate: 1950,
    rateMeta: "нетто/мес",
    hours: "45 ч/нед",
    overtime: "оплачивается ×1.5",
    accommodation: "Караваны на территории, €55/нед",
    img: "https://placehold.co/1200x800/244A3D/F5F1E8?text=Veg+Packing+UK",
    gallery: [
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Packing+Line",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Warehouse",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Quality+Check",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Loading+Area"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Caravan+Outside",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Caravan+Inside",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Shared+Shower",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Laundry+Room"
    ],
    summary: "Линия упаковки моркови, лука и капусты для сетей Asda и Morrisons. Закрытое тёплое помещение, конвейерная работа в спокойном темпе. Стабильный сезон апрель–август.",
    duties: [
      "Контроль овощей на линии (брак, мусор, посторонние предметы)",
      "Упаковка в пакеты и сетки разного веса",
      "Маркировка готовой продукции",
      "Поддержание стандартов гигиены",
      "Помощь в подготовке смены"
    ],
    requirements: [
      "Возраст 19–58 лет",
      "Готовность к стоячей работе",
      "Загранпаспорт, действующий 18+ мес",
      "Police check (мы помогаем оформить)",
      "Базовая физическая выносливость"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Караваны, €55/нед удержание" },
      { icon: "doc",    label: "Контракт",       value: "Direct contract под Seasonal Worker visa" },
      { icon: "shield", label: "Страховка",      value: "Включена" },
      { icon: "plane",  label: "Трансфер",       value: "Из Бирмингема/Лондона до фермы" },
      { icon: "money",  label: "Оплата",         value: "Weekly payroll" },
      { icon: "wifi",   label: "Wi-Fi",          value: "Бесплатный на территории" }
    ]
  },
  {
    id: "uk-greenhouse",
    country: "uk",
    countryName: "Великобритания",
    city: "Кент, Англия",
    title: "Работник тепличного комплекса",
    type: "Сезонная виза",
    contract: "6 месяцев",
    start: "Март 2026",
    rate: 2200,
    rateMeta: "нетто/мес",
    hours: "48 ч/нед",
    overtime: "оплачивается ×1.5",
    accommodation: "Общежитие 2-местное, €65/нед",
    img: "https://placehold.co/1200x800/2D6A4F/F5F1E8?text=UK+Greenhouse",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Tomato+Greenhouse",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Plant+Care",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Harvest",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Sorting+Area"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Dorm+Building",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Bedroom+2pp",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Garden"
    ],
    summary: "Современные гидропонные теплицы по выращиванию томатов на 12 гектарах. Самая высокая ставка по UK-направлению. Климат-контроль круглый год, чисто, тепло.",
    duties: [
      "Уход за плодоносящими растениями (подвязка, обрезка)",
      "Сбор томатов разных сортов",
      "Сортировка по калибру и качеству",
      "Контроль системы капельного полива",
      "Работа в составе бригады по 8 человек"
    ],
    requirements: [
      "Возраст 21–55 лет",
      "Внимательность, аккуратность",
      "Загранпаспорт 18+ мес",
      "Police check",
      "Опыт в сельском хозяйстве — преимущество"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "2-местные комнаты, €65/нед" },
      { icon: "doc",    label: "Контракт",       value: "UK Seasonal Worker visa, sponsor — ферма" },
      { icon: "shield", label: "Страховка",      value: "Полная" },
      { icon: "plane",  label: "Трансфер",       value: "Лондон-Гэтвик → ферма" },
      { icon: "money",  label: "Оплата",         value: "Еженедельно, банк UK" },
      { icon: "food",   label: "Питание",        value: "Кухня для самостоятельной готовки, продукты — самостоятельно" }
    ]
  },
  {
    id: "uk-berry-picker",
    country: "uk",
    countryName: "Великобритания",
    city: "Херефордшир, Англия",
    title: "Сборщик ягод (клубника, малина)",
    type: "Сезонная виза",
    contract: "4 месяца",
    start: "Май 2026",
    rate: 1900,
    rateMeta: "нетто/мес",
    hours: "50 ч/нед",
    overtime: "пиковые недели — оплата выше",
    accommodation: "Караваны на ферме, €50/нед",
    img: "https://placehold.co/1200x800/1B3A2F/F5F1E8?text=Berry+Farm+UK",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Strawberry+Field",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Picking+Process",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Sorting",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Farm+Overview"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Caravan+Park",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Inside+Caravan",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Communal+Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Free+Time+Area"
    ],
    summary: "Семейная ягодная ферма, поставщик M&S и Waitrose. Возможность увеличения зарплаты при высокой производительности — топ-сборщики получают до €2400.",
    duties: [
      "Ручной сбор клубники и малины с тоннелей",
      "Калибровка и упаковка прямо в поле",
      "Поддержание чистоты тоннелей",
      "Соблюдение норм по весу и качеству на смену",
      "Работа сменами в зависимости от погоды"
    ],
    requirements: [
      "Возраст 19–55 лет",
      "Хорошая физическая форма",
      "Готовность к работе на открытом воздухе",
      "Загранпаспорт 18+ мес",
      "Police check"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Караваны 2–4 чел, €50/нед" },
      { icon: "doc",    label: "Контракт",       value: "Seasonal Worker UK" },
      { icon: "shield", label: "Страховка",      value: "От несчастных случаев" },
      { icon: "plane",  label: "Трансфер",       value: "Из аэропорта до фермы" },
      { icon: "money",  label: "Оплата",         value: "Weekly + bonus за производительность" },
      { icon: "back",   label: "Возможность",    value: "Перевод на упаковку зимой" }
    ]
  },

  /* ============ GERMANY ============ */
  {
    id: "de-warehouse",
    country: "germany",
    countryName: "Германия",
    city: "Лейпциг, Саксония",
    title: "Оператор склада e-commerce",
    type: "Leiharbeit / Zeitarbeit",
    contract: "12 месяцев + продление",
    start: "Февраль 2026",
    rate: 2100,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "оплачивается ×1.25, выходные ×1.5",
    accommodation: "Wohnheim, €280/мес удержание",
    img: "https://placehold.co/1200x800/244A3D/F5F1E8?text=Leipzig+Warehouse",
    gallery: [
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Warehouse+Aisles",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Picking+Station",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Conveyor",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Loading+Dock"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Wohnheim+Outside",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Single+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Shared+Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Bathroom"
    ],
    summary: "Распределительный центр крупной немецкой e-commerce компании. Современное автоматизированное оборудование, чистые отапливаемые залы. Возможность долгосрочного контракта.",
    duties: [
      "Комплектация заказов по системе pick-by-light",
      "Упаковка товаров в фирменные коробки",
      "Маркировка отправлений",
      "Перемещение паллет с электропогрузчиком (обучаем)",
      "Сменная работа: 06–14, 14–22"
    ],
    requirements: [
      "Возраст 19–60 лет",
      "Готовность к сменам",
      "Загранпаспорт, действующий 24+ мес",
      "Базовый немецкий A1 — приветствуется",
      "Опыт на складе — преимущество"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Wohnheim, 1-местные комнаты" },
      { icon: "doc",    label: "Контракт",       value: "Arbeitsvertrag по AÜG" },
      { icon: "shield", label: "Страховка",      value: "Krankenversicherung (TK)" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно на немецкий счёт (помогаем открыть)" },
      { icon: "doc",    label: "Документы",      value: "Anmeldung и Steuer-ID — помощь от менеджера" },
      { icon: "back",   label: "Перспектива",    value: "Перевод в штат после 6 мес" }
    ]
  },
  {
    id: "de-auto-parts",
    country: "germany",
    countryName: "Германия",
    city: "Ингольштадт, Бавария",
    title: "Сборщик автокомплектующих",
    type: "Leiharbeit",
    contract: "9 месяцев + продление",
    start: "Январь 2026",
    rate: 2050,
    rateMeta: "нетто/мес",
    hours: "37.5 ч/нед",
    overtime: "оплачивается отдельно",
    accommodation: "Корпоративное жильё, €310/мес",
    img: "https://placehold.co/1200x800/1B3A2F/F5F1E8?text=Auto+Assembly+DE",
    gallery: [
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Assembly+Line",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Workstation",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Components",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Production+Floor"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Apartment+Block",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Twin+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Living+Room"
    ],
    summary: "Поставщик автокомплектующих 1-го уровня для премиум-марок. Конвейерная сборка световых блоков и электроники. Чистая производственная зона, отопление, форма выдаётся.",
    duties: [
      "Сборка узлов на станции конвейера",
      "Визуальный контроль качества",
      "Маркировка готовых компонентов",
      "Соблюдение норм такта линии (~90 сек/деталь)",
      "Работа в 2 смены: 06–14, 14–22"
    ],
    requirements: [
      "Возраст 19–55 лет",
      "Хорошая мелкая моторика",
      "Загранпаспорт 24+ мес",
      "Готовность к сменной работе",
      "Без хронических заболеваний рук/спины"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Корпоративные квартиры, 2-местные" },
      { icon: "doc",    label: "Контракт",       value: "AÜG-сертифицированный работодатель" },
      { icon: "shield", label: "Страховка",      value: "Полная по немецкому стандарту" },
      { icon: "money",  label: "Оплата",         value: "30-го числа на банковский счёт" },
      { icon: "food",   label: "Питание",        value: "Канцерн (кантина) дотируется работодателем" },
      { icon: "doc",    label: "Документы",      value: "Anmeldung помогаем оформить" }
    ]
  },
  {
    id: "de-asparagus",
    country: "germany",
    countryName: "Германия",
    city: "Нижняя Саксония",
    title: "Сборщик спаржи и клубники (сезон)",
    type: "Saisonarbeit",
    contract: "70–90 дней",
    start: "Апрель 2026",
    rate: 1850,
    rateMeta: "нетто за период",
    hours: "8–10 ч/день, 6 дней/нед",
    overtime: "штучная оплата возможна",
    accommodation: "Общежитие фермы, €8/день",
    img: "https://placehold.co/1200x800/2D6A4F/F5F1E8?text=Asparagus+Field+DE",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Asparagus+Field",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Harvest+Tool",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Strawberry+Tunnels",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Packing+Shed"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Farm+Dorm",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Room+4pp",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Communal+Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Outside+Area"
    ],
    summary: "Сезон спаржи (Spargel) и клубники в Германии — короткий, интенсивный, оплачиваемый штучно или по часам. Лучший вариант для тех, кто хочет заработать за 2–3 месяца и вернуться.",
    duties: [
      "Сбор спаржи специальным ножом из-под земли",
      "Сбор клубники в тоннелях",
      "Сортировка и взвешивание",
      "Работа от рассвета (5–6 утра)",
      "Соблюдение норм по килограммам на смену"
    ],
    requirements: [
      "Возраст 19–55 лет",
      "Готовность к физической работе и ранним подъёмам",
      "Загранпаспорт 12+ мес",
      "Базовая выносливость",
      "Желателен опыт в сельском хозяйстве"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "На территории фермы, €8/день" },
      { icon: "doc",    label: "Контракт",       value: "Сезонный по 70-90-day rule" },
      { icon: "shield", label: "Страховка",      value: "Несчастный случай + базовая мед" },
      { icon: "money",  label: "Оплата",         value: "Конец сезона + авансы по запросу" },
      { icon: "food",   label: "Питание",        value: "Завтрак включён" },
      { icon: "plane",  label: "Трансфер",       value: "От аэропорта до фермы организован" }
    ]
  },
  {
    id: "de-food-prod",
    country: "germany",
    countryName: "Германия",
    city: "Бремен",
    title: "Оператор пищевого производства",
    type: "Leiharbeit",
    contract: "12 месяцев",
    start: "Февраль 2026",
    rate: 2000,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "×1.25",
    accommodation: "Wohnheim, €270/мес",
    img: "https://placehold.co/1200x800/244A3D/F5F1E8?text=Food+Production+DE",
    gallery: [
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Production+Hall",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Packaging+Line",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Quality+Control",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Warehouse"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Wohnheim",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Bedroom",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Hallway"
    ],
    summary: "Производство замороженных полуфабрикатов и готовых блюд для немецких супермаркетов. Современный цех с HACCP, чистая работа в комфортной температуре +12°C.",
    duties: [
      "Работа на линии упаковки и фасовки",
      "Контроль веса и качества",
      "Маркировка продукции",
      "Соблюдение санитарных норм (HACCP)",
      "Сменная работа: утро, день, вечер"
    ],
    requirements: [
      "Возраст 19–55 лет",
      "Готовность к работе в прохладе (+10–12°C)",
      "Загранпаспорт 24+ мес",
      "Без аллергии на пищевые продукты",
      "Базовый немецкий A1 — желательно"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Wohnheim, 1–2 чел в комнате" },
      { icon: "doc",    label: "Контракт",       value: "По AÜG" },
      { icon: "shield", label: "Страховка",      value: "Krankenversicherung" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно" },
      { icon: "food",   label: "Питание",        value: "Кантина дотируется" },
      { icon: "doc",    label: "Помощь",         value: "Открытие счёта, Anmeldung, Steuer-ID" }
    ]
  },

  /* ============ NETHERLANDS ============ */
  {
    id: "nl-greenhouse",
    country: "netherlands",
    countryName: "Нидерланды",
    city: "Вестланд",
    title: "Оператор тепличного комплекса",
    type: "Uitzendcontract (Phase A)",
    contract: "12 месяцев + продление",
    start: "Февраль 2026",
    rate: 2200,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "оплачивается отдельно",
    accommodation: "Корпоративное жильё, €115/нед",
    img: "https://placehold.co/1200x800/2D6A4F/F5F1E8?text=NL+Greenhouse",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Tomato+Vines",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Picking+Cart",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Greenhouse+Interior",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Sorting"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=House+Outside",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Twin+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Living+Area"
    ],
    summary: "«Стеклянный город» Вестланд — самый большой тепличный регион мира. Современные роботизированные комплексы по томатам, перцам, огурцам. Высокая ставка по голландскому стандарту.",
    duties: [
      "Сбор томатов/перцев с роботизированных платформ",
      "Подвязка, обрезка лишних побегов",
      "Сортировка по размеру и цвету",
      "Контроль системы полива и подкормки (обучаем)",
      "Работа 8 часов в комфортном микроклимате"
    ],
    requirements: [
      "Возраст 19–58 лет",
      "Аккуратность, внимательность",
      "Загранпаспорт 24+ мес",
      "BSN — мы помогаем оформить",
      "Английский A1 — желательно"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Дома на 4–6 человек, €115/нед" },
      { icon: "doc",    label: "Контракт",       value: "Phase A Uitzendcontract (WAADI)" },
      { icon: "shield", label: "Страховка",      value: "Zorgverzekering" },
      { icon: "money",  label: "Оплата",         value: "Еженедельно на банковский счёт" },
      { icon: "doc",    label: "Помощь",         value: "BSN, банк, страховка — координатор" },
      { icon: "plane",  label: "Трансфер",       value: "Аэропорт Схипхол → жильё" }
    ]
  },
  {
    id: "nl-flowers",
    country: "netherlands",
    countryName: "Нидерланды",
    city: "Алсмеер",
    title: "Упаковщик цветов",
    type: "Uitzendcontract",
    contract: "12 месяцев",
    start: "Январь 2026",
    rate: 2100,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "×1.35",
    accommodation: "Дома на 4–5 чел, €110/нед",
    img: "https://placehold.co/1200x800/1B3A2F/F5F1E8?text=Flower+Packing+NL",
    gallery: [
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Flower+Auction",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Bouquet+Line",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Cooled+Room",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Sorting+Roses"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Worker+House",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Bedroom",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Communal+Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Backyard"
    ],
    summary: "Алсмеер — крупнейший в мире цветочный аукцион. Современные цеха по сборке букетов для экспорта в Великобританию, США, ЕС. Чистая, эстетичная работа в команде.",
    duties: [
      "Сортировка цветов по сорту и качеству",
      "Сборка букетов по шаблонам клиентов",
      "Упаковка в фирменные обёртки",
      "Маркировка для экспорта",
      "Работа в прохладном помещении (+8°C)"
    ],
    requirements: [
      "Возраст 19–55 лет",
      "Аккуратность, эстетический вкус",
      "Загранпаспорт 24+ мес",
      "Готовность к работе в прохладе",
      "Без аллергии на цветочную пыльцу"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Дома 4–5 чел, €110/нед" },
      { icon: "doc",    label: "Контракт",       value: "Phase A" },
      { icon: "shield", label: "Страховка",      value: "Полная" },
      { icon: "money",  label: "Оплата",         value: "Weekly" },
      { icon: "doc",    label: "Помощь",         value: "BSN + банковский счёт" },
      { icon: "plane",  label: "Трансфер",       value: "Включён" }
    ]
  },
  {
    id: "nl-meat",
    country: "netherlands",
    countryName: "Нидерланды",
    city: "Бокстел",
    title: "Оператор мясного производства",
    type: "Uitzendcontract Phase A",
    contract: "12 месяцев",
    start: "Февраль 2026",
    rate: 2200,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "×1.35",
    accommodation: "Корпоративное жильё, €105/нед",
    img: "https://placehold.co/1200x800/244A3D/F5F1E8?text=Meat+Production+NL",
    gallery: [
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Production+Line",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Cold+Storage",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Packing+Area",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Quality+Control"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Housing+Complex",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Twin+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Garden"
    ],
    summary: "Современное мясокомбинатное производство, поставщик Albert Heijn и Jumbo. Не разделка туш, а упаковка готовой продукции в потребительские лотки. Чисто, +6°C, форма выдаётся.",
    duties: [
      "Упаковка нарезок и фарша в потребительские лотки",
      "Маркировка и взвешивание",
      "Контроль герметичности упаковки",
      "Соблюдение HACCP-стандартов",
      "Сменная работа 06–14, 14–22"
    ],
    requirements: [
      "Возраст 19–55 лет",
      "Готовность к работе в прохладе и со специфическим запахом",
      "Загранпаспорт 24+ мес",
      "Базовая физическая выносливость",
      "Без аллергии"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Корпоративные дома, 2-местные" },
      { icon: "doc",    label: "Контракт",       value: "Phase A по WAADI" },
      { icon: "shield", label: "Страховка",      value: "Zorgverzekering" },
      { icon: "money",  label: "Оплата",         value: "Weekly" },
      { icon: "food",   label: "Спецодежда",     value: "Включена" },
      { icon: "doc",    label: "Документы",      value: "BSN, банк — координатор" }
    ]
  },
  {
    id: "nl-logistics",
    country: "netherlands",
    countryName: "Нидерланды",
    city: "Венло",
    title: "Сборщик заказов на складе DHL",
    type: "Uitzendcontract",
    contract: "12 месяцев",
    start: "Январь 2026",
    rate: 2100,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "×1.35",
    accommodation: "Корпоративное, €110/нед",
    img: "https://placehold.co/1200x800/2D6A4F/F5F1E8?text=DHL+Venlo",
    gallery: [
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Warehouse+Aisles",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Pick+by+Voice",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Conveyor+System",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Loading+Dock"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=House+Front",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Bedroom",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Lounge"
    ],
    summary: "Крупный логистический хаб DHL в Венло — обработка интернет-заказов для всего Бенилюкса. Современная складская техника, технологии Pick-by-Voice.",
    duties: [
      "Сборка заказов с помощью голосовой системы",
      "Упаковка в фирменные коробки DHL",
      "Сканирование штрих-кодов",
      "Перемещение паллет (после обучения)",
      "Дневные и вечерние смены"
    ],
    requirements: [
      "Возраст 19–55 лет",
      "Хорошая ориентация в пространстве",
      "Загранпаспорт 24+ мес",
      "Базовый английский A1",
      "Готовность к ходьбе 8 ч"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Дома 4–5 человек, €110/нед" },
      { icon: "doc",    label: "Контракт",       value: "Phase A" },
      { icon: "shield", label: "Страховка",      value: "Полная" },
      { icon: "money",  label: "Оплата",         value: "Еженедельно" },
      { icon: "doc",    label: "Помощь",         value: "BSN, банк, страховка" },
      { icon: "plane",  label: "Трансфер",       value: "Из Дюссельдорфа/Схипхол" }
    ]
  },

  /* ============ GREECE — HOTELS ============ */
  {
    id: "gr-housekeeper-crete",
    country: "greece",
    countryName: "Греция",
    city: "Крит, Херсониссос",
    title: "Горничная в отеле 5★ All-Inclusive",
    type: "Сезонный контракт (Σύμβαση ορισμένου χρόνου)",
    contract: "6 месяцев",
    start: "Апрель 2026",
    rate: 1900,
    rateMeta: "нетто/мес + чаевые",
    hours: "40 ч/нед, 5 дней",
    overtime: "оплачивается ×1.25",
    accommodation: "Бесплатное на территории отеля",
    img: "https://placehold.co/1200x800/2D6A4F/F5F1E8?text=Crete+Hotel+5",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Hotel+Exterior",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Hotel+Room",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Pool+Area",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Lobby"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+Building",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Twin+Staff+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Staff+Bathroom",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Staff+Canteen"
    ],
    summary: "5-звёздочный отель сети с международным брендом, 600 номеров. Сезон апрель–октябрь. Питание 3 раза в день и проживание — бесплатно. Реальная экономия €400–500/мес.",
    duties: [
      "Уборка 14–16 номеров за смену по стандарту 5★",
      "Замена белья и полотенец",
      "Пополнение мини-бара и amenities",
      "Доклад о повреждениях супервайзеру",
      "Соблюдение тайминга чек-аут / чек-ин"
    ],
    requirements: [
      "Возраст 21–55 лет",
      "Аккуратность, внимание к деталям",
      "Загранпаспорт 18+ мес",
      "Опыт работы горничной — желателен (можно без него)",
      "Английский A1 — приветствуется"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Бесплатное на территории отеля" },
      { icon: "food",   label: "Питание",        value: "3 раза в день, бесплатно" },
      { icon: "doc",    label: "Контракт",       value: "Прямой с отелем по греческому ТК" },
      { icon: "shield", label: "Страховка",      value: "ΙΚΑ (греческое соцстрах.)" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно + чаевые отдельно" },
      { icon: "plane",  label: "Трансфер",       value: "Аэропорт Ираклион → отель" }
    ]
  },
  {
    id: "gr-waiter-rhodes",
    country: "greece",
    countryName: "Греция",
    city: "Родос, Фалираки",
    title: "Помощник официанта (busser) в отеле 4★",
    type: "Сезонный контракт",
    contract: "5 месяцев",
    start: "Май 2026",
    rate: 1850,
    rateMeta: "нетто/мес + чаевые",
    hours: "40 ч/нед, 5 дней",
    overtime: "×1.25",
    accommodation: "Бесплатное на территории",
    img: "https://placehold.co/1200x800/1B3A2F/F5F1E8?text=Rhodes+Hotel",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Restaurant",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Pool+Bar",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Beach+Front",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Buffet+Area"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+House",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Twin+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Shared+Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Outdoor+Area"
    ],
    summary: "Семейный 4★ отель с прямым выходом к морю. Работа в буфете и à-la-carte ресторане. Хорошая команда, дружелюбный коллектив, реальные чаевые €100–250/мес сверх ставки.",
    duties: [
      "Сервировка и уборка столов",
      "Помощь официантам в обслуживании гостей",
      "Пополнение буфетных линий",
      "Чистка зоны после сервиса",
      "Подготовка следующей смены"
    ],
    requirements: [
      "Возраст 19–45 лет",
      "Опрятный внешний вид",
      "Загранпаспорт 18+ мес",
      "Базовый английский A1+ (важно для общения с гостями)",
      "Опыт в HoReCa — преимущество"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Бесплатное" },
      { icon: "food",   label: "Питание",        value: "3 раза в день" },
      { icon: "doc",    label: "Контракт",       value: "Прямой по ТК Греции" },
      { icon: "shield", label: "Страховка",      value: "ΙΚΑ" },
      { icon: "money",  label: "Оплата",         value: "Ставка + чаевые" },
      { icon: "plane",  label: "Трансфер",       value: "Аэропорт → отель" }
    ]
  },
  {
    id: "gr-kitchen-santorini",
    country: "greece",
    countryName: "Греция",
    city: "Санторини, Фира",
    title: "Помощник на кухне (kitchen porter)",
    type: "Сезонный контракт",
    contract: "6 месяцев",
    start: "Апрель 2026",
    rate: 2000,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "×1.25",
    accommodation: "Бесплатное",
    img: "https://placehold.co/1200x800/244A3D/F5F1E8?text=Santorini+Hotel",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Kitchen+Pro",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Prep+Area",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Dish+Wash",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Hotel+View"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+Quarters",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Room+2pp",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Bathroom",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Common+Area"
    ],
    summary: "Бутик-отель на калдере Санторини, 80 номеров премиум-класса. Самые высокие ставки по Греции из-за дороговизны региона. Не разделка туш и не кухонная подготовка — мытьё, поддержание чистоты, помощь шефам.",
    duties: [
      "Мытьё кухонной утвари и посуды",
      "Поддержание чистоты рабочих зон",
      "Помощь шефам в первичной подготовке (нарезка)",
      "Вынос мусора, поддержание санитарии",
      "Работа в команде из 8–10 человек"
    ],
    requirements: [
      "Возраст 21–50 лет",
      "Физическая выносливость",
      "Загранпаспорт 18+ мес",
      "Стрессоустойчивость в пиковые часы",
      "Без серьёзных заболеваний опорно-двигательного"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Бесплатное в персонал-доме" },
      { icon: "food",   label: "Питание",        value: "Бесплатное, 3 раза" },
      { icon: "doc",    label: "Контракт",       value: "Прямой с отелем" },
      { icon: "shield", label: "Страховка",      value: "ΙΚΑ" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно" },
      { icon: "plane",  label: "Трансфер",       value: "Аэропорт/порт → отель" }
    ]
  },
  {
    id: "gr-receptionist-kos",
    country: "greece",
    countryName: "Греция",
    city: "Кос",
    title: "Reception assistant в отеле 4★",
    type: "Сезонный контракт",
    contract: "6 месяцев",
    start: "Апрель 2026",
    rate: 1900,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед, сменно",
    overtime: "×1.25",
    accommodation: "Бесплатное",
    img: "https://placehold.co/1200x800/2D6A4F/F5F1E8?text=Kos+Reception",
    gallery: [
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Reception+Lobby",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Hotel+Pool",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Beach",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Hotel+Lounge"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+Apartment",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Single+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Terrace"
    ],
    summary: "Помощник на ресепшен в 4★ all-inclusive отеле. Для русско/украиноязычных кандидатов — приоритет: 40% гостей из стран СНГ, нужен живой коммуникатор. Английский — обязательно.",
    duties: [
      "Приём гостей и помощь с заселением",
      "Информирование о услугах отеля",
      "Помощь с переводом (RU↔EN)",
      "Обработка простых запросов",
      "Поддержка чистоты ресепшен-зоны"
    ],
    requirements: [
      "Возраст 21–40 лет",
      "Английский B1 — обязательно",
      "Опрятный внешний вид",
      "Коммуникабельность",
      "Опыт в гостиничном сервисе — преимущество"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Бесплатное, отдельный staff-комплекс" },
      { icon: "food",   label: "Питание",        value: "3 раза в день" },
      { icon: "doc",    label: "Контракт",       value: "Прямой по ТК" },
      { icon: "shield", label: "Страховка",      value: "ΙΚΑ" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно" },
      { icon: "plane",  label: "Трансфер",       value: "Аэропорт Кос → отель" }
    ]
  },

  /* ============ ITALY — HOTELS ============ */
  {
    id: "it-housekeeper-rimini",
    country: "italy",
    countryName: "Италия",
    city: "Римини, Эмилия-Романья",
    title: "Cameriera ai piani (горничная) в отеле 4★",
    type: "Stagionale (сезонный)",
    contract: "5 месяцев",
    start: "Май 2026",
    rate: 1850,
    rateMeta: "нетто/мес + чаевые",
    hours: "40 ч/нед",
    overtime: "оплачивается отдельно",
    accommodation: "Бесплатное на территории",
    img: "https://placehold.co/1200x800/244A3D/F5F1E8?text=Rimini+Hotel",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Hotel+Front",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Hotel+Room",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Reception",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Beach+View"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+House",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Bedroom+2pp",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Common+Area"
    ],
    summary: "Семейный 4★ отель на адриатическом побережье. Высокий сезон май–сентябрь. Стабильные итальянские чаевые, прямой контракт по итальянскому ТК (CCNL Turismo).",
    duties: [
      "Уборка 14–16 номеров за смену",
      "Замена белья и полотенец",
      "Пополнение amenities",
      "Доклад о повреждениях governante (старшей горничной)",
      "Подготовка номеров к заселению"
    ],
    requirements: [
      "Возраст 21–55 лет",
      "Опрятность, ответственность",
      "Загранпаспорт 18+ мес",
      "Опыт горничной — желателен",
      "Базовый итальянский/английский — плюс"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Бесплатное в персонал-блоке" },
      { icon: "food",   label: "Питание",        value: "2–3 раза в день" },
      { icon: "doc",    label: "Контракт",       value: "Stagionale по CCNL Turismo" },
      { icon: "shield", label: "Страховка",      value: "INPS + INAIL" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно + chiusura conguaglio в конце" },
      { icon: "plane",  label: "Трансфер",       value: "Болонья/Римини → отель" }
    ]
  },
  {
    id: "it-waiter-tuscany",
    country: "italy",
    countryName: "Италия",
    city: "Тоскана, Гроссето",
    title: "Cameriere di sala (официант) в семейном агрит­уризме",
    type: "Stagionale",
    contract: "6 месяцев",
    start: "Апрель 2026",
    rate: 2050,
    rateMeta: "нетто/мес + чаевые",
    hours: "40 ч/нед",
    overtime: "×1.3",
    accommodation: "Бесплатное на агроусадьбе",
    img: "https://placehold.co/1200x800/2D6A4F/F5F1E8?text=Tuscany+Agriturismo",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Vineyard+View",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Outdoor+Dining",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Wine+Cellar",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Tuscan+Sunset"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+Cottage",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Bedroom",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Vineyard"
    ],
    summary: "Бутик-агритуризмо на 30 номеров в самом сердце Тосканы. Уровень обслуживания — высокий, гости преимущественно из США и Северной Европы. Высокие чаевые, потрясающая среда.",
    duties: [
      "Сервировка завтрака, обеда, ужина в à-la-carte режиме",
      "Приём заказов на английском",
      "Подача вин (после внутреннего обучения)",
      "Общение с гостями, рекомендации",
      "Уборка зала после смены"
    ],
    requirements: [
      "Возраст 21–40 лет",
      "Английский B1 обязательно, итальянский — плюс",
      "Опрятный внешний вид",
      "Опыт в HoReCa от 1 года",
      "Доброжелательность, инициативность"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Коттедж для персонала" },
      { icon: "food",   label: "Питание",        value: "3 раза в день, тосканская кухня" },
      { icon: "doc",    label: "Контракт",       value: "CCNL Turismo, stagionale" },
      { icon: "shield", label: "Страховка",      value: "INPS + INAIL" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно + значимые чаевые" },
      { icon: "plane",  label: "Трансфер",       value: "Рим/Пиза → агроусадьба" }
    ]
  },
  {
    id: "it-laundry-jesolo",
    country: "italy",
    countryName: "Италия",
    city: "Лидо-ди-Езоло, Венето",
    title: "Работник прачечной курортного комплекса",
    type: "Stagionale",
    contract: "5 месяцев",
    start: "Май 2026",
    rate: 1800,
    rateMeta: "нетто/мес",
    hours: "40 ч/нед",
    overtime: "×1.3",
    accommodation: "Бесплатное",
    img: "https://placehold.co/1200x800/1B3A2F/F5F1E8?text=Jesolo+Laundry",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Laundry+Floor",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Folding+Area",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Sorting",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Hotel+Group"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+Building",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Bedroom",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Bathroom",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Beach+Walk"
    ],
    summary: "Центральная прачечная, обслуживающая 12 отелей курорта. Работа с современным оборудованием, кондиционированное помещение. Подходит тем, кто не хочет работать с гостями напрямую.",
    duties: [
      "Сортировка белья по типу и степени загрязнения",
      "Загрузка стиральных и сушильных машин",
      "Глажка через каландр",
      "Сборка комплектов для отелей",
      "Сменная работа: 06–14, 14–22"
    ],
    requirements: [
      "Возраст 21–55 лет",
      "Готовность к жаркой среде летом",
      "Загранпаспорт 18+ мес",
      "Базовая физическая выносливость",
      "Без серьёзных кожных аллергий"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Бесплатное" },
      { icon: "food",   label: "Питание",        value: "2 раза в день" },
      { icon: "doc",    label: "Контракт",       value: "Stagionale по CCNL" },
      { icon: "shield", label: "Страховка",      value: "INPS + INAIL" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно" },
      { icon: "plane",  label: "Трансфер",       value: "Венеция → курорт" }
    ]
  },
  {
    id: "it-kitchen-amalfi",
    country: "italy",
    countryName: "Италия",
    city: "Амальфи, Кампания",
    title: "Aiuto cuoco / commis di cucina в отеле 5★",
    type: "Stagionale",
    contract: "7 месяцев",
    start: "Март 2026",
    rate: 2050,
    rateMeta: "нетто/мес + чаевые",
    hours: "40 ч/нед",
    overtime: "×1.3",
    accommodation: "Бесплатное",
    img: "https://placehold.co/1200x800/244A3D/F5F1E8?text=Amalfi+Hotel",
    gallery: [
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Amalfi+Coast",
      "https://placehold.co/800x600/1B3A2F/F5F1E8?text=Pro+Kitchen",
      "https://placehold.co/800x600/244A3D/F5F1E8?text=Prep+Stations",
      "https://placehold.co/800x600/2D6A4F/F5F1E8?text=Hotel+Terrace"
    ],
    housing: [
      "https://placehold.co/800x600/8A877F/FFFFFF?text=Staff+House",
      "https://placehold.co/800x600/B8935A/FFFFFF?text=Twin+Room",
      "https://placehold.co/800x600/6B6B6B/FFFFFF?text=Shared+Kitchen",
      "https://placehold.co/800x600/4A4A47/FFFFFF?text=Sea+View"
    ],
    summary: "Помощник повара в кухне 5★ отеля с одной мишленовской звездой на Амальфитанском побережье. Возможность реального карьерного роста, рекомендации от итальянских шефов.",
    duties: [
      "Первичная подготовка продуктов (mise en place)",
      "Помощь шефам в простых заготовках",
      "Поддержание чистоты рабочих станций",
      "Контроль сроков годности",
      "Работа в команде из 14 человек"
    ],
    requirements: [
      "Возраст 21–40 лет",
      "Образование/опыт повара (даже базовый)",
      "Загранпаспорт 18+ мес",
      "Стрессоустойчивость",
      "Базовый итальянский — большой плюс"
    ],
    included: [
      { icon: "home",   label: "Проживание",     value: "Staff-дом отеля" },
      { icon: "food",   label: "Питание",        value: "3 раза в день, кухня отеля" },
      { icon: "doc",    label: "Контракт",       value: "Stagionale CCNL Turismo" },
      { icon: "shield", label: "Страховка",      value: "INPS + INAIL" },
      { icon: "money",  label: "Оплата",         value: "Ежемесячно + чаевые" },
      { icon: "back",   label: "Перспектива",    value: "Возможность возврата на следующий сезон" }
    ]
  }
];

/* ============ FAQ ============ */
window.FAQ = [
  {
    q: "За что именно я плачу?",
    a: "Вы платите за два конкретных сервиса: Document Service (подготовка пакета документов для выезда и легализации в стране) и Arrival & Coordination (встреча в аэропорту, трансфер, заселение, помощь с регистрацией). Подбор вакансии и собеседование с работодателем — бесплатно."
  },
  {
    q: "Что если меня не примут на работу?",
    a: "Если работодатель или консульство отказывают по причинам, не связанным с вашими действиями (например, изменение квот или форс-мажор работодателя) — мы возвращаем 100% стоимости услуги. Это прописано в нашей публичной оферте."
  },
  {
    q: "Что если я сам передумаю?",
    a: "Услуга считается оказанной в момент передачи вам готового пакета документов. Если после этого вы решите не выходить на работу — мы понимаем, что обстоятельства бывают разные, но возврат в этом случае не предусмотрен, так как вся работа с нашей стороны уже выполнена. Поэтому рекомендуем заранее быть уверенным в решении."
  },
  {
    q: "Безопасна ли оплата?",
    a: "Все платежи проходят через Stripe — глобальную платёжную систему, которая обслуживает Amazon, Google, Booking.com. Ваши карточные данные никогда не попадают на наш сервер. После оплаты вы получаете официальный чек на email."
  },
  {
    q: "Сколько времени готовятся документы?",
    a: "В среднем 2–6 недель в зависимости от страны. Великобритания — 4–6 недель (sponsor letter, biometric appointment). Германия и Нидерланды — 2–4 недели. Греция и Италия (сезонные контракты) — 3–5 недель."
  },
  {
    q: "Почему UK дороже, чем остальные направления?",
    a: "UK-направление требует расширенного пакета документов: Certificate of Sponsorship от работодателя, biometric appointment в визовом центре, дополнительные переводы и проверки в рамках UK Visa System. Объём работы больше — поэтому пакет стоит дороже."
  },
  {
    q: "Что входит в Arrival Service?",
    a: "Встреча в аэропорту, трансфер до места работы, заселение в общежитие, ориентация в первый день, помощь с покупкой SIM-карты, помощь с открытием банковского счёта и регистрацией (Anmeldung, BSN, NIN — в зависимости от страны), сопровождение к работодателю, экстренная связь 24/7 первые 14 дней после прибытия."
  },
  {
    q: "Можно ли оплатить пакеты раздельно?",
    a: "Да. Многие кандидаты сначала оплачивают только Document Service, получают визу/work permit, и только после этого — Arrival Service. Это совершенно нормально и часто выгоднее."
  }
];

/* ============ CASES ============ */
window.CASES = [
  {
    name: "Дмитрий, 34",
    role: "Сборщик шампиньонов, UK",
    quote: "Боялся ехать, потому что слышал истории про обман. Здесь всё было как обещали — встретили в Гэтвике, отвезли на ферму, показали комнату. Уже отработал 4 месяца, поеду снова в следующий сезон.",
    img: "https://placehold.co/600x800/2D6A4F/F5F1E8?text=Photo+placeholder",
    video: "[REAL VIDEO TO BE ADDED]"
  },
  {
    name: "Оксана, 41",
    role: "Горничная, отель 5★, Крит",
    quote: "Это был мой первый сезон в Греции. Всё было официально, контракт на руках, ИКА оформили. Жильё бесплатное, питание — три раза в день. За шесть месяцев скопила почти €10 000.",
    img: "https://placehold.co/600x800/B8935A/FFFFFF?text=Photo+placeholder",
    video: "[REAL VIDEO TO BE ADDED]"
  },
  {
    name: "Андрей, 29",
    role: "Оператор теплиц, Нидерланды",
    quote: "Самое важное было — что мне помогли с BSN и банковским счётом сразу по приезду. Без этого я бы три недели бегал по офисам. А так через 5 дней уже работал и получал зарплату на голландский счёт.",
    img: "https://placehold.co/600x800/244A3D/F5F1E8?text=Photo+placeholder",
    video: "[REAL VIDEO TO BE ADDED]"
  }
];
