import styles from './ProductsGrid.module.scss';

const products = [
  {
    name: 'Kitchen Water Filter',
    model: 'Model: AquaPure Pro S200',
    location: 'Kitchen, Main House',
    installed: 'Installed: Jan 15, 2024',
    status: 'Active',
    progressLabel: 'Contract Progress',
    progressValue: '4/6 services',
    progressPercent: 66,
    actionLabel: 'View Details',
    iconColor: 'iconBlue' as const,
    infoIconColor: 'infoIconBlue' as const,
    progressColor: 'progressBlue' as const,
    barColor: 'barBlue' as const,
    btnColor: 'btnBlue' as const,
  },
  {
    name: 'Office Water Filter',
    model: 'Model: CleanFlow Business 5000',
    location: 'Office Building, Floor 3',
    installed: 'Installed: Mar 22, 2024',
    status: 'Active',
    progressLabel: 'Contract Progress',
    progressValue: '2/4 services',
    progressPercent: 50,
    actionLabel: 'View Details',
    iconColor: 'iconPurple' as const,
    infoIconColor: 'infoIconPurple' as const,
    progressColor: 'progressPurple' as const,
    barColor: 'barPurple' as const,
    btnColor: 'btnPurple' as const,
  },
  {
    name: 'Bathroom Filter',
    model: 'Model: PureWater Lite 1000',
    location: 'Master Bathroom',
    installed: 'Installed: May 10, 2024',
    status: 'Active',
    progressLabel: 'No Active Contract',
    progressValue: 'Expired',
    progressPercent: 100,
    actionLabel: 'Subscribe Contract',
    iconColor: 'iconGreen' as const,
    infoIconColor: 'infoIconGreen' as const,
    progressColor: 'progressOrange' as const,
    barColor: 'barGray' as const,
    btnColor: 'btnGreen' as const,
  },
];

export default function ProductsGrid() {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>My Products</h2>
        <a href="#" className={styles.viewAll}>View All Products →</a>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.name} className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <div className={`${styles.productIcon} ${styles[product.iconColor]}`}>
                  <span className={`material-symbols-outlined ${styles.productIconSymbol}`}>
                    water_drop
                  </span>
                </div>
                <span className={styles.statusBadge}>{product.status}</span>
              </div>

              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productModel}>{product.model}</p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={`material-symbols-outlined ${styles.infoIcon} ${styles[product.infoIconColor]}`}>
                    location_on
                  </span>
                  {product.location}
                </div>
                <div className={styles.infoItem}>
                  <span className={`material-symbols-outlined ${styles.infoIcon} ${styles[product.infoIconColor]}`}>
                    calendar_month
                  </span>
                  {product.installed}
                </div>
              </div>

              <div className={styles.progress}>
                <div className={styles.progressHeader}>
                  <span className={styles.progressLabel}>{product.progressLabel}</span>
                  <span className={`${styles.progressValue} ${styles[product.progressColor]}`}>
                    {product.progressValue}
                  </span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={`${styles.progressBar} ${styles[product.barColor]}`}
                    style={{ width: `${product.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <button type="button" className={`${styles.cardAction} ${styles[product.btnColor]}`}>
              {product.actionLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
