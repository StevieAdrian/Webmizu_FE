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
