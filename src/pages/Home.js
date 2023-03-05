import React from "react";
import Hero from "../components/HeroSection/Hero";
import About from "../components/About/About";
import Skills from "../components/SkillsSection/Skills"

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default Home;
