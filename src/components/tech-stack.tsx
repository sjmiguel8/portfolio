import React from 'react';
import './tech-stack.css';

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"],
  },
];

export default function TechStack() {
  return (
    <div className="tech-stack-grid">
      {technologies.map((tech) => (
        <div key={tech.category} className="tech-category-card">
          <h3 className="tech-category-title">{tech.category}</h3>
          <div className="tech-skills-container">
            {tech.skills.map((skill) => (
              <span key={skill} className="tech-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
