/**
 * HERO COMPONENT
 * Main landing section with value proposition and CTA
 */

import React from 'react';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    {/* Main Heading */}
                    <h1 className="hero-title fade-in-up">
                        Transformamos Ideas en Soluciones Tecnológicas
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle fade-in-up">
                        Desarrollo de software a medida, plataformas SaaS escalables,
                        soluciones IoT inteligentes y sistemas de monitoreo avanzados
                        para impulsar tu negocio al siguiente nivel.
                    </p>

                    {/* Service Tags */}
                    <div className="hero-tags fade-in-up">
                        <span className="tag">Desarrollo de Software</span>
                        <span className="tag">SaaS</span>
                        <span className="tag">IoT</span>
                        <span className="tag">Monitoreo</span>
                    </div>

                    {/* CTA Button */}
                    <div className="hero-cta fade-in-up">
                        <a href="#contacto" className="btn btn-primary">
                            Comienza tu Proyecto
                        </a>
                        <a href="#servicios" className="btn btn-secondary">
                            Conoce Nuestros Servicios
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-hero);
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: var(--spacing-2xl) 0;
          position: relative;
          z-index: 1;
        }
        
        .hero-title {
          font-size: var(--font-size-6xl);
          font-weight: 800;
          margin-bottom: var(--spacing-lg);
          line-height: 1.1;
          animation-delay: 0.1s;
        }
        
        .hero-subtitle {
          font-size: var(--font-size-xl);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-xl);
          line-height: 1.6;
          animation-delay: 0.2s;
        }
        
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
          justify-content: center;
          margin-bottom: var(--spacing-xl);
          animation-delay: 0.3s;
        }
        
        .tag {
          padding: var(--spacing-xs) var(--spacing-md);
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--color-accent-primary);
          backdrop-filter: blur(10px);
          transition: all var(--transition-base);
        }
        
        .tag:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: var(--color-accent-primary);
          transform: translateY(-2px);
        }
        
        .hero-cta {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
          animation-delay: 0.4s;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-4xl);
          }
          
          .hero-subtitle {
            font-size: var(--font-size-lg);
          }
          
          .hero-cta {
            flex-direction: column;
          }
          
          .hero-cta .btn {
            width: 100%;
          }
        }
      `}</style>
        </section>
    );
}
