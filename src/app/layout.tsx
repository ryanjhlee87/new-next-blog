import Header from '@/components/Header';
import './globals.css';
import { Open_Sans, Dancing_Script } from 'next/font/google';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });
export const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Jennifer Miller',
    template: "Jennifer Miller's Dev Blog | %s",
  },
  description: "Jennifer Miller's Dev Blog",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full mx-auto">
        <Header />
        <main className="grow w-full max-w-screen-2xl mx-auto px-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
