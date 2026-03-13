import { useState } from "react";

const skills = [
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Bash",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "R",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "Pandas",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Jupyter",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Linux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "VS Code",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Excel",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftoffice/microsoftoffice-plain.svg" },
];

function SkillCard({ name, icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl border border-border bg-background cursor-default"
      style={{
        transition: "box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
        boxShadow: hovered ? "0 0 0 1px hsl(var(--border)), 0 8px 24px rgba(0,0,0,0.08)" : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        borderColor: hovered ? "hsl(var(--foreground) / 0.2)" : undefined,
      }}
    >
      <img
        src={icon}
        alt={name}
        style={{
          width: 44,
          height: 44,
          opacity: hovered ? 1 : 0.65,
          transition: "opacity 0.25s ease, filter 0.25s ease",
          filter: hovered ? "none" : "grayscale(30%)",
        }}
      />
      <span
        className="text-muted-foreground text-sm text-center"
        style={{
          transition: "color 0.25s ease",
          color: hovered ? "hsl(var(--foreground))" : undefined,
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
            <SkillCard key={i} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
