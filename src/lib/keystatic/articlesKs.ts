import { collection, fields } from "@keystatic/core";

export const articlesKs = collection({
  label: "Articles",
  slugField: "title",
  path: "src/content/articles/*/",
  format: { contentField: "content" },
  entryLayout: "form",
  schema: {
    isDraft: fields.checkbox({
      label: "Is this a draft?",
      description:
        "Marking this article as a draft will hide it from public view.",
      defaultValue: false,
    }),
    isMainHeadline: fields.checkbox({
      label: "Is this a main headline?",
      description:
        "Marking this article as a main headline will feature it prominently on the homepage.",
      defaultValue: false,
    }),
    isSubHeadline: fields.checkbox({
      label: "Is this a sub headline?",
      description:
        "Marking this article as a sub headline will feature it in the sub headline section on the homepage.",
      defaultValue: false,
    }),
    title: fields.slug({
      name: {
        label: "Title",
        description: "Max character limit -  120 characters.",
        validation: { length: { max: 120 } },
      },
      slug: {
        description: "Article page URL slug.",
        validation: { length: { max: 120 } },
      },
    }),
    description: fields.text({
      label: "Short Description",
      description: "Max character limit -  160 characters.",
      validation: { isRequired: true, length: { max: 160 } },
      multiline: true,
    }),
    cover: fields.image({
      label: "Cover",
      description: "The main image for the article.",
      directory: "src/assets/images/articles",
      publicPath: "@assets/images/articles/",
    }),
    category: fields.relationship({
      label: "Category",
      description: "The category this article belongs to.",
      collection: "categories",
    }),
    publishedTime: fields.datetime({
      label: "Published Time",
      description: "The date and time the article was published.",
      validation: { isRequired: true },
    }),
    authors: fields.array(
      fields.relationship({
        label: "Authors",
        collection: "authors",
      }),
      {
        label: "Authors",
        itemLabel: (props) => props.value ?? "",
        validation: {
          length: {
            min: 1,
          },
        },
      },
    ),
    content: fields.mdx({
      label: "Content",
      description: "The main content of the article.",
      options: {
        image: {
          directory: "src/assets/images/articles",
          publicPath: "@assets/images/articles",
        },
      },
    }),
    score: fields.number({
      label: "Score (Optional)",
      description: "The review score of the article.",
      validation: { isRequired: false },
    }),
    reviewedOn: fields.text({
      label: "Reviewed On (Optional)",
      description: "The platform on which you reviewed the game",
      validation: { isRequired: false },
    }),
    tldr: fields.text({
      label: "TL;DR (Optional)",
      description: "Use it as a TL;DR for the article.",
      validation: { isRequired: false },
      multiline: true,
    }),
  },
});
