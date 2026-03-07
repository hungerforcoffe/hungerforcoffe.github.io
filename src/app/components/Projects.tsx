import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Análisis Predictivo de Datos',
      description: 'Sistema de machine learning para predicción de tendencias basado en análisis de datos complejos.',
      image: 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YXxlbnwxfHx8fDE3NzI4Mzk2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'TensorFlow', 'Pandas'],
      github: 'https://github.com',
      demo: 'https://ejemplo.com'
    },
    {
      title: 'Plataforma de Investigación',
      description: 'Herramienta colaborativa para gestión y análisis de experimentos científicos en laboratorio.',
      image: 'https://images.unsplash.com/photo-1614308457932-e16d85c5d053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW5jZSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzcyODM5NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://ejemplo.com'
    },
    {
      title: 'Visualización Molecular',
      description: 'Aplicación interactiva para visualización 3D de estructuras moleculares y simulaciones químicas.',
      image: 'https://images.unsplash.com/photo-1740666387475-548de5c37691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xlY3VsYXIlMjBzdHJ1Y3R1cmUlMjBjaGVtaXN0cnl8ZW58MXx8fHwxNzcyODA5Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Three.js', 'WebGL', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://ejemplo.com'
    },
    {
      title: 'Sistema de IoT Inteligente',
      description: 'Red de sensores conectados con análisis en tiempo real y dashboard de monitoreo.',
      image: 'https://images.unsplash.com/photo-1761078739233-629de9252840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBjaXJjdWl0fGVufDF8fHx8MTc3MjgzOTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Arduino', 'MQTT', 'React'],
      github: 'https://github.com',
      demo: 'https://ejemplo.com'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Proyectos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Una selección de mis trabajos en ciencia e investigación, con un enfoque en
            desarrollo de soluciones en base a datos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-background rounded-xl border border-border overflow-hidden hover:border-foreground/20 transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-muted/50 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Código
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
