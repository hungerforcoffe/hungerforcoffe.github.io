import { useState } from "react";

// SVGs inline para Power BI y Excel, devicons CDN para el resto
const skills = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  },
  {
    name: "Jupyter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "Matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "Power BI",
    svg: (
      <svg viewBox="0 0 24 24" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4v16H4z" fill="#F2C811"/>
        <path d="M10 7h4v13h-4z" fill="#F2C811" opacity="0.85"/>
        <path d="M16 2h4v18h-4z" fill="#F2C811" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "Excel",
    svg: (
      <svg viewBox="0 0 24 24" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="3" fill="#217346"/>
        <path d="M7 7l3.5 5L7 17h2.5l2-3.2 2 3.2H16l-3.5-5L16 7h-2.5l-1.98 3.1L9.5 7z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
];

function SkillCard({ name, icon, svg }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl border border-border bg-background cursor-default"
      style={{
        transition: "box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
        boxShadow: hovered
          ? "0 0 0 1px hsl(var(--border)), 0 8px 24px rgba(0,0,0,0.08)"
          : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        borderColor: hovered ? "hsl(var(--foreground) / 0.2)" : undefined,
      }}
    >
      <div
        style={{
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.25s ease, filter 0.25s ease",
          filter: hovered ? "none" : "grayscale(30%)",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {svg ? (
          svg
        ) : (
          <img src={icon} alt={name} style={{ width: 44, height: 44 }} />
        )}
      </div>
      <span
        className="text-sm text-center"
        style={{
          transition: "color 0.25s ease, font-weight 0.25s ease",
          color: hovered ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
          fontWeight: hovered ? 500 : 400,
        }}
      >
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Habilidades Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={i} name={skill.name} icon={skill.icon} svg={skill.svg} />
          ))}
        </div>
      </div>
    </section>
  );
}
