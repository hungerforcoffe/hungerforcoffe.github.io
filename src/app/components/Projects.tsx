import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Analsís de datos Radioastronomía ALMA',
      description: 'Analisis para proyecto de calculo de perdida de masa de estrellas AGB/Post-AGB.',
      image: 'https://images.unsplash.com/photo-1695335821100-26b558645945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'Matplotlib', 'Pandas'],
      github: 'https://github.com/hungerforcoffe/Stellar-spectral-scans-with-the-ALMA-Compact-Array'
    },
    {
      title: 'Scraping Web/Analisis Paquetes Latam Chile',
      description: 'Herramienta para el analisis temporal de precios de paquetes LATAM Chile',
      image: 'https://images.unsplash.com/photo-1615317779547-2078d82c549a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'HTML', 'SQLite'],
      github: 'https://github.com/hungerforcoffe/Skylines-price-overtime-Chile-LATAM'
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
