import React from "react";
import ThemeToggle from "../components/ThemeToggle.jsx";
import StarBackground from "../components/StarBackground.jsx";
import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default Home;
