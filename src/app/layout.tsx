import type { Metadata } from 'next';
import { AllProviders } from '@/providers/AllProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vyse',
  description: 'Vyse Application',
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
