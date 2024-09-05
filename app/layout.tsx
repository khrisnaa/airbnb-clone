import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/app/components/navbar/navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const nunito = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={` ${nunito.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
