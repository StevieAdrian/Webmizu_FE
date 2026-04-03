import styles from './RecentInvoices.module.scss';

const invoices = [
  {
    number: 'INV-2024-1245',
    desc: 'Contract Payment - Kitchen Filter',
    amount: '$180',
    status: 'Paid',
    statusStyle: 'statusPaid' as const,
    iconStyle: 'iconGreen' as const,
  },
  {
    number: 'INV-2024-1268',
    desc: 'Service Payment - Office Filter',
    amount: '$120',
    status: 'Pending',
    statusStyle: 'statusPending' as const,
    iconStyle: 'iconOrange' as const,
  },
  {
    number: 'INV-2024-1289',
    desc: 'Product Purchase - Bathroom Filter',
    amount: '$350',
    status: 'Paid',
    statusStyle: 'statusPaid' as const,
    iconStyle: 'iconBlue' as const,
  },
];

export default function RecentInvoices() {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Recent Invoices</h2>
        <a href="#" className={styles.viewAll}>View All →</a>
      </div>

      <div className={styles.list}>
        {invoices.map((inv) => (
          <div key={inv.number} className={styles.invoice}>
            <div className={`${styles.invoiceIcon} ${styles[inv.iconStyle]}`}>
              <span className={`material-symbols-outlined ${styles.invoiceIconSymbol}`}>
                description
              </span>
            </div>
            <div className={styles.invoiceContent}>
              <h4 className={styles.invoiceNumber}>{inv.number}</h4>
              <p className={styles.invoiceDesc}>{inv.desc}</p>
            </div>
            <div className={styles.invoiceRight}>
              <div className={styles.invoiceAmount}>{inv.amount}</div>
              <span className={`${styles.invoiceStatus} ${styles[inv.statusStyle]}`}>{inv.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
