/**
 * SERVICES COMPONENT
 * Four service cards with glassmorphism design
 */

import React from 'react';

export default function Services() {
    const services = [
        {
            icon: '💻',
            title: 'Desarrollo de Software',
            description: 'Aplicaciones web y móviles a medida, arquitecturas escalables y código limpio. Utilizamos las mejores prácticas de ingeniería de software para crear soluciones robustas y mantenibles.',
            features: ['Apps Web & Móvil', 'APIs RESTful', 'Microservicios', 'Arquitectura Cloud']
        },
        {
            icon: '☁️',
            title: 'Plataformas SaaS',
            description: 'Diseño y desarrollo de plataformas SaaS multi-tenant con alta disponibilidad. Desde el MVP hasta la escala empresarial, construimos productos que crecen con tu negocio.',
            features: ['Multi-tenant', 'Escalabilidad', 'Seguridad', 'Integraciones']
        },
        {
            icon: '📊',
            title: 'Monitoreo y Observabilidad',
            description: 'Sistemas de monitoreo en tiempo real, dashboards personalizados y alertas inteligentes. Mantén el control total de tu infraestructura y aplicaciones.',
            features: ['Métricas en Tiempo Real', 'Alertas Proactivas', 'Dashboards', 'Logs Centralizados']
        },
        {
            icon: '🌐',
            title: 'IoT y Tracking',
            description: 'Soluciones IoT end-to-end, desde dispositivos hasta plataformas de gestión. Conecta, monitorea y controla tus dispositivos desde cualquier lugar.',
            features: ['Conectividad IoT', 'Gestión de Dispositivos', 'Analytics', 'Edge Computing']
        }
    ];

    return (
        <section id="servicios" className="section">
            <div className="container">
                <h2 className="section-title text-gradient">Nuestros Servicios</h2>
                <p className="section-subtitle">
                    Soluciones tecnológicas integrales para impulsar tu transformación digital
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-bullet">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-2xl);
        }
        
        .service-card {
          padding: var(--spacing-xl);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .service-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
          display: inline-block;
        }
        
        .service-title {
          font-size: var(--font-size-xl);
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-sm);
        }
        
        .service-description {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-md);
          flex-grow: 1;
          line-height: 1.6;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .service-features li {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-xs);
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: var(--font-size-sm);
        }
        
        .feature-bullet {
          color: var(--color-accent-primary);
          font-weight: bold;
          font-size: var(--font-size-base);
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
