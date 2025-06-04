import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

function HeroSection() {
  const professions = [
    { first: "Frontend", second: "Developer" },
    { first: "Backend", second: "Developer" },
    { first: "UI/UX", second: "Designer" },
  ];

  const [text, setText] = useState("Erzhan Zhunusov");
  const [fullText, setFullText] = useState("Erzhan Zhunusov");
  const [step, setStep] = useState("intro"); 
  const [professionIndex, setProfessionIndex] = useState(0);

  useEffect(() => {
    if (step === "intro") {
      const timeout = setTimeout(() => {
        setStep("deleting");
      }, 3500);
      return () => clearTimeout(timeout);
    }

    if (step === "deleting") {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const next = professions[professionIndex];
        setFullText(`${next.first} ${next.second}`);
        setStep("typing");
      }
    }

    if (step === "typing") {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setStep("deleting");
          setProfessionIndex((prev) => (prev + 1) % professions.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [step, text, fullText, professionIndex, professions]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I am </span>
            <span className="text-gradient ml-2 transition-all duration-300">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I make the web simpler, faster, and more beautiful. <br />
            Frontend Developer. Minimalist. Motion lover. Detail-oriented.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
