import React from 'react';
import styles from './Footer.module.css';
import Img1 from '../../assets/Social icon.png';      
import Img2 from '../../assets/Social icon (1).png';   
import Img3 from '../../assets/twitter.png';          
import Img4 from '../../assets/Logo.png';             

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoAndContact}>
          <div className={styles.logo}>
            <img src={Img4} alt="Positivus Logo" className={styles.logoImage} />
          </div>
          <div className={styles.contactBadge}>Contact us:</div>
          <div className={styles.contactInfo}>
            <div>Email: info@positivus.com</div>
            <div>Phone: 555-567-8901</div>
            <div>
              Address: 1234 Main St<br />
              Moonstone City, Stardust State 12345
            </div>
          </div>
        </div>

        <div className={styles.links}>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </div>

        <div className={styles.newsletterWrapper}>
          <div className={styles.socialIconsTop}>
            <img src={Img1} alt="LinkedIn" />
            <img src={Img2} alt="Facebook" />
            <img src={Img3} alt="Twitter" />
          </div>
          <div className={styles.newsletter}>
            <label htmlFor="email">Subscribe to news</label>
            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={styles.emailInput}
              />
              <button className={styles.subscribeButton}>Subscribe to news</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div>© 2025 Positivus. All Rights Reserved.</div>
        <div className={styles.rightBottom}>
          <a href="#" className={styles.privacyLink}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
