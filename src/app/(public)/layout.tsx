import LayoutPublicRoute from '@/components/layout/public-routes';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <LayoutPublicRoute>{children}</LayoutPublicRoute>;
}
