import styles from '../contact.module.css';

export const metadata = {
  title: 'Contact Us | yoycol - Print-on-Demand Cap Factory',
  description: 'Get in touch with yoycol (operating entity: 莆田市荔城区新度蔡国林喜庆用品店) — wholesale print-on-demand cap supplier.',
};

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>For business inquiries, please contact us via WhatsApp or email:</p>

      <div className={styles.infoRow}>
        <p className={styles.whatsapp}><strong>WhatsApp:</strong> <a href="https://wa.me/8613348325895" target="_blank" rel="noopener">+86 13348325895</a></p>
        <p className={styles.email}><strong>Email:</strong> <a href="mailto:info@yoycolpod.com">info@yoycolpod.com</a></p>
      </div>

      <h2 className={styles.subheading}>Business Information</h2>
      <p>
        <strong>Operating Entity / 经营主体:</strong><br />
        莆田市荔城区新度蔡国林喜庆用品店
      </p>
      <p>
        <strong>English name:</strong> Putian City Licheng District Xindu Cai Guolin Festive Supplies Store<br />
        <strong>Region:</strong> Fujian Province, Putian, China
      </p>
    </div>
  );
}