import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Kodelab - Soluciones Tecnológicas | Desarrollo de Software, SaaS, IoT y Monitoreo',
    description: 'Transformamos ideas en soluciones tecnológicas de alto impacto. Desarrollo de software a medida, plataformas SaaS escalables, soluciones IoT y sistemas de monitoreo avanzados.',
    keywords: 'desarrollo de software, SaaS, IoT, monitoreo, observabilidad, tracking, plataformas tecnológicas, desarrollo web, desarrollo móvil',
    authors: [{ name: 'Kodelab' }],
    openGraph: {
        title: 'Kodelab - Soluciones Tecnológicas',
        description: 'Desarrollo de software, SaaS, IoT y sistemas de monitoreo de alto impacto',
        type: 'website',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#6366f1',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
