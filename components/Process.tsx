/**
 * PROCESS COMPONENT
 * "Cómo trabajamos" - Four-step workflow visualization
 */

import React from 'react';

export default function Process() {
    const steps = [
        {
            number: '01',
            title: 'Análisis',
            description: 'Estudiamos tus necesidades, objetivos y desafíos. Realizamos un análisis profundo del contexto técnico y de negocio para definir la mejor estrategia.',
            icon: '🔍'
        },
        {
            number: '02',
            title: 'Diseño',
            description: 'Diseñamos la arquitectura, interfaces y flujos de trabajo. Creamos prototipos y validamos la solución antes de comenzar el desarrollo.',
            icon: '✏️'
        },
        {
            number: '03',
            title: 'Desarrollo',
            description: 'Implementamos la solución utilizando metodologías ágiles. Entregas iterativas, código de calidad y pruebas continuas garantizan el éxito del proyecto.',
            icon: '⚙️'
        },
        {
            number: '04',
            title: 'Despliegue',
            description: 'Desplegamos en producción con estrategias de CI/CD. Monitoreo continuo, documentación completa y soporte post-lanzamiento aseguran la estabilidad.',
            icon: '🚀'
        }
    ];

    return (
        <section id="proceso" className="section">
            <div className="container">
                <h2 className="section-title text-gradient">Cómo Trabajamos</h2>
                <p className="section-subtitle">
                    Un proceso probado que garantiza resultados excepcionales
                </p>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-card glass-card">
                                <div className="step-number">{step.number}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <div className="connector-line"></div>
                                    <div className="connector-arrow">→</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .process-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-md);
          margin-top: var(--spacing-2xl);
          position: relative;
        }
        
        .process-step {
          position: relative;
        }
        
        .step-card {
          padding: var(--spacing-xl);
          height: 100%;
          text-align: center;
          position: relative;
        }
        
        .step-number {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: var(--spacing-sm);
        }
        
        .step-icon {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-md);
        }
        
        .step-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-sm);
        }
        
        .step-description {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          line-height: 1.6;
        }
        
        .step-connector {
          display: none;
        }
        
        @media (min-width: 769px) {
          .process-timeline {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .step-connector {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: -2rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
          }
          
          .connector-arrow {
            font-size: var(--font-size-2xl);
            color: var(--color-accent-primary);
            animation: pulse 2s ease-in-out infinite;
          }
          
          .process-step:last-child .step-connector {
            display: none;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translateX(0);
          }
          50% {
            opacity: 1;
            transform: translateX(5px);
          }
        }
        
        @media (max-width: 768px) {
          .process-timeline {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
