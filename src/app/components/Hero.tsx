import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-muted/50 rounded-full mb-4">
            <p className="text-muted-foreground">Data Analyst & Quantitative Researcher</p>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
          Transformando datos en 
          <span className="block mt-2 pb-3 bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
            soluciones inteligentes
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Especializado en análisis de datos, ciencia de datos y machine learning. 
          Soluciones basadas en datos y estadistica.
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-12">
          <a 
            href="#proyectos" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Ver Proyectos
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
          >
            Contactar
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/hungerforcoffe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/pablo-rojas-silva-b25545193/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:p.rojassilva106@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
