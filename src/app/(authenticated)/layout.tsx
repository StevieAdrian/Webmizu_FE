import LayoutAuthenticated from '@/components/layout/authenticated';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return <LayoutAuthenticated>{children}</LayoutAuthenticated>;
}
