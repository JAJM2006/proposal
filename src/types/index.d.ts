import type { CollectionEntry, CollectionKey } from "astro:content";
import type { MarkdownHeading } from "astro";

export type GenericEntry = CollectionEntry<CollectionKey>;

export type AboutEntry = CollectionEntry<"about">;
export type Hall-of-fameEntry = CollectionEntry<"hall-of-fame">;
export type vaultEntry = CollectionEntry<"vault">;
export type HomeEntry = CollectionEntry<"home">;
export type QuotesEntry = CollectionEntry<"quotes">;
export type PoetryEntry = CollectionEntry<"poetry">;
export type LinksEntry = CollectionEntry<"links">;
export type RecipesEntry = CollectionEntry<"recipes">;
export type TermsEntry = CollectionEntry<"terms">;
export type TopPicksEntry = CollectionEntry<"top-picks">;

export type SearchableEntry =
  | AboutEntry
  | Hall-of-fameEntry
  | vaultEntry
  | PoetryEntry
  | LinksEntry
  | RecipesEntry
  | TermsEntry
  | TopPicksEntry;

export type SocialLinks = {
  discord?: string;
  email?: string;
  facebook?: string;
  github?: string;
  instagram?: string;
  linkedIn?: string;
  pinterest?: string;
  tiktok?: string;
  website?: string;
  youtube?: string;
}

export type EntryReference = {
  id: string;
  collection: string;
};

// Define heading hierarchy so that we can generate ToC
export interface HeadingHierarchy extends MarkdownHeading {
  subheadings: HeadingHierarchy[];
}

export type MenuItem = {
  title?: string;
  id: string;
  children: MenuItem[];
};

// Define the type for menu items to created nested object
export type MenuItemWithDraft = {
  title?: string;
  id: string;
  draft: boolean;
  children: MenuItemWithDraft[];
};

// Define the props for the SideNavMenu component
export type SideNavMenuProps = {
  items: MenuItemWithDraft[];
  level: number;
};
