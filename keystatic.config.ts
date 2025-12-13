import { articlesKs, authorsKs, categoriesKs } from "@/lib/keystatic";
import { config } from "@keystatic/core";

export default config({
  storage: import.meta.env.PROD
    ? {
        kind: "github",
        repo: "sayheyakanksha/grand-paradise",
      }
    : {
        kind: "local",
      },
  ui: {
    brand: {
      name: "Grand Paradise",
    },
    navigation: ["---", "articles", "---", "authors", "categories"],
  },
  collections: {
    articles: articlesKs,
    authors: authorsKs,
    categories: categoriesKs,
  },
});
