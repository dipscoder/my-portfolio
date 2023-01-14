type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "About",
    path: "#about",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Resume",
    path: "#resume",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Designs",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/dipscoder",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/dipesh-jaiswal/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        // {
        //   name: "IndieHackers",
        //   link: "https://indiehackers.com/braydentw",
        //   icon: "/static/icons/indiehackers-f.svg",
        //   leavesWebsite: true,
        // },
        {
          name: "Email",
          link: "mailto:dipeshjaiswal140@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "dipeshjaiswal",
    message: "I appreciate your support very much! 💙",
  },
};
