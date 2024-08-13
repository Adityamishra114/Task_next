"use client";
import About from "./components/About";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Leadership from "./components/Leadership";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Project />
      <Leadership />
      <Skills />
      <Footer />
    </div>
  );
}
