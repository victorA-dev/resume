import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Content } from '../components/content/Content';
import { Header } from '../components/header/Header';
import './globals.css';

export const metadata: Metadata = {
    title: { default: 'Victor Antoine', template: '%s | Victor Antoine' },
};

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} font-sans`}>
                <Header />
                <Content>{children}</Content>
            </body>
        </html>
    );
}
