import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <p className={styles.brand}>yoycol</p>
            <p className={styles.tagline}>
              Professional print-on-demand cap factory for global e-commerce sellers.
              MOQ 1 piece, custom designs, worldwide shipping.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Categories</h4>
            <ul className={styles.linkList}>
              <li><Link href="/products/POD-adult-baseball-cap">Baseball Caps</Link></li>
              <li><Link href="/products/POD-beret-large-size">Berets</Link></li>
              <li><Link href="/products/POD-fisherman-hat">Fisherman Hats</Link></li>
              <li><Link href="/products/POD-acrylic-knit-hat">Knit Hats</Link></li>
              <li><Link href="/products/POD-Leifeng-winter-hat">Winter Hats</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="https://wa.me/8613348325895" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +86 13348325895
                </a>
              </li>
              <li>
                <a href="mailto:info@yoycolpod.com">info@yoycolpod.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.legalRow}>
          <p className={styles.legalLabel}>Operating Entity / 经营主体</p>
          <p className={styles.legalName}>
            莆田市荔城区新度蔡国林喜庆用品店
          </p>
          <p className={styles.legalEn}>
            Putian City Licheng District Xindu Cai Guolin Festive Supplies Store · Fujian, China
          </p>
        </div>

        <div className={styles.bottomRow}>
          <p>&copy; {year} yoycol. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}