import React from "react";
import Hero from "../components/HeroSection/Hero";
import About from "../components/About/About";
import Skills from "../components/SkillsSection/Skills"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
