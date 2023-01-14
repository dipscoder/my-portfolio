import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Spotify Clone",
    desc: "A Music Playing Application which provide curated songs and lyrics from the Spotify API.",
    img: "/static/projects/spotify.png",
    link: "https://spotify-clone-client.netlify.app/",
    github: "https://github.com/dipscoder/spotify-clone",
    tags: ["React", "Context-API", "Material UI", "Express", "NodeJs", "Spotify-API"],
  },
  {
    id: 1,
    title: "Whatsapp Clone",
    desc: "A secure real-time end-to-end encrypted chat application.",
    img: "/static/projects/whatsapp.png",
    link: "https://whatsapp-mern-857d8.web.app/",
    github: "https://github.com/dipscoder/whatsapp-mern",
    tags: ["React", "MongoDb", "NodeJS", "Express", "Firebase", "Pusher API"],
  },
  {
    id: 2,
    title: "Games IMDB",
    desc: "A game IMDB, where you can search and read about different Games.",
    img: "/static/projects/game-imdb.png",
    link: "https://gameimdb.netlify.app/",
    github: "https://github.com/dipscoder/imdb-for-games",
    tags: ["React", "Material UI", "Style Component", "Framer Motion", "Redux"],
  },
  // {
  //   id: 3,
  //   title: "BitcoinTemp",
  //   desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
  //   img: "/static/projects/bitcointemp.png",
  //   link: "https://bitcointemp.com",
  //   tags: ["React", "NextJS", "SCSS", "API"],
  // },
  // {
  //   id: 4,
  //   title: "Create HTML Boilerplate",
  //   desc: "Generate a vanilla HTML boilerplate in a flash!",
  //   img: "/static/projects/create-html-boilerplate.png",
  //   github: "https://github.com/BraydenTW/create-html-boilerplate",
  //   tags: ["Node", "Javascript", "NPM", "HTML"],
  // },
  // {
  //   id: 5,
  //   title: "8 Ball in your CLI",
  //   desc: "An 8 ball simulation in your CLI built with Rust!",
  //   img: "/static/projects/8ball-rust.png",
  //   github: "https://github.com/BraydenTW/8ball-rust",
  //   tags: ["Rust", "CLI", "Game"],
  // },
  // {
  //   id: 6,
  //   title: "DontLeaveMe 😭",
  //   desc: "Beg for users to stay on your website.",
  //   img: "/static/projects/dontleaveme.png",
  //   link: "https://github.com/BraydenTW/dontleaveme/",
  //   tags: ["Javascript", "NPM"],
  // },
  // {
  //   id: 7,
  //   title: "Madlibs",
  //   desc: "A simple version of Madlibs built for the web!",
  //   img: "/static/projects/madlibs.png",
  //   link: "https://fillemin.netlify.app/",
  //   github: "https://github.com/braydentw/madlibs",
  //   tags: ["HTML", "CSS", "Javascript"],
  // },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects