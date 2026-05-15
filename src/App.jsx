import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeBand from "./components/MarqueeBand";
import Projects from "./components/Projects";
import GearWall from "./components/GearWall";
import Discography from "./components/Discography";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import WaveformDivider from "./components/WaveformDivider";

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeBand />
      <WaveformDivider dim />
      <Projects />
      <WaveformDivider flip dim />
      <GearWall />
      <WaveformDivider dim />
      <Discography />
      <Services />
      <WaveformDivider flip />
      <About />
      <Contact />
    </div>
  );
}
