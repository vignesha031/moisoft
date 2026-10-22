import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { company } from '@/data/content';
import './globals.css';
const english = localFont({ src: '../fonts/english.woff2', display: 'swap', variable: '--font-english', weight: '200 800' });
const tamil = localFont({ src: '../fonts/tamil.woff2', display: 'swap', variable: '--font-tamil', weight: '100 900' });
const title = 'MoiSoft | Digital Moi Management in Madurai';
const description = 'மதுரையில் கம்ப்யூட்டர் மொய் பதிவு. MoiSoft helps Tamil families with computerized Moi entry, notebook organization and function enquiries. Contact us on WhatsApp.';
export const metadata: Metadata = { metadataBase: new URL(company.site), title, description, alternates: { canonical: '/' }, openGraph: { type: 'website', locale: 'ta_IN', alternateLocale: ['en_IN'], title, description, url: '/', siteName: 'MoiSoft', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'MoiSoft — Traditional Moi. Modern Digital Experience.' }] }, twitter: { card: 'summary_large_image', title, description }, robots: { index: true, follow: true } };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffffff' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ta" className={`${english.variable} ${tamil.variable}`}><body>{children}</body></html>; }
