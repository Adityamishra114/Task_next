import About from "./components/About";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Project />
    </div>
  );
}
