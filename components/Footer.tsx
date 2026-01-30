/**
 * FOOTER COMPONENT
 * Corporate footer with company information
 */

import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">Kodelab</h3>
                        <p className="footer-tagline">
                            Transformando ideas en soluciones tecnológicas de alto impacto
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Servicios</h4>
                        <ul className="footer-links">
                            <li><a href="#servicios">Desarrollo de Software</a></li>
                            <li><a href="#servicios">Plataformas SaaS</a></li>
                            <li><a href="#servicios">Monitoreo y Observabilidad</a></li>
                            <li><a href="#servicios">IoT y Tracking</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Empresa</h4>
                        <ul className="footer-links">
                            <li><a href="#about">Sobre Nosotros</a></li>
                            <li><a href="#proceso">Cómo Trabajamos</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Síguenos</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <span>in</span>
                            </a>
                            <a href="#" className="social-link" aria-label="GitHub">
                                <span>gh</span>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <span>tw</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Kodelab. Todos los derechos reservados.</p>
                    <div className="footer-legal">
                        <a href="#">Política de Privacidad</a>
                        <span>•</span>
                        <a href="#">Términos de Servicio</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer {
          background: var(--color-bg-secondary);
          border-top: 1px solid var(--glass-border);
          padding: var(--spacing-3xl) 0 var(--spacing-lg);
          margin-top: var(--spacing-3xl);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
        }
        
        .footer-section h3,
        .footer-section h4 {
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-md);
        }
        
        .footer-logo {
          font-size: var(--font-size-2xl);
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .footer-tagline {
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
          line-height: 1.6;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: var(--spacing-xs);
        }
        
        .footer-links a {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          transition: color var(--transition-fast);
        }
        
        .footer-links a:hover {
          color: var(--color-accent-primary);
        }
        
        .social-links {
          display: flex;
          gap: var(--spacing-sm);
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          font-weight: 600;
          transition: all var(--transition-base);
        }
        
        .social-link:hover {
          background: var(--color-accent-primary);
          border-color: var(--color-accent-primary);
          color: white;
          transform: translateY(-2px);
        }
        
        .footer-bottom {
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }
        
        .footer-bottom p {
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .footer-legal {
          display: flex;
          gap: var(--spacing-sm);
          align-items: center;
        }
        
        .footer-legal a {
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
        }
        
        .footer-legal span {
          color: var(--color-text-muted);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
        </footer>
    );
}
