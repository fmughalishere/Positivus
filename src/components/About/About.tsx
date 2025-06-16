import styles from './About.module.css';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/Illustration.png';
import amazon from '../../assets/company/company-logo1.svg';
import dribbble from '../../assets/company/company-logo2.svg';
import hubspot from '../../assets/company/company-logo3.svg';
import notion from '../../assets/company/company-logo4.svg';
import netflix from '../../assets/company/company-logo5.svg';
import zoom from '../../assets/company/company-logo6.svg';

export default function About() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1>
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <Link to="/" className={styles.cta}>
               Book a consultation
                </Link>

          <div className={styles.logos}>
            <img src={zoom} alt="Zoom" />
            <img src={netflix} alt="Netflix" />
            <img src={notion} alt="Notion" />
            <img src={hubspot} alt="Hubspot" />
             <img src={dribbble} alt="Dribbble" />
            <img src={amazon} alt="Amazon" />
          </div>
        </div>

        <div className={styles.imageBlock}>
          <img src={heroImg} alt="Digital marketing illustration" />
        </div>
      </div>
    </section>
  );
}
