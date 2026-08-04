# How to edit this site (Jaden's quick guide)

This guide explains, step-by-step, how to sign in to GitHub and make common updates to the site using the GitHub web interface: edit the Homepage or About page, update Top Picks, add a new recipe, add a new Quote of the Day, and update images. We've included exact file paths and example content so you can copy/paste.

Prerequisites

- A GitHub account and your username/password.
- A modern browser (Chrome, Firefox, Edge, Safari).
- Permission to push to this repository. If you cannot push to the default branch, create a branch and open a Pull Request (PR); instructions below.

Quick links

- Repository: https://github.com/JAJM2006/spagetitii
- Homepage content: src/content/home/-index.md
- About content: src/content/about/-index.md
- Top Picks content: src/content/top-picks/
- Recipes: src/content/recipies/  (note the folder name "recipies")
- Vault: src/content/vault/
- Assets (images): src/assets/

1) Sign in to GitHub

1. Open https://github.com and click "Sign in".
2. Enter your GitHub username and password.
3. If your account uses two-factor authentication (2FA), enter the code from your authenticator or SMS.

2) Open the repository

1. In the browser go to: https://github.com/JAJM2006/spagetitii
2. Click the "Code" tab to view files and folders.

3) Edit an existing page (Homepage, About, Top Picks)

Files live under src/content. Use the web editor for small text edits.

Paths to common pages:
- Homepage: src/content/home/-index.md
- About: src/content/about/-index.md
- Top Picks: src/content/top-picks/ (each pick is a separate file)

Steps (web UI):
1. Click the file path above or browse to the file in the repository tree.
2. Open the file and click the pencil icon labeled "Edit this file" in the top-right.
3. Make your text changes in the web editor.
4. Scroll down to "Commit changes". Add a short commit message (for example: "Update About text").
5. Choose to commit directly to the default branch if you have permission, or select "Create a new branch for this commit and start a pull request".
6. Click "Commit changes".

Notes:
- If you created a new branch, GitHub will show a button to "Compare & pull request" — click it to open a PR.
- If multiple people review changes, request a reviewer (for example @JAJM2006) in the PR.

4) Update or replace images

Images are stored in src/assets and subfolders, for example:
- Profile images: src/assets/profile/
- Top Picks images: src/assets/top-picks/
- Recipes images: you can put images under src/assets/recipies/ or a folder you prefer but match the path in the content frontmatter.

To upload or replace an image (web UI):
1. Open the appropriate assets folder (for example: src/assets/profile).
2. Click Add file -> Upload files.
3. Select the image(s) from your computer.
4. If replacing an existing image, use the same filename as referenced in the content file so the site will pick it up.
5. Add a commit message like "Upload profile.jpg" and commit.

Tip: Check the content file's frontmatter (the top section between --- lines) for an "image" field. Use the same filename and relative path there.

5) Add a new recipe (complete example)

The recipes folder is spelled "recipies" in this repo. To add a new recipe using the GitHub web UI:

1. Go to: src/content/recipies
2. Click Add file -> Create new file
3. Enter a unique filename that ends with .md (example: chocolate-chip-cookies.md)
4. If there is a "RECIPIES TEMPLATE" inside a templates folder, open it in a new tab, copy its contents, and paste into your new file. If you can't find a template, use the sample below.
5. Replace the placeholder fields and fill in the content.
6. Commit the file (directly to default branch or create a new branch and open a PR).

Sample recipe file (copy/paste into your new .md file):

---
title: "Chocolate Chip Cookies"
date: 2026-08-04
tags: [recipes, baking]
image: "/src/assets/recipies/choc-chip.jpg"
---

Ingredients:
- 2 cups all-purpose flour
- 1 cup sugar
- 1 cup butter, softened
- 1 cup chocolate chips

Steps:
1. Preheat the oven to 350°F (175°C).
2. Cream butter and sugar, add flour and mix.
3. Fold in chocolate chips.
4. Drop by spoonfuls onto a baking sheet and bake for 10–12 minutes.

Notes:
- You can substitute dark chocolate chips for a richer flavor.

After committing:
- If you uploaded an image, ensure the image path in the frontmatter matches the uploaded filename.
- Wait a few minutes and check the live site (if the site deploys automatically) or preview the branch/PR.

6) Add a new "Quote of the Day" (two common patterns)

There are two common ways the site may accept quotes: (A) one-file-per-quote in a folder, or (B) a single file that contains a list of quotes. Use the approach already present in the repository.

A) One file per quote (recommended):
1. Find or create a folder for quotes (for example: src/content/quotes/). If the folder doesn't exist, create it.
2. Click Add file -> Create new file and name it like 2026-08-04-quote.md or quote-2026-08-04.md
3. Use this minimal frontmatter and content:

---
title: "Quote of the Day - 2026-08-04"
date: 2026-08-04
---

"Be yourself; everyone else is already taken." — Oscar Wilde

4. Commit the file.

B) Single file with many quotes:
1. Open the quotes file (for example src/content/quotes.md) and click the pencil icon.
2. Insert your new quote in the same format as the others.
3. Commit the change.

If you're unsure which pattern the site uses, open the repo and inspect existing files in src/content to find where quotes live.

7) Using templates (Vault, Recipes, etc.)

- Look in a templates/ folder or in src/content/templates/ for files named "VAULT TEMPLATE", "RECIPIES TEMPLATE", or similar.
- Open the template, copy the contents, and paste into your new content file. Replace placeholder values with real content.

8) Create a branch and open a Pull Request (if you don't have direct push access)

1. When editing a file via the web UI, select "Create a new branch for this commit and start a pull request".
2. After committing, click "Compare & pull request".
3. Add a short description and request a reviewer (for example @JAJM2006).
4. Click "Create pull request".

9) Naming and formatting tips

- Use lowercase, dash-separated filenames (for example: chocolate-chip-cookies.md).
- Use the existing folder names exactly — for example this repo uses "recipies" rather than "recipes". Use the same spelling to ensure the site finds your file.
- Keep frontmatter fields consistent: title, date, tags, image. The site may expect specific fields — copy from an existing working file if unsure.

10) Troubleshooting

- My image doesn't show: double-check the image path and filename in the frontmatter and that you committed the image to src/assets.
- Changes don't appear on the live site: the site may take a few minutes to build/deploy after a commit; check the repository's Actions tab for build status.
- I can't find a template: look in a templates/ folder or view similar files in the same content folder and copy their frontmatter structure.
- I don't have permission to merge: create a PR and ask @JAJM2006 to review and merge.

11) Example: add a new Vault item

1. Go to src/content/vault
2. Click Add file -> Create new file and name it uniquely (e.g., fitness.md)
3. Copy the "VAULT TEMPLATE" contents if available, replace placeholders, and commit.

Contact

If anything is unclear, open an issue in this repository and tag @JAJM2006 or send a short message to them. They're the best person to confirm where new content should live if you're unsure.
