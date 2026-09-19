import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Vivek Bhandari",
  ogImage: "assets/images/banner.png",
  subtitle:
    "Q.THE.VAR | Web Security & Bug Bounty | CTF Player | AI-Powered Web Security Testing & Automation",
  lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
  themeColor: {
    hue: 45, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true, // Display the banner image on the top of each post
    src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false, // Display the credit text of the banner image
      text: "", // Credit text to be displayed
      url: "", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.About,
    {
      name: "Contact",
      url: "/contact/",
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "Vivek Bhandari",
  bio: "Q.THE.VAR | Web Security & Bug Bounty | CTF Player | AI-Powered Web Security Testing & Automation",
  links: [
    {
      name: "X",
      icon: "fa6-brands:x-twitter",
      url: "https://x.com/viveksecurity",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/vivekbhandarisec",
    },
    {
      name: "LinkedIn",
      icon: "fa6-brands:linkedin",
      url: "https://www.linkedin.com/in/vivekbhandarisec/",
    },
    {
      name: "Instagram",
      icon: "fa6-brands:instagram",
      url: "https://www.instagram.com/qthevar?stkn=enc5YWY1Ym9oNGE=",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: "github-dark",
};
