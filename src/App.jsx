import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutIntro from "./components/AboutIntro";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import ServicesGrid from "./components/ServicesGrid";
import JourneyTimeline from "./components/JourneyTimeline";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F8F9FA] text-gray-900 font-sans cursor-default relative">
        <Navbar />

        <main className="w-full">
          <Hero />
          <AboutIntro />
          <Marquee />
          <Projects />
          <ServicesGrid />
          <JourneyTimeline />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
