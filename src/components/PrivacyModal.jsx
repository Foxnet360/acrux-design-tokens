import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

/**
 * PrivacyModal - Shared privacy policy modal for the ACRUX ecosystem
 *
 * Uses CSS transitions instead of Framer Motion for zero heavy dependencies.
 * Fully customizable via props.
 */
const PrivacyModal = ({
  isOpen,
  onClose,
  title = 'Política de Privacidad',
  acceptButtonText = 'Entendido',
  projectName = 'ACRUX',
  children,
  className = ''
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${className}`}>
      {/* Backdrop with CSS fade-in */}
      <div
        className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm transition-opacity duration-300 ease-out opacity-100"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal with CSS scale + translate transition */}
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col transition-all duration-300 ease-out scale-100 opacity-100 translate-y-0"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary-100">
          <h3
            id="privacy-modal-title"
            className="font-display text-xl font-bold text-primary-900"
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-50 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 text-primary-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children || (
            <div className="space-y-6">
              <p className="text-primary-600 leading-relaxed">
                En {projectName}, nos comprometemos a proteger tu información personal.
                Esta política de privacidad describe cómo recopilamos, usamos y protegemos tus datos.
              </p>

              <section className="space-y-2">
                <h4 className="font-display font-bold text-primary-900">1. Información que Recopilamos</h4>
                <p className="text-primary-600 text-sm leading-relaxed">
                  Recopilamos: nombre, correo electrónico, nombre de empresa, tamaño de empresa,
                  respuestas al cuestionario y puntuación de madurez digital.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display font-bold text-primary-900">2. Uso de la Información</h4>
                <p className="text-primary-600 text-sm leading-relaxed">
                  Utilizamos tu información para: generar tu diagnóstico personalizado,
                  enviarte el reporte por correo, contactarte sobre servicios de consultoría
                  (solo si das tu consentimiento), y mejorar nuestros servicios.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display font-bold text-primary-900">3. Protección de Datos</h4>
                <p className="text-primary-600 text-sm leading-relaxed">
                  Tus datos se almacenan de forma segura en servidores con cifrado SSL.
                  No compartimos tu información con terceros sin tu consentimiento explícito.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-display font-bold text-primary-900">4. Tus Derechos</h4>
                <p className="text-primary-600 text-sm leading-relaxed">
                  Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos.
                  Para ejercer estos derechos, contacta a: contacto@acrux.life
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-primary-100 flex items-center justify-between bg-primary-50">
          <a
            href="https://acrux.life/privacidad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-accent-dark flex items-center gap-1 transition-colors"
          >
            Ver política completa
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-accent text-white rounded-xl font-semibold hover:bg-accent-dark transition-colors"
          >
            {acceptButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
