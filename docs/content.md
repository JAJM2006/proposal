# How to Add Content (A Zero-Code Guide) - [`src/`](../src/) directory:

> **No code, no software, no terminal required!**
> You can do 100% of your site updates right in your web browser on GitHub.com.

---

## 1. How to Add a New Recipe

1. Go to the GitHub repository online.
2. Click into **`src`** ➔ **`content`** ➔ **`recipes`**.
3. In the top-right corner, click **Add file** ➔ **Create new file**.
4. Name your file with `.md` at the end (e.g., `protein-pancakes.md`).
*(Always use lowercase letters and hyphens instead of spaces)*.
5. Paste this layout template into the main box and fill in your details:

```yaml
---
title: "Protein Pancakes"
description: "Quick 15-minute high-protein breakfast."
image: "@/assets/images/recipes/protein-pancakes.jpg"
prepTime: "5 mins"
cookTime: "10 mins"
servings: 2
categories: ["Breakfast"]
tags: ["High Protein", "Fitness"]
---

## Ingredients
- 1 cup Oats
- 1 scoop Protein Powder
- 1 Egg
- 1/2 cup Milk

## Instructions
1. Blend all ingredients together until smooth.
2. Cook on a medium-heat pan until golden on both sides.

```

6. Scroll to the top right, click **Commit changes...**, add a quick note (e.g., `Added protein pancakes`), and hit **Commit changes**.

---

## 2. How to Add a New Vault Entry

1. Go to **`src`** ➔ **`content`** ➔ **`vault`**.
2. Click **Add file** ➔ **Create new file**.
3. Name your file (e.g., `discipline-equals-freedom.md`).
4. Paste and fill out this template:

```yaml
---
title: "Discipline Equals Freedom"
description: "Why staying consistent creates true flexibility."
categories: ["Mindset"]
tags: ["Discipline", "Growth"]
draft: false
---

Write your thoughts and article content right here in standard text...

### Quick Takeaways
* Build habits, not motivation.
* Focus on small daily wins.

```

5. Click **Commit changes** to publish.

---

## 3. How to Upload Photos & Images

Always upload your photo **before** making the recipe or vault post!

1. Go to **`src`** ➔ **`assets`** ➔ **`images`** (navigate into `recipes` or `vault`).
2. Click **Add file** ➔ **Upload files**.
3. Drag and drop your image from your computer.
4. Click **Commit changes**.
5. Copy the exact filename and use it in your post metadata:
`image: "@/assets/images/recipes/your-photo-name.jpg"`

---

## 4 Golden Rules to Prevent Errors

1. **Keep quotes around text:** Always keep titles and descriptions inside quotes `"like this"`.
2. **No spaces in file names:** Use hyphens instead of spaces (e.g., `my-recipe.md`).
3. **Array formatting:** Always list tags and categories like `["Tag 1", "Tag 2"]`.
4. **Everything has a learning curve** Web development gets easier the more you try.
