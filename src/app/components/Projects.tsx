import { ExternalLink, Github, GithubIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Análisis de datos Radioastronomía ALMA',
      description: 'Análisis para proyecto de cálculo de pérdida de masa de estrellas AGB/Post-AGB.',
      image: 'https://images.unsplash.com/photo-1695335821100-26b558645945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'Matplotlib', 'Pandas'],
      github: 'https://github.com/hungerforcoffe/Stellar-spectral-scans-with-the-ALMA-Compact-Array',
      closedSource: false,
    },
    {
      title: 'Scraping Web / Análisis Paquetes Latam Chile',
      description: 'Herramienta para el análisis temporal de precios de paquetes LATAM Chile.',
      image: 'https://images.unsplash.com/photo-1615317779547-2078d82c549a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'HTML', 'SQLite'],
      github: 'https://github.com/hungerforcoffe/Skylines-price-overtime-Chile-LATAM',
      closedSource: false,
    },
    {
      title: 'VLTI/AMBER — Estrellas AGB con Molsphere',
      description: 'Análisis de 14 estrellas con presencia de Molsphere para construir un modelo simple LTE. Investigación de 2 años.',
      image: 'https://images.unsplash.com/photo-1579899967070-4ec07e4ff5c5?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'Bash', 'Matplotlib'],
      github: null,
      closedSource: true,
    },
  ];

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Proyectos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-xl border border-border overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {project.closedSource ? (
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/60 border border-border">
                      <div className="relative shrink-0 mt-0.5">
                        <Github size={18} className="text-muted-foreground" />
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ transform: 'rotate(-45deg)' }}
                        >
                          <div className="w-full h-px bg-muted-foreground" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Código cerrado — investigación privada.{' '}
                        
                          href="#contacto"
                          className="underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                          Contáctame
                        </a>{' '}
                        si quieres saber más.
                      </p>
                    </div>
                  ) : (
                    
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} />
                      Ver en GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
