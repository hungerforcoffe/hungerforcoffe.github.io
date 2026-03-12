import React from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function Success() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 tech-grid">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-card p-10 rounded-3xl border border-border shadow-2xl text-center space-y-8"
      >
        <div className="flex justify-center">
          <div className="p-4 bg-green-500/10 rounded-full">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">¡Mensaje Recibido!</h1>
          <p className="text-muted-foreground">
            Gracias por ponerte en contacto. He recibido tu información y te responderé en el menor tiempo posible (usualmente menos de 24 horas).
          </p>
        </div>

        <div className="pt-6">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </a>
        </div>
        
        <div className="pt-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          Estado: Transmisión Completada
        </div>
      </motion.div>
    </div>
  );
}
