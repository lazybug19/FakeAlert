export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FakeAlert",
  description: "Fake News Detection App.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Docs",
      href: "https://lazybug19.github.io/fake-news-detection/",
    },
  ],
  links: {
    github: "https://github.com/lazybug19",
    contribute: "https://github.com/lazybug19/fake-news-detection",
  },
};
