import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CursorProvider } from '@/context/CursorContext';
import { CustomCursor } from '@/components/layout/CustomCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Suryash Yadav | B.Tech CSE Student & Developer Portfolio',
  description: 'Personal engineering portfolio of Suryash Yadav, 2nd-year B.Tech Computer Science Engineering student at GLA University, Mathura. Focused on C++, Python, Data Structures, Algorithms, DBMS, and Web Engineering.',
  keywords: [
    'Suryash Yadav',
    'GLA University',
    'Mathura',
    'B.Tech CSE',
    'Computer Science Student',
    'Data Structures and Algorithms',
    'C++',
    'Python',
    'Software Engineering',
    'Portfolio'
  ],
  authors: [{ name: 'Suryash Yadav' }],
  creator: 'Suryash Yadav',
  openGraph: {
    title: 'Suryash Yadav | B.Tech CSE — 2nd Year Portfolio',
    description: 'Explore the technical work, algorithmic projects, skills, and journey of Suryash Yadav (GLA University, Mathura).',
    url: 'https://suryashyadav.dev',
    siteName: 'Suryash Yadav Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${plusJakarta.variable} scroll-smooth dark`}>
      <body className="bg-[#08080a] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
