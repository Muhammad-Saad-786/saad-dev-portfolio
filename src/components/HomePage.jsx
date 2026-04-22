import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutIntro from "./AboutIntro";
import Marquee from "./Marquee";
import Projects from "./Projects";
import ServicesGrid from "./ServicesGrid";
import JourneyTimeline from "./JourneyTimeline";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 font-sans cursor-default relative">
      <Navbar />
      <Hero />
      <AboutIntro />
      <Marquee />
      <Projects />
      <ServicesGrid />
      <JourneyTimeline />
    </div>
  );
};
export default HomePage;
