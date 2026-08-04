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

// Hall of Fame
const hallOfFame = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/hall-of-fame",
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

// Stream Vault & Original Content
const vault = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/vault" }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("hall-of-fame").optional(),
      categories: z
        .array(
          z.enum([
            "Fitness",
            "Gaming",
            "Mindset",
            "Stream Updates",
            "Stream Clips",
          ])
        )
        .optional(),
      tags: z.array(z.string()).optional(),
      complexity: z.number().default(1),
      hideToc: z.boolean().default(false),
    }),
});

// Top Picks / Curated Recommendations
const topPicks = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/top-picks",
  }),
  schema: ({ image }) =>
    searchable.extend({
      pubDate: z.date().optional(),
      modDate: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      category: z
        .enum(["Books & Guides", "Movies & TV", "Music & Podcasts"])
        .optional(),
      externalUrl: z.string().url().optional(),
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

// Mindset Notes & Daily Quotes
const quotes = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/quotes",
  }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    cards: z.array(z.string()).optional(),
  }).passthrough(),
});

// Social Links Hub
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
      author: reference("hall-of-fame").optional(),
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
  "hall-of-fame": hallOfFame,
  hallOfFame,
  vault,
  home,
  quotes,
  links,
  recipes,
  "top-picks": topPicks,
  topPicks,
  terms,
};