import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Contacto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Email</p>
                    <a href="mailto:contacto@ejemplo.com" className="hover:underline">
                      contacto@ejemplo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Teléfono</p>
                    <a href="tel:+34000000000" className="hover:underline">
                      +34 000 000 000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Ubicación</p>
                    <p>Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground">
                Disponible para proyectos freelance, colaboraciones y oportunidades de investigación.
              </p>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
