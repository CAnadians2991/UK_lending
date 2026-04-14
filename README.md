# HR & Recruit — Landing Page · Сезон 2026

## Структура файлов

```
/
├── index.html          ← Главная страница (открыть в браузере)
├── assets/
│   └── farm-hero.jpg  ← Фото для фона главного блока
└── README.md
```

## Деплой (куда залить)

### Netlify (бесплатно, проще всего)
1. Зайти на netlify.com → Create new site
2. Перетащить папку в браузер → готово
3. Получить ссылку вида `https://random-name.netlify.app`

### Vercel (бесплатно)
1. vercel.com → Add New → Upload
2. Загрузить папку

### GitHub Pages (бесплатно)
1. Создать репозиторий на github.com
2. Загрузить все файлы в корень
3. Settings → Pages → Source: main branch

### Собственный хостинг (FTP)
1. Подключиться по FTP
2. Загрузить все файлы в public_html или www
3. Убедиться что index.html в корне

## После деплоя нужно заменить:

1. **Видео** — найти в index.html комментарий `ВСТАВЬТЕ ВИДЕО` и вставить:
   ```html
   <iframe src="https://www.youtube.com/embed/ВАШ_ID" 
     style="width:100%;height:100%;border:none" allowfullscreen></iframe>
   ```

2. **Facebook Pixel** — раскомментировать в конце файла:
   ```js
   if(typeof fbq!=='undefined') fbq('track','Lead');
   ```

3. **Google Ads** — раскомментировать:
   ```js
   gtag('event','conversion',{send_to:'AW-XXXXX/XXXXX'});
   ```

4. **Canonical URL** — заменить в <head>:
   ```html
   <link rel="canonical" href="https://ВАШ-ДОМЕН.com/">
   ```

5. **Фото в отзывах** — заменить инициал на img:
   ```html
   <div class="t-photo"><img src="фото.jpg" alt="Имя"></div>
   ```

6. **OG Image** — заменить `farm-hero.jpg` на полный URL для соцсетей:
   ```html
   <meta property="og:image" content="https://ВАШ-ДОМЕН.com/assets/farm-hero.jpg">
   ```

## Техническая информация
- Один HTML файл + одно изображение
- Шрифты: Google Fonts (Playfair Display + DM Sans)
- Нет зависимостей от npm, Node.js, сборщиков
- Работает на любом статическом хостинге
