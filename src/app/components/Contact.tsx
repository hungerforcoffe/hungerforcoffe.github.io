import { useNavigate } from 'react-router';
import React, { useState } from 'react';

export function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        navigate('/success');
      } else {
        alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      alert('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground font-bold tracking-tight">Contacto</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            ¿Tienes un proyecto en mente o alguna consulta técnica? Envíame un mensaje y te responderé lo antes posible.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm">
            <form 
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xbdzobog" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ring transition-all placeholder:text-muted-foreground/50"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all placeholder:text-muted-foreground/50"
                  placeholder="Cuéntame sobre tu proyecto o duda..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
          
          <p className="text-center mt-8 text-sm text-muted-foreground font-mono uppercase tracking-widest opacity-60">
            Formulario Seguro • Sin Rastreadores
          </p>
        </div>
      </div>
    </section>
  );
}

