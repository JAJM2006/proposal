# Quick cheat sheet — short & fast

A compact reference for fast edits using the GitHub web UI.

Common quick flow (all content)
1. Open the template (if present) and copy its contents.
2. Go to the target folder under src/content (paths below).
3. Click Add file → Create new file (or open the existing file to edit).
4. Paste the template (or edit) and fill in frontmatter/fields.
5. Upload any required images to src/assets/ (see notes).
6. Commit directly if you have permission, or create a branch and open a PR.
7. Wait for the site to build/deploy (check Actions if needed).

Per-area cheats

- Homepage
  1) Open/copy: src/content/home/-index.md
  2) Edit that single file (or replace content)
  3) Upload images to src/assets/ if needed
  4) Commit and wait

- About
  1) Open/copy: src/content/about/-index.md
  2) Edit content or replace with template
  3) Upload images to src/assets/ if needed
  4) Commit and wait

- Top Picks
  1) Find an example in src/content/top-picks/ (or templates there)
  2) Copy its template or file
  3) Create a new file under src/content/top-picks/<your-file>.md in the same subfolder structure
  4) Ensure frontmatter includes the correct image path and link fields
  5) Upload images to src/assets/top-picks/ and reference the exact filename
  6) Commit and wait

- Vault
  1) Copy VAULT TEMPLATE from src/content/templates or src/content/vault/
  2) Create src/content/vault/<your-file>.md and paste the template
  3) Fill fields and commit

- Recipies (note spelling: "recipies")
  1) Open RECIPIES TEMPLATE in src/content/recipies/templates or copy an existing recipe
  2) Create src/content/recipies/<your-recipe>.md
  3) Paste template, fill title/date/tags/image/frontmatter
  4) Upload images to src/assets/recipies/ and reference exact path in frontmatter
  5) Commit and wait

- Quotes
  Pattern A — one-file-per-quote:
    1) Create src/content/quotes/<date>-quote.md with minimal frontmatter (title, date)
    2) Add the quote text and commit
  Pattern B — single file:
    1) Edit the existing quotes file (e.g., src/content/quotes.md) and add your quote in the same format
  Tip: follow the pattern already present in the repo

- Hall of Fame
  1) Copy an example from src/content/hall-of-fame/ (or templates)
  2) Create src/content/hall-of-fame/<your-entry>.md and fill fields
  3) IMPORTANT: upload the person’s photo to src/assets/profile/ and reference that exact filename in the frontmatter
  4) Commit and wait

- Links
  1) Inspect how links are stored (folder vs single file) in src/content/links/ or similar
  2) Follow the existing pattern; add a new file or edit the links file accordingly
  3) Commit and wait

Special notes
- Always copy frontmatter exactly from a working example in the repo — field names matter.
- Use the exact folder names (e.g., "recipies") — spelling and path must match the site’s expectations.
- For Top Picks and Hall of Fame, put images in the expected assets subfolder (top-picks or profile) and reference exact filenames.
- If you can’t push to default, create a branch on commit and open a PR; request @JAJM2006 as reviewer if needed.

Want me to replace docs/how-to.md with this cheat sheet (I can commit it), or create docs/cheat-sheet.md and leave the original file intact?