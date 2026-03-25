import LoginForm from './_components/LoginForm';
import Footer from '@/components/layout/public-routes/Footer';
import styles from './page.module.scss';

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.blurTop} />
        <div className={styles.blurBottom} />

        <div className={styles.container}>
          <div className={styles.branding}>
            <div className={styles.brandLogo}>
              <span className={`material-symbols-outlined ${styles.brandIcon}`}>
                cloud_done
              </span>
              <span className={styles.brandName}>Webmizu</span>
            </div>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>
              Enter your credentials to access your portal
            </p>
          </div>

          <LoginForm />

          <div className={styles.trustBadge}>
            <span className={`material-symbols-outlined ${styles.trustIcon}`}>
              security
            </span>
            <span className={styles.trustText}>Secure Infrastructure</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
