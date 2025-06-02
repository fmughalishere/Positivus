import styles from './Services.module.css';
import Img1 from '../../assets/pics/card-pic1.png';
import Img2 from '../../assets/pics/card-pic2.png';
import Img3 from '../../assets/pics/card-pic3.png';
import Img4 from '../../assets/pics/card-pic4.png';
import Img5 from '../../assets/pics/card-pic5.png';
import Img6 from '../../assets/pics/card-pic6.png';
const services = [
  {
    title: 'Search Engine Optimization',
    style: styles.grayCard,
    image: Img1,
  },
  {
    title: 'Pay-per-click advertising',
    style: styles.greenCard,
    image: Img2,
  },
  {
    title: 'Social Media Marketing',
    style: styles.darkCard,
    image: Img3,
  },
  {
    title: 'Email Marketing',
    style: styles.grayCard,
    image: Img4,
  },
  {
    title: 'Content Creation',
    style: styles.greenCard,
    image: Img5,
  },
  {
    title: 'Analytics and Tracking',
    style: styles.darkCard,
    image: Img6,
  },
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
        {services.map((service, index) => (
         <div key={index} className={`${styles.card} ${service.style}`}>
  <div className={styles.cardText}>
    <span className={styles.label}>{service.title}</span>
    <button className={styles.infoButton}>Service Info →</button>
  </div>
  <img src={service.image} alt={service.title} className={styles.cardImage} />
</div>
        ))}
      </div>
    </section>
  );
};

export default Services;