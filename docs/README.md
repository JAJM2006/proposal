```
├── docs/
│   ├── content.md
│   ├── domains.md
│   ├── README.md
│   └── tech.md
├── public/
│   ├── favicon/
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── favicon.ico
│   ├── fonts/
│   │   ├── cormorant/
│   │   │   ├── cormorant-500.woff2
│   │   │   └── cormorant-700.woff2
│   │   ├── inter/
│   │   │   ├── Inter-Bold.woff2
│   │   │   └── Inter-Regular.woff2
│   │   ├── inter-display/
│   │   │   ├── InterDisplay-Bold.woff2
│   │   │   └── InterDisplay-Regular.woff2
│   │   ├── noto-sans/
│   │   │   ├── noto-sans-400.woff2
│   │   │   └── noto-sans-600.woff2
│   │   ├── noto-serif/
│   │   │   ├── noto-serif-500.woff2
│   │   │   └── noto-serif-700.woff2
│   │   └── open-sans/
│   │       ├── open-sans-400.woff2
│   │       └── open-sans-600.woff2
│   ├── .assetsignore
│   ├── .htaccess
│   ├── CNAME
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   ├── backgrounds/
│   │   │   ├── bwca-day.png
│   │   │   ├── bwca-dusk.png
│   │   │   └── bwca-night.png
│   │   ├── profile/
│   │   │   ├── jaden-hero.jpg
│   │   │   └── jaden-profile.png
│   │   ├── recipes/
│   │   │   ├── margherita-pizza.jpg
│   │   │   ├── protein-pasta.jpg
│   │   │   └── spaghetti-carbonara.jpg
│   │   ├── top-picks/
│   │   │   └── placeholder.md
│   │   ├── vault/
│   │   │   └── placeholder.md
│   │   ├── astrogon-logo.svg
│   │   └── astrogon-star.svg
│   ├── components/
│   │   ├── about/
│   │   │   └── EntryLayout.astro
│   │   ├── base/
│   │   │   ├── Background.astro
│   │   │   ├── BaseLayout.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Header.astro
│   │   │   ├── ObserverScript.astro
│   │   │   ├── ThemeScript.astro
│   │   │   └── ThemeSwitcher.astro
│   │   ├── common/
│   │   │   ├── shortcodes/
│   │   │   │   ├── Accordion.tsx
│   │   │   │   ├── Notice.tsx
│   │   │   │   ├── ScrollArea.tsx
│   │   │   │   ├── Tab.tsx
│   │   │   │   ├── Tabs.tsx
│   │   │   │   └── Youtube.tsx
│   │   │   ├── Breadcrumbs.astro
│   │   │   ├── Button.astro
│   │   │   ├── EntryHeader.astro
│   │   │   ├── PageHeader.astro
│   │   │   ├── Pagination.astro
│   │   │   ├── Share.astro
│   │   │   ├── Social.astro
│   │   │   └── TableOfContents.astro
│   │   ├── hall-of-fame/
│   │   │   ├── Card.astro
│   │   │   ├── CollectionLayout.astro
│   │   │   └── EntryLayout.astro
│   │   ├── home/
│   │   │   └── EntryLayout.astro
│   │   ├── links/
│   │   │   └── EntryLayout.astro
│   │   ├── not-found/
│   │   │   └── EntryLayout.astro
│   │   ├── quotes/
│   │   │   ├── EntryLayout.astro
│   │   │   └── Swiper.tsx
│   │   ├── recipes/
│   │   │   ├── Card.astro
│   │   │   ├── CollectionLayout.astro
│   │   │   └── EntryLayout.astro
│   │   ├── search/
│   │   │   ├── EntryLayout.astro
│   │   │   └── Search.tsx
│   │   ├── terms/
│   │   │   └── EntryLayout.astro
│   │   ├── top-picks/
│   │   │   ├── Browser.astro
│   │   │   ├── Card.astro
│   │   │   ├── CollectionLayout.astro
│   │   │   └── EntryLayout.astro
│   │   └── vault/
│   │       ├── Card.astro
│   │       ├── CollectionLayout.astro
│   │       ├── EntryLayout.astro
│   │       ├── Sidebar.astro
│   │       ├── TaxaLayout.astro
│   │       └── TaxonLayout.astro
│   ├── content/
│   │   ├── about/
│   │   │   └── -index.md
│   │   ├── hall-of-fame/
│   │   │   ├── -index.md
│   │   │   └── jaden.md
│   │   ├── home/
│   │   │   └── -index.md
│   │   ├── links/
│   │   │   └── -index.md
│   │   ├── quotes/
│   │   │   └── -index.md
│   │   ├── recipes/
│   │   │   ├── _template.md
│   │   │   ├── -index.md
│   │   │   ├── margherita-pizza.md
│   │   │   ├── protein-pasta.md
│   │   │   └── spaghetti-carbonara.md
│   │   ├── terms/
│   │   │   └── -index.md
│   │   ├── top-picks/
│   │   │   ├── books-guides/
│   │   │   │   └── -index.md
│   │   │   ├── movies-tv/
│   │   │   │   └── -index.md
│   │   │   ├── music-podcasts/
│   │   │   │   └── -index.md
│   │   │   └── -index.md
│   │   └── vault/
│   │       ├── -index.md
│   │       └── discipline.md
│   ├── lib/
│   │   ├── contentParser.ts
│   │   ├── formatDate.ts
│   │   ├── readingTime.ts
│   │   ├── similarItems.ts
│   │   ├── sortFunctions.ts
│   │   ├── taxonomyFilter.ts
│   │   ├── taxonomyParser.ts
│   │   ├── textConverter.ts
│   │   └── tocUtils.ts
│   ├── pages/
│   │   ├── hall-of-fame/
│   │   │   ├── [entry].astro
│   │   │   └── index.astro
│   │   ├── recipes/
│   │   │   ├── page/
│   │   │   │   └── [slug].astro
│   │   │   ├── [entry].astro
│   │   │   └── index.astro
│   │   ├── top-picks/
│   │   │   ├── [...id].astro
│   │   │   └── index.astro
│   │   ├── vault/
│   │   │   ├── categories/
│   │   │   │   ├── [category].astro
│   │   │   │   └── index.astro
│   │   │   ├── page/
│   │   │   │   └── [slug].astro
│   │   │   ├── tags/
│   │   │   │   ├── [tag].astro
│   │   │   │   └── index.astro
│   │   │   ├── [entry].astro
│   │   │   └── index.astro
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── links.astro
│   │   ├── quotes.astro
│   │   ├── search.astro
│   │   └── terms.astro
│   ├── styles/
│   │   ├── base.scss
│   │   ├── fonts.scss
│   │   ├── glass.scss
│   │   ├── main.scss
│   │   ├── prose.scss
│   │   └── utilities.scss
│   ├── types/
│   │   └── index.d.ts
│   ├── content.config.ts
│   └── env.d.ts
├── .editorconfig
├── .gitignore
├── .markdownlint.json
├── .prettierrc
├── astro.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── wrangler.jsonc

```
