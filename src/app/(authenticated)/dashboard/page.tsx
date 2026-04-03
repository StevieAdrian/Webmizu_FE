import styles from './page.module.scss';
import HeroSection from './_components/HeroSection';
import QuickMetrics from './_components/QuickMetrics';
import ServicesReminders from './_components/ServicesReminders';
import QuickActions from './_components/QuickActions';
import ProductsGrid from './_components/ProductsGrid';
import RecentInvoices from './_components/RecentInvoices';
import SupportChat from './_components/SupportChat';

export default function DashboardPage() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <HeroSection />
      </div>

      <div className={styles.section}>
        <QuickMetrics />
      </div>

      <div className={styles.middleGrid}>
        <ServicesReminders />
        <QuickActions />
      </div>

      <div className={styles.section}>
        <ProductsGrid />
      </div>

      <div className={styles.bottomGrid}>
        <RecentInvoices />
        <SupportChat />
      </div>
    </main>
  );
}
