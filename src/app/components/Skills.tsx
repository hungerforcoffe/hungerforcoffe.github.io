import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Lenguajes & Entornos",
    skills: [
      { name: "Python", pct: 92 },
      { name: "SQL", pct: 82 },
      { name: "Bash / Shell", pct: 72 },
      { name: "R", pct: 58 },
    ],
  },
  {
    category: "Estadística & Métodos Cuantitativos",
    skills: [
      { name: "Estadística Inferencial", pct: 90 },
      { name: "Análisis de Series de Tiempo", pct: 85 },
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
      { name: "Git & Control de Versiones", pct: 75 },
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
    <div ref={ref} className="group">
      <div className="flex justify-between items-baseline mb-2">
        <span
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.02em" }}
          className="text-slate-300"
        >
          {name}
        </span>
        <span
          style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem" }}
          className="text-slate-500 tabular-nums"
        >
          {width > 0 ? `${pct}%` : "—"}
        </span>
      </div>
      <div
        className="relative rounded-full overflow-hidden"
        style={{ height: "6px", background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${width}%`,
            transition: "width 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
            background: "linear-gradient(90deg, #475569 0%, #94a3b8 60%, #cbd5e1 100%)",
            boxShadow: width > 0 ? "0 0 12px rgba(148,163,184,0.25)" : "none",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700&display=swap');
      `}</style>

      <section
        id="habilidades"
        style={{
          background: "linear-gradient(160deg, #0a0f1a 0%, #0d1420 50%, #0a0e18 100%)",
          fontFamily: "'Syne', sans-serif",
        }}
        className="py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                color: "#64748b",
              }}
              className="uppercase mb-4"
            >
              Stack técnico
            </p>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                fontWeight: 700,
                color: "#f1f5f9",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Habilidades
              <br />
              <span style={{ color: "#475569" }}>Técnicas</span>
            </h2>
            <div
              style={{ width: 40, height: 2, background: "#334155", marginTop: 20 }}
            />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {skillCategories.map((cat, ci) => (
              <div key={ci}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    color: "#475569",
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    borderLeft: "2px solid #1e293b",
                    paddingLeft: "0.75rem",
                  }}
                >
                  {cat.category}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={si}
                      name={skill.name}
                      pct={skill.pct}
                      delay={ci * 120 + si * 80}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
