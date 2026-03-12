import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Lenguajes & Entornos",
    skills: [
      { name: "Python", pct: 92 },
      { name: "SQL", pct: 82 },
      { name: "Bash / Shell", pct: 72 },
      { name: "C+", pct: 58 },
    ],
  },
  {
    category: "Estadística & Métodos Cuantitativos",
    skills: [
      { name: "Estadística Inferencial", pct: 90 },
      { name: "Series de Tiempo", pct: 85 },
      { name: "Regresión & Modelado", pct: 88 },
      { name: "Métodos Bayesianos", pct: 70 },
    ],
  },
  {
    category: "Datos & Visualización",
    skills: [
      { name: "Pandas / NumPy / SciPy", pct: 90 },
      { name: "Matplotlib / Seaborn", pct: 85 },
      { name: "Excel Avanzado", pct: 80 },
      { name: "Power BI", pct: 75 },
    ],
  },
];

function SkillBar({ name, pct, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-muted-foreground">{name}</span>
        <span className="text-muted-foreground">{pct}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-slate-600 to-slate-400"
          style={{
            width: `${width}%`,
            transition: "width 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <div key={ci} className="p-6 bg-background rounded-xl border border-border">
              <h3 className="mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={si}
                    name={skill.name}
                    pct={skill.pct}
                    delay={ci * 100 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
