import styles from './QuickActions.module.scss';

const actions = [
  { icon: 'add', label: 'Request Service', variant: 'actionPrimary' as const, chevron: 'chevron_right' },
  { icon: 'shopping_cart', label: 'Browse Products', variant: 'actionDefault' as const, chevron: 'chevron_right' },
  { icon: 'receipt_long', label: 'View Invoices', variant: 'actionDefault' as const, chevron: 'chevron_right' },
  { icon: 'help', label: 'Contact Support', variant: 'actionDefault' as const, chevron: 'chevron_right' },
  { icon: 'chat', label: 'WhatsApp Support', variant: 'actionWhatsapp' as const, chevron: 'open_in_new' },
];

export default function QuickActions() {
  return (
    <div>
      <h2 className={styles.title}>Quick Actions</h2>
      <div className={styles.card}>
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`${styles.actionBtn} ${styles[action.variant]}`}
          >
            <span className={styles.actionBtnContent}>
              <span className={`material-symbols-outlined ${styles.actionIcon}`}>{action.icon}</span>
              {action.label}
            </span>
            <span className={`material-symbols-outlined ${styles.chevronIcon}`}>{action.chevron}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
