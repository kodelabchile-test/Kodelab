/**
 * ABOUT COMPONENT
 * "¿Qué es Kodelab?" section with professional and technical focus
 */

import React from 'react';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title text-gradient">¿Qué es Kodelab?</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="lead-text">
                            <strong>Kodelab</strong> es una empresa tecnológica especializada en el desarrollo
                            de soluciones digitales de alto impacto. Combinamos experiencia técnica,
                            metodologías ágiles y tecnologías de vanguardia para crear productos que
                            transforman negocios.
                        </p>

                        <p>
                            Nuestro equipo de ingenieros y arquitectos de software trabaja en estrecha
                            colaboración con nuestros clientes para entender sus desafíos únicos y diseñar
                            soluciones escalables, seguras y eficientes.
                        </p>

                        <p>
                            Desde aplicaciones empresariales complejas hasta plataformas SaaS multi-tenant,
                            sistemas IoT distribuidos y herramientas de observabilidad en tiempo real,
                            dominamos el stack tecnológico completo para entregar resultados excepcionales.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card glass-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Proyectos Completados</div>
                        </div>

                        <div className="stat-card glass-card">
                            <div className="stat-number">99.9%</div>
                            <div className="stat-label">Uptime Garantizado</div>
                        </div>

                        <div className="stat-card glass-card">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Soporte Técnico</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-2xl);
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .about-text {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          backdrop-filter: blur(10px);
        }
        
        .lead-text {
          font-size: var(--font-size-lg);
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-lg);
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
        }
        
        .stat-card {
          text-align: center;
          padding: var(--spacing-xl);
        }
        
        .stat-number {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--spacing-sm);
        }
        
        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        @media (max-width: 768px) {
          .about-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
