import type { Metadata } from 'next';
import { AllProviders } from '@/providers/AllProviders';
import './globals.css';
import ThemeRegistry from '@/providers/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Mizu Firuta',
  description: 'Mizu Firuta',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          <AllProviders>
            {children}
          </AllProviders>
        </ThemeRegistry>
      </body>
    </html>
  );
}
