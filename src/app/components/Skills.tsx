export function Skills() {
  const skillCategories = [
    {
      category: 'Análisis & Estadística',
      icon: '◈',
      skills: [
        { name: 'Python', level: 'Experto' },
        { name: 'R', level: 'Avanzado' },
        { name: 'SQL', level: 'Experto' },
        { name: 'Estadística Inferencial', level: 'Avanzado' },
        { name: 'Series de Tiempo', level: 'Avanzado' },
      ]
    },
    {
      category: 'Quant & Machine Learning',
      icon: '◇',
      skills: [
        { name: 'Modelos Predictivos', level: 'Avanzado' },
        { name: 'Regresión & Clasificación', level: 'Experto' },
        { name: 'Optimización de Portafolios', level: 'Intermedio' },
        { name: 'Backtesting', level: 'Avanzado' },
        { name: 'NLP / Text Mining', level: 'Intermedio' },
      ]
    },
    {
      category: 'Herramientas & Visualización',
      icon: '○',
      skills: [
        { name: 'Pandas / NumPy', level: 'Experto' },
        { name: 'Power BI / Tableau', level: 'Avanzado' },
        { name: 'Excel Avanzado', level: 'Experto' },
        { name: 'Git & Docker', level: 'Avanzado' },
        { name: 'Bloomberg / APIs Financieras', level: 'Intermedio' },
      ]
    }
  ];

  const levelConfig = {
    'Experto':     { dots: 4, color: '#e2e8f0' },
    'Avanzado':    { dots: 3, color: '#94a3b8' },
    'Intermedio':  { dots: 2, color: '#64748b' },
  };

  return (
    <section id="habilidades" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Habilidades Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>

        {/* Leyenda */}
        <div className="flex justify-center gap-6 mb-12">
          {Object.entries(levelConfig).map(([label, { dots, color }]) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: i < dots ? color : 'transparent',
                      border: `1.5px solid ${color}`,
                    }}
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl text-muted-foreground">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const config = levelConfig[skill.level];
                  return (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <span
                              key={i}
                              style={{
                                display: 'inline-block',
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: i < config.dots ? config.color : 'transparent',
                                border: `1.5px solid ${config.color}`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
