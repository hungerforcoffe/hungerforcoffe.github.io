import { Atom, Brain, Code2, Database } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Desarrollo de modelos predictivos y sistemas inteligentes'
    },
    {
      icon: Database,
      title: 'Análisis de Datos',
      description: 'Extracción de insights valiosos desde grandes volúmenes de datos'
    },
    {
      icon: Code2,
      title: 'Programación y Desarrollo',
      description: 'Creación de soluciones técnicas eficientes y escalables para problemas complejos'
    },
    {
      icon: Atom,
      title: 'Investigación',
      description: 'Experiencia en investigación cuantitativa y análisis estadístico para respaldar decisiones basadas en datos'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Sobre Mí</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Apasionado por la intersección entre la ciencia, la tecnología y la innovación.
            Mi enfoque combina rigor científico con creatividad técnica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-background rounded-xl border border-border hover:border-foreground/20 transition-colors"
            >
              <feature.icon className="w-10 h-10 mb-4 text-muted-foreground" strokeWidth={1.5} />
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
