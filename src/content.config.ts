import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const searchable = z.object({
  title: z.string(),
  description: z.string().optional(),
  autodescription: z.boolean().default(true),
  draft: z.boolean().default(false),
});

const social = z.object({
  discord: z.string().optional(),
  email: z.string().optional(),
  facebook: z.string().optional(),
  github: z.string().optional(),
  instagram: z.string().optional(),
  kick: z.string().optional(),
  linkedIn: z.string().optional(),
  pinterest: z.string().optional(),
  tiktok: z.string().optional(),
  twitch: z.string().optional(),
  website: z.string().optional(),
  x: z.string().optional(),
  youtube: z.string().optional(),
});

const about = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/about" }),
  schema: ({ image }) =>
    searchable.extend({
      image: image().optional(),
      imageAlt: z.string().default(""),
    }),
});

// Re-purposed for Creator, Supporters, Mods & Hall of Fame
const authors = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/authors",
  }),
  schema: ({ image }) =>
    searchable.extend({
      role: z
        .enum(["Creator", "Mod", "VIP", "Top Supporter", "Community PR Leader"])
        .default("VIP"),
      email: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      social: social.optional(),
    }),
});

// Main Stream Updates & Blog
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      categories: z
        .array(z.enum(["Fitness", "Gaming", "Mindset", "Stream Updates"]))
        .optional(),
      tags: z.array(z.string()).optional(),
      complexity: z.number().default(1),
      hideToc: z.boolean().default(false),
    }),
});

// Stream Vault / Structured Fitness & Setup Guides
const docs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/docs" }),
  schema: ({ image }) =>
    searchable.extend({
      pubDate: z.date().optional(),
      modDate: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      hideToc: z.boolean().default(false),
      hideNav: z.boolean().default(false),
    }),
});

const home = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/home" }),
  schema: ({ image }) =>
    z.object({
      image: image().optional(),
      imageAlt: z.string().default(""),
      title: z.string(),
      content: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string().optional(),
        })
        .optional(),
    }),
});

// Re-purposed for Mindset Notes & Daily Quotes
const indexCards = defineCollection({
  loader: glob({
    pattern: "-index.{md,mdx}",
    base: "./src/content/index-cards",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cards: z.array(z.string()),
  }),
});

// Re-purposed for Social Links Hub
const links = defineCollection({
  loader: glob({
    pattern: "-index.{md,mdx}",
    base: "./src/content/links",
  }),
  schema: searchable.extend({
    platforms: z.array(
      z.object({
        name: z.string(),
        title: z.string(),
        link: z.string(),
        description: z.string(),
        highlights: z.array(z.string()).optional(),
      }),
    ),
  }),
});

// Cooking with Jaden
const recipes = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/recipes",
  }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      prepTime: z.number().optional(),
      servings: z.number().optional(),
      calories: z.number().optional(),
      protein: z.string().optional(),
      diet: z.string().optional(),
      ingredients: z
        .object({
          list: z.array(z.string()),
          qty: z.array(z.string()),
        })
        .optional(),
      instructions: z.array(z.string()).optional(),
      notes: z.array(z.string()).optional(),
    }),
});

const terms = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/terms" }),
  schema: searchable,
});

export const collections = {
  about,
  authors,
  blog,
  docs,
  home,
  indexCards,
  links,
  recipes,
  terms,
};
