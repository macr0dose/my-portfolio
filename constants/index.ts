// NAVIGATION
export const NAV_LINKS = [
  { href: "#navbar", key: "home", label: "Home" },
  { href: "#projects", key: "my_projects", label: "My Projects" },
  { href: "#about", key: "about", label: "About Me" },
  { href: "#contact", key: "contact_me", label: "Contact Me" },
];

// SKILLSET SECTION
export const SKILLSET = [
  {
    title: "Languages",
    icon: "/map.svg",
    variant: "green",
    description: "HTML5, CSS3, JavaScript, TypeScript, React, NextJS , Vite, C and more",
  },
  {
    title: "Tools",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Bootstrap, Github, Grafbase, HeadlessUI, mongoDB, Netlify, NodeJS, Prisma, RapidAPI, Sanity, ShadCN, TailwindCSS, Vercel",
  },
  {
    title: "Solutions",
    icon: "/tech.svg",
    variant: "green",
    description:
      "My skills are constantly expanding, with a desire to thoroughly understand the vast selection of tools we have available while implementing best practices",
  },
];

// PROJECTS SECTION
export const PROJECTS = [
  {
    title: "Concept landing page UI/UX",
    href: "https://nike-tailwind-one.vercel.app",
    icon: "/project1.svg",
    backgroundImage: "//project1.png",
    variant: "green",
    description: "",
  },
  {
    title: "AI Article Summarizer that will save your results",
    href: "https://ai-summarize-one.netlify.app",
    icon: "/project2.svg",
    backgroundImage: "/project2.png",
    variant: "green",
    description: "",
  },
  {
    title: "AI Prompt Sharing using Google login",
    href: "https://promptshare-one.vercel.app/",
    icon: "/project3.svg",
    variant: "green",
    description: "",
  },
  {
    title: "Car rental UI/UX using API calls",
    href: "https://car-showcase-demo-one.vercel.app/",
    icon: "/project4.svg",
    variant: "orange",
    description: "",
  },
  {
    title: "Camping and Adventure landing page UI/UX",
    href: "http://camp-travel-one.vercel.app",
    icon: "/project5.svg",
    variant: "orange",
    description: "",
  },
  {
    title: "A functional Dribble clone with Google login",
    href: "https://nextjs13-flexibble-one.vercel.app/",
    icon: "/project6.svg",
    variant: "orange",
    description: "",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      {
        label: "Home",
        value: "#navbar",
      },
      {
        label: "Projects",
        value: "#projects",
      },
      {
        label: "About Me",
        value: "#about",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Me",
  links: [
    {
      label: "Email",
      value: "mailto:macr0dose00@gmail.com",
      icon: "/mail.svg",
    },
    {
      label: "Twitter",
      value: "http://www.twitter.com/macr0dose00",
      icon: "/twitter.svg",
    },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: ["/twitter.svg", "/mail.svg", "/instagram.svg"],
};
