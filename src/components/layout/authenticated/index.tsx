import Header from './Header';
import Footer from '@/components/layout/public-routes/Footer';

interface LayoutAuthenticatedProps {
  children: React.ReactNode;
}

export default function LayoutAuthenticated({ children }: LayoutAuthenticatedProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
