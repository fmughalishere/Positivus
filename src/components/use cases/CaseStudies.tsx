import styles from './CaseStudies.module.css';
import Img1 from '../../assets/icon3.svg'
const CaseStudies = () => {
  const studies = [
    {
      text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    },
    {
      text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    },
    {
      text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    },
  ];

  return (
    <section className={styles.caseStudiesSection}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Case Studies</h2>
        <p className={styles.subheading}>
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>
      <div className={styles.cardsContainer}>
        {studies.map((study, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.cardText}>{study.text}</p>
            <a href="#" className={styles.link}>
              Learn more <span className={styles.image}><img src={Img1} alt="" /></span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
