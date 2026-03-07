export function Skills() {
  const skillCategories = [
    {
      category: 'Ciencia de Datos',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'TensorFlow', level: 80 }
      ]
    },
    {
      category: 'Desarrollo Web',
      skills: [
        { name: 'React', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      category: 'Herramientas & DevOps',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 82 },
        { name: 'AWS', level: 78 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Habilidades Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border border-border">
              <h3 className="mb-6">{category.category}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-slate-600 to-slate-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
