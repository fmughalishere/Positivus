import React from 'react';
import styles from './Footer.module.css';
import Img1 from '../../assets/Social icon.png';       
import Img2 from '../../assets/Social icon (1).png';   
import Img3 from '../../assets/twitter.png';          
import Img4 from '../../assets/Logo.png';              

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoAndContact}>
          <div className={styles.logo}>
            <img className={styles.logoImage} src={Img4} alt="Logo" />
          </div>
          <div className={styles.contactBadge}>Contact us:</div>
          <div className={styles.contactInfo}>
            Email: info@positivus.com<br />
            Phone: 555-567-8901<br />
            Address: 1234 Main St<br />
            Moonstone City, Stardust State 12345
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
            <label>Subscribe to news</label>
            <div className={styles.inputGroup}>
              <input className={styles.emailInput} type="email" placeholder="Email" />
              <button className={styles.subscribeButton}>Subscribe to news</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div>© 2023 Positivus. All Rights Reserved.</div>
        <div className={styles.rightBottom}>
          <a className={styles.privacyLink} href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
