import type { Link } from "../types";

export const SITE = {
  title: "Beyond the Fog Gate",
  logo: "/bfg-light-logo.svg",
  logoDark: "/bfg-dark-logo.svg",
  description: "A news website built with Astro",
  author: "Akanksha",
  url: "https://beyondthefoggate.com",
  github: "https://github.com/sayheyakanksha/beyondthefoggate",
  locale: "en-US",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/news",
    text: "News",
  },
  {
    href: "/categories/guides",
    text: "Guides",
  },
  {
    href: "/categories/reviews",
    text: "Reviews",
  },
  {
    href: "/categories/features",
    text: "Features",
  },
  {
    href: "/categories/videos",
    text: "Videos",
  },
  {
    href: "/categories/interviews",
    text: "Interviews",
  },
];

export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About Us",
  },
  {
    href: "/authors",
    text: "Authors",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/rss.xml",
    text: "RSS",
  },
  {
    href: "/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://facebook.com/beyondthefoggate",
    text: "Facebook",
    icon: "facebook",
  },
  {
    href: "https://instagram.com/beyondthefoggate",
    text: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.linkedin.com/company/beyond-the-fog-gate/",
    text: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://twitter.com/beyondfoggate",
    text: "Twitter",
    icon: "newTwitter",
  },
];
