import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/app/components/navbar/navbar';
import { Modal } from '@/app/components/modals/modal';
import { RegisterModal } from '@/app/components/modals/register-modal';
import ToasterProvider from '@/app/providers/toaster-provider';
import { LoginModal } from '@/app/components/modals/login-modal';
import { RentModal } from '@/app/components/modals/rent-modal';

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
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar />
        <div className="pb-24 pt-24">{children}</div>
      </body>
    </html>
  );
}
