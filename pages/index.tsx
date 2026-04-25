import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Highlights from "@/components/home/Highlights";
import { AboutMe } from "@/components/home/AboutMe";
import ExperienceSections from "@/components/home/ExperienceSections";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer who loves building beautiful websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <AboutMe />
        <Skills />
        <Highlights />
        <ExperienceSections />
        <Projects />
        <Blog />
      </div>
      <CTA />
    </Page>
  );
}
