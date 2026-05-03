import { About } from './_components/About';
import { Contact } from './_components/Contact';
import { Experience } from './_components/Experience';
import { Footer } from './_components/Footer';
import { Hero } from './_components/Hero';
import { Nav } from './_components/Nav';
import { NorthStar } from './_components/NorthStar';
import { SelectedWork } from './_components/SelectedWork';
import { SideProject } from './_components/SideProject';
import { Skills } from './_components/Skills';
import { Writing } from './_components/Writing';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <SelectedWork />
        <Experience />
        <SideProject />
        <Writing />
        <NorthStar />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
