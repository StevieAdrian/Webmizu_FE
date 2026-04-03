import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgCircleTop} />
      <div className={styles.bgCircleBottom} />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome back, John!</h1>
        <p className={styles.subtitle}>Your water filter systems are running smoothly.</p>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} type="button">
            <span className={`material-symbols-outlined ${styles.btnIcon}`}>calendar_month</span>
            Book Service
          </button>
          <button className={styles.btnOutline} type="button">
            <span className={`material-symbols-outlined ${styles.btnIcon}`}>shopping_cart</span>
            Browse Products
          </button>
        </div>
      </div>
    </section>
  );
}
