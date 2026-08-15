import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Architecture } from "../components/Architecture";
import { Toolbox } from "../components/Toolbox";
import { ResumeCTA } from "../components/ResumeCTA";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Architecture />
        <Toolbox />
        <ResumeCTA />
        <Contact />
      </main>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Home;
