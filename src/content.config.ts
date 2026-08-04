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
  terms,
};
