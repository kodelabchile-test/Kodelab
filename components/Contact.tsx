/**
 * CONTACT COMPONENT
 * Contact form with validation
 */

'use client';

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate form submission
        // In production, replace with actual API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormStatus('success');
            setFormData({ nombre: '', email: '', mensaje: '' });

            setTimeout(() => {
                setFormStatus('idle');
            }, 3000);
        }, 1000);
    };

    return (
        <section id="contacto" className="section">
            <div className="container">
                <h2 className="section-title text-gradient">Hablemos de tu Proyecto</h2>
                <p className="section-subtitle">
                    ¿Tienes una idea? Cuéntanos y te ayudaremos a hacerla realidad
                </p>

                <div className="contact-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form glass-card">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                                placeholder="Cuéntanos sobre tu proyecto..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>

                        {formStatus === 'success' && (
                            <div className="form-message success">
                                ✓ ¡Mensaje enviado! Te contactaremos pronto.
                            </div>
                        )}

                        {formStatus === 'error' && (
                            <div className="form-message error">
                                ✗ Hubo un error. Por favor intenta nuevamente.
                            </div>
                        )}
                    </form>

                    <div className="contact-info">
                        <div className="info-card glass-card">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <p>contacto@kodelab.tech</p>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">📍</div>
                            <h3>Ubicación</h3>
                            <p>Trabajamos de forma remota</p>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">⏰</div>
                            <h3>Horario</h3>
                            <p>Lun - Vie: 9:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-2xl);
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .contact-form {
          padding: var(--spacing-xl);
        }
        
        .form-group {
          margin-bottom: var(--spacing-lg);
        }
        
        .form-group label {
          display: block;
          margin-bottom: var(--spacing-xs);
          color: var(--color-text-primary);
          font-weight: 600;
          font-size: var(--font-size-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .form-message {
          margin-top: var(--spacing-md);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          text-align: center;
          font-weight: 500;
        }
        
        .form-message.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }
        
        .form-message.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }
        
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-md);
        }
        
        .info-card {
          padding: var(--spacing-lg);
          text-align: center;
        }
        
        .info-icon {
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
        }
        
        .info-card h3 {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-xs);
        }
        
        .info-card p {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        @media (min-width: 769px) {
          .contact-wrapper {
            grid-template-columns: 2fr 1fr;
          }
          
          .contact-info {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .contact-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
