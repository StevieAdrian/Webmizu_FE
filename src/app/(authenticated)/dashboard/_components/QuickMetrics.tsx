import styles from './QuickMetrics.module.scss';

const metrics = [
  {
    value: '3',
    label: 'Active Products',
    icon: 'shield',
    iconStyle: 'iconBlue' as const,
    badge: 'Active',
    badgeStyle: 'badgeGreen' as const,
  },
  {
    value: 'Dec 28',
    label: 'Next Service',
    icon: 'calendar_month',
    iconStyle: 'iconGreen' as const,
    badge: 'Upcoming',
    badgeStyle: 'badgeBlue' as const,
  },
  {
    value: '$450',
    label: 'Outstanding',
    icon: 'account_balance_wallet',
    iconStyle: 'iconPurple' as const,
    badge: '2 Pending',
    badgeStyle: 'badgePurple' as const,
  },
  {
    value: '2',
    label: 'Active Contracts',
    icon: 'description',
    iconStyle: 'iconOrange' as const,
    badge: '2 Active',
    badgeStyle: 'badgeOrange' as const,
  },
];

export default function QuickMetrics() {
  return (
    <section className={styles.grid}>
      {metrics.map((m) => (
        <div key={m.label} className={styles.card}>
          <div>
            <div className={styles.value}>{m.value}</div>
            <div className={styles.label}>{m.label}</div>
          </div>
          <div className={styles.cardRight}>
            <div className={`${styles.iconWrap} ${styles[m.iconStyle]}`}>
              <span className={`material-symbols-outlined ${styles.metricIcon}`}>{m.icon}</span>
            </div>
            <span className={`${styles.badge} ${styles[m.badgeStyle]}`}>{m.badge}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
