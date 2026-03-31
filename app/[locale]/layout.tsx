// 全局布局文件

import type { Metadata, Viewport } from 'next';
import '../globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Shengxin Plastic | Custom Modified Plastics for Global Manufacturing',
  description:
    'Ningbo Shengxin Plastic - Engineering-grade modified plastics including PP, PA, ABS, PC. 10,000+ tons capacity, ISO 9001 certified. Serving automotive, appliances, electronics & industrial sectors worldwide.',
  keywords:
    'modified plastics, plastic compounding, engineering plastics, custom compounds, PP PA ABS PC, Ningbo manufacturer, China plastics',
  authors: [{ name: 'Shengxin Plastic' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1B5E3A',
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
