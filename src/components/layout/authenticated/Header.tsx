'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'My Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Invoices', href: '/invoices' },
  { label: 'Support', href: '/support' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <span className={`material-symbols-outlined ${styles.brandLogoIcon}`}>
              water_drop
            </span>
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>WEBMIZU</span>
            <span className={styles.brandSub}>Customer Portal</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.notifButton} type="button">
            <span className={`material-symbols-outlined ${styles.notifIcon}`}>
              notifications
            </span>
            <span className={styles.notifBadge}>3</span>
          </button>

          <div className={styles.profile}>
            <div className={styles.profileInfo}>
              <div className={styles.profileName}>John Anderson</div>
              <div className={styles.profileId}>Customer ID: AC11032</div>
            </div>
            <div className={styles.profileAvatar}>
              <span className={`material-symbols-outlined ${styles.avatarIcon}`}>
                account_circle
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
