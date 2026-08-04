# Quick Cheat Sheet

<details>
<summary><b>How to edit the Homepage</b></summary>

1. Open [-index.md](https://github.com/JAJM2006/spagetitii/tree/main/src/content/home/-index.md).
2. Click the **Pencil** button (Edit).
3. Update the content.
4. Click **Commit changes...**

> **To update the homepage image:**
> 1. Go to the [assets folder](https://github.com/JAJM2006/spagetitii/tree/main/src/assets/profile).
> 2. Upload your new photo and note the filename (e.g., `jaden-profile.png`).
> 3. Go back to [-index.md](https://github.com/JAJM2006/spagetitii/tree/main/src/content/home/-index.md) and click the **Pencil** button.
> 4. Change `[@assets/profile/<old-file>]` to `[@assets/profile/<new-file>]`.
</details>

<details>
<summary><b>How to edit the About Page</b></summary>

1. Open [-index.md](https://github.com/JAJM2006/spagetitii/tree/main/src/content/about/-index.md).
2. Click the **Pencil** button (Edit).
3. Update the content.
4. Click **Commit changes...**

> **To update the about image:**
> 1. Go to the [assets folder](https://github.com/JAJM2006/spagetitii/tree/main/src/assets/profile).
> 2. Upload your new photo and note the filename (e.g., `jaden-profile.png`).
> 3. Go back to [-index.md](https://github.com/JAJM2006/spagetitii/tree/main/src/content/about/-index.md) and click the **Pencil** button.
> 4. Change `[@assets/profile/<old-file>]` to `[@assets/profile/<new-file>]`.
</details>

<details>
<summary><b>How to add to Top Picks</b></summary>

1. Copy the [Top Picks Template](https://github.com/JAJM2006/spagetitii/templates/top-picks).
2. Navigate to [/src/content/top-picks](https://github.com/JAJM2006/spagetitii/tree/main/src/content/top-picks).
3. Choose the appropriate category folder (*Books & Guides*, *Movies & TV shows*, or *Music & Podcasts*).
4. Click **Add file** ➔ **Create new file**.
5. Name the file using kebab-case (e.g., `hunger-games.md`).
6. Paste and fill out the template.
7. Click **Commit changes...**
</details>

<details>
<summary><b>How to add to The Vault</b></summary>

1. Copy the [Vault Template](https://github.com/JAJM2006/spagetitii/templates/vault).
2. Navigate to [/src/content/vault](https://github.com/JAJM2006/spagetitii/tree/main/src/content/vault).
3. Click **Add file** ➔ **Create new file**.
4. Name the file using kebab-case (e.g., `kissing-the-homies.md`).
5. Paste and fill out the template.
6. Click **Commit changes...**
</details>

<details>
<summary><b>How to add Recipes</b></summary>

1. Copy the [Recipe Template](https://github.com/JAJM2006/spagetitii/templates/recipes).
2. Navigate to [/src/content/recipes](https://github.com/JAJM2006/spagetitii/tree/main/src/content/recipes).
3. Click **Add file** ➔ **Create new file**.
4. Name the file using kebab-case (e.g., `pesto-pasta.md`).
5. Paste and fill out the template.
6. Click **Commit changes...**

> **To add an image to a recipe:**
> 1. Go to the [recipe assets page](https://github.com/JAJM2006/spagetitii/tree/main/src/assets/recipes).
> 2. Upload your photo and note the filename.
> 3. Open your recipe file in [/src/content/recipes](https://github.com/JAJM2006/spagetitii/tree/main/src/content/recipes).
> 4. Click the **Pencil** button and update the image path: `[@assets/profile/<old-file>]` ➔ `[@assets/profile/<new-file>]`.
</details>

<details>
<summary><b>How to add a Quote of the Day</b></summary>

1. Copy the [Quotes Template](https://github.com/JAJM2006/spagetitii/templates/quotes).
2. Navigate to [/src/content/quotes](https://github.com/JAJM2006/spagetitii/tree/main/src/content/quotes).
3. Click **Add file** ➔ **Create new file**.
4. Name the file something recognizable (e.g., `inspirational-quote.md`).
5. Paste and fill out the template.
6. Click **Commit changes...**
</details>

<details>
<summary><b>How to add someone to the Hall of Fame</b></summary>

1. Copy the [Hall of Fame Template](https://github.com/JAJM2006/spagetitii/templates/hall-of-fame).
2. Navigate to [/src/content/hall-of-fame](https://github.com/JAJM2006/spagetitii/tree/main/src/content/hall-of-fame).
3. Click **Add file** ➔ **Create new file**.
4. Name the file after the person (e.g., `jaden.md`).
5. Paste and fill out the template, then commit.
6. Upload their picture to the [profile assets page](https://github.com/JAJM2006/spagetitii/tree/main/src/assets/profile) and copy the filename (e.g., `jaden-profile.png`).
7. Re-open your newly created file in [hall-of-fame](https://github.com/JAJM2006/spagetitii/tree/main/src/content/hall-of-fame), click the **Pencil** button, and update the image path: `[@assets/profile/<old-file>]` ➔ `[@assets/profile/<new-file>]`.
8. Click **Commit changes...**
</details>

<details>
<summary><b>How to edit the Links Page</b></summary>

1. Open [-index.md](https://github.com/JAJM2006/spagetitii/tree/main/src/content/links/-index.md).
2. Click the **Pencil** button (Edit).
3. Update the body of the file.
4. Click **Commit changes...**
</details>

```
spagetitii/
├── docs/           # Guides for editing, domain settings, and developer tech info
├── public/         # Static files (favicons, fonts, robots.txt)
├── src/            # The main code and site content
│   ├── assets/     # Images (backgrounds, profiles, recipes)
│   ├── components/ # Reusable UI templates and layout pieces
│   ├── content/    # Your actual site text (recipes, vault articles, top picks)
│   ├── lib/        # Helper scripts (sorting, reading time, date formatting)
│   ├── pages/      # Route pages (home, about, recipes, vault, 404)
│   └── styles/     # SCSS styling files
└── [Config Files]  # Settings for Astro, Tailwind, Cloudflare, and TypeScript
```
