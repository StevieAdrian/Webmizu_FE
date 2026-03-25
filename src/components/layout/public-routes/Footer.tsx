import styles from './Footer.module.scss';

const footerLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Contact Us'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Webmizu</span>
          <span className={styles.copyright}>
            © 2024 Webmizu Customer Portal. All rights reserved.
          </span>
        </div>
        <div className={styles.links}>
          {footerLinks.map((item) => (
            <a key={item} href="#" className={styles.link}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
