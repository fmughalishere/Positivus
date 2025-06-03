import styles from './Services.module.css';
import Img1 from '../../assets/pics/card-pic1.png';
import Img2 from '../../assets/pics/card-pic2.png';
import Img3 from '../../assets/pics/card-pic3.png';
import Img4 from '../../assets/pics/card-pic4.png';
import Img5 from '../../assets/pics/card-pic5.png';
import Img6 from '../../assets/pics/card-pic6.png';
import Img7 from '../../assets/pics/proposal-pic.png';
import ArrowIcon from '../../assets/icon5.svg';

const services = [
  { title: 'Search engine\noptimization', image: Img1 },
  { title: 'Pay-per-click\nadvertising', image: Img2 },
  { title: 'Social Media\nMarketing', image: Img3 },
  { title: 'Email\nMarketing', image: Img4 },
  { title: 'Content\nCreation', image: Img5 },
  { title: 'Analytics and\nTracking', image: Img6 },
];

const cardStyles = [
  styles.grayCard,
  styles.greenCard,
  styles.darkCard,
  styles.grayCard,
  styles.greenCard,
  styles.darkCard,
];

const labelStyles = [
  styles.greenLabel,
  styles.whiteLabel,
  styles.whiteLabel,
  styles.greenLabel,
  styles.whiteLabel,
  styles.greenLabel,
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Services</h2>
      <p className={styles.description}>
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </p>

      <div className={styles.cardGrid}>
        {services.map((service, index) => {
          const cardStyle = cardStyles[index];
          const labelStyle = labelStyles[index];
          const lines = service.title.split('\n');

          return (
            <div key={index} className={`${styles.card} ${cardStyle}`}>
              <div className={styles.cardText}>
                {lines.map((line, i) => (
                  <span key={i} className={labelStyle}>
                    {line}
                  </span>
                ))}
                <button className={styles.infoButton}>
                  <img
                    src={ArrowIcon}
                    alt="arrow"
                    className={styles.arrowIcon}
                  />
                  Learn more
                </button>
              </div>
              <img
                src={service.image}
                alt={service.title.replace('\n', ' ')}
                className={styles.cardImage}
              />
            </div>
          );
        })}
        <div className={styles.bottomBanner}>
          <h3 className={styles.bottomHeading}>
            Let’s make things happen
          </h3>
          <p className={styles.bottomDescription}>
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className={styles.bottomButton}>Get your free proposal</button>
          <img src={Img7} alt="Proposal" className={styles.bottomImage} />
        </div>
      </div>
    </section>
  );
};

export default Services;
