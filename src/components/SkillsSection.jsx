import { useState } from "react";
import { cn } from "../lib/utils.js";

const skills = [
  {
    name: "HTML",
    level: "50%",
    category: "frontend",
  },
  {
    name: "CSS",
    level: "70%",
    category: "frontend",
  },
  {
    name: "Java Script",
    level: "80%",
    category: "frontend",
  },
  {
    name: "Tailwind",
    level: "10%",
    category: "frontend",
  },
  {
    name: "Next",
    level: "1%",
    category: "frontend",
  },
  {
    name: "Type Script",
    level: "100%",
    category: "frontend",
  },
  {
    name: "Git / GitHub",
    level: "100%",
    category: "tools",
  },
  {
    name: "Web Storm",
    level: "100%",
    category: "tools",
  },
  {
    name: "Node Js",
    level: "100%",
    category: "backend",
  },
  {
    name: "Express",
    level: "100%",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    level: "100%",
    category: "backend",
  },
  {
    name: "GraphQL",
    level: "100%",
    category: "backend",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory)

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/60 rounded-full h-2 overflow-x-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: `${skill.level}`,
                  }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
