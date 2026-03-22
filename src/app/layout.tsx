import type { Metadata } from 'next';
import { AllProviders } from '@/providers/AllProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mizu Firuta',
  description: 'Mizu Firuta',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AllProviders>
          {children}
        </AllProviders>
      </body>
    </html>
  );
}
