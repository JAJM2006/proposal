# Developer Handover & Tech Stack Overview

Welcome! If you are reading this guide, you are taking over the web development, architecture, and maintenance of **spagetitii.com**.

This document outlines the technical choices, structural conventions, content pipelines, and deployment strategy powering the website.

---

## Key Architectural Principles

1. **Static Site Generation (SSG):** The site is pre-rendered at build time using **Astro**. There are no server-side rendering (SSR) requirements, databases, or runtime backend dependencies.
2. **Zero-Runtime Overhead:** Assets, CSS, images, and search indexes are generated statically during build time, yielding near-instant page loads and zero monthly server compute costs.
3. **Decoupled Content & Layouts:** Written content (markdown) is completely decoupled from page templates and CSS styling, allowing non-developers (like myself) to write content without touching template code.



---

## The Stack at a Glance

* **Framework:** [Astro](https://astro.build/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

* **Search Engine:** [Pagefind](https://pagefind.app/)
* **Hosting & CDN:** [Cloudflare Pages](https://pages.cloudflare.com/)
* **Content Engine:** Astro Content Collection


* **Package Manager:** `npm` / Node.js

---

## 📂 Repository Structure & Key Directories

```text
spagetitii
├── src/
│   ├── assets/              # Raw images & media processed by Astro Image[cite: 3]
│   ├── components/          # Reusable UI components & section layouts[cite: 3]
│   │   ├── base/            # BaseLayout, Header, Footer, meta tags[cite: 3]
│   │   ├── common/          # Shared components (Pagination, Social, etc.)[cite: 3]
│   │   ├── hall-of-fame/    # Hall of Fame layouts & cards[cite: 3]
│   │   ├── recipes/         # Recipe layouts & cards[cite: 3]
│   │   ├── top-picks/       # Top Picks layouts & cards[cite: 3]
│   │   └── vault/           # Vault / blog layouts & cards[cite: 3]
│   ├── content/             # Markdown content collections[cite: 3]
│   │   ├── config.ts        # Zod schemas defining metadata for each collection[cite: 3, 5]
│   │   ├── hall-of-fame/    # (.md entries)
│   │   ├── recipes/         # (.md entries)
│   │   ├── top-picks/       # (.md entries)
│   │   └── vault/           # (.md entries)
│   ├── lib/                 # Parser utilities, sorting algorithms, pagination helpers[cite: 5]
│   ├── pages/               # File-based routing engine[cite: 3]
│   └── styles/              # Global CSS & Tailwind overrides[cite: 3, 5]
├── public/                  # Favicons, robots.txt, static un-processed assets[cite: 3]
├── docs/                    # Internal documentation & guides[cite: 1]
└── astro.config.mjs         # Astro setup, Cloudflare adapter, site config

```

---

## ⚙️ Content Pipeline & Collections (`src/content/`)

All collections are strictly typed in **`src/content/config.ts`** using Zod schemas.

### Active Collections:

* **`recipes`**: Includes prep time, cook time, servings, categories, tags, and hero image paths.
* **`vault`**: Blog posts and long-form articles with category/tag filtering and pagination support.


* **`top-picks`**: Media recommendations (Books, Music, Movies, etc.) organized by category folders.
* **`hall-of-fame`**: Stream highlights, key members, and community features.

### Important Parsing Utility Rules (`src/lib/contentParser.ts`)

* Pages fetch collection entries using helper functions (`getEntries`, `getGroups`, `getIndex`) rather than calling raw Astro `getCollection()` directly.


* When creating new collections, ensure you update **`src/content/config.ts`** and **`src/types/index.d.ts`** to maintain TypeScript safety.



---

## Local Development & Build Commands

### 1. Install Dependencies

```bash
npm install

```

### 2. Run Local Development Server

```bash
npm run dev

```

Starts local server at `http://localhost:4321`.

### 3. Production Build Pipeline

```bash
npm run build

```

Executing `npm run build` runs a 3-stage pipeline:

1. **Astro Build (`astro build`):** Validates types, parses content collections, optimizes images, and prerenders all static HTML pages to `/dist`[cite: 2].
2. **Pagefind Search Indexing (`pagefind --site dist`):** Scans generated HTML files in `dist/` and builds static search indexes[cite: 4].
3. **Sitemap Generation:** Creates `sitemap-index.xml` inside `/dist`.

### 4. Local Build Preview

```bash
npm run preview

```

Previews the compiled production build from `/dist`.

---

## ☁️ Deployment Pipeline (Cloudflare Pages)

* **Deployment Method:** Git Integration (Continuous Deployment)[cite: 2].
* **Trigger:** Pushing commits to the `main` branch automatically triggers Cloudflare Pages to pull the repository and run `npm run build`[cite: 2].
* **Output Folder:** `dist`
* **Adapter:** `@astrojs/cloudflare` (configured in `static` build mode).

---

## Critical Rules for Maintenance & Debugging

1. **Outer Layout Wrapper (`BaseLayout.astro`):**
* Every page route in `src/pages/` or collection layout in `src/components/` MUST wrap its HTML in `<BaseLayout>` (or standard `<html>`/`<body>` tags). Missing top-level `<html>` tags will cause Pagefind indexer warnings and break browser styling.




2. **Image Optimization Path Alias:**
* Images stored in `src/assets/` must be referenced using `@/assets/...` aliases when passed through Astro Image components.


3. **Renaming Collections:**
* If you rename or delete a content collection inside `src/content/`, remember to update `src/content/config.ts`, `src/pages/search.astro`, and all associated route files under `src/pages/[collection]/`.

---

*Maintained by **JAJM2006 (Joshua)**. Reach out if you ever need help or updates!*
