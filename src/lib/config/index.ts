import type { Link } from "../types";

export const SITE = {
  title: "Grand Paradise",
  logo: "/grand-paradise-logo.png",
  description: "A news website built with Astro",
  author: "Akanksha",
  url: "https://astro-news-six.vercel.app",
  github: "https://github.com/sayheyakanksha/grand-paradise",
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
    href: "https://instagram.com",
    text: "Instagram",
    icon: "instagram",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
