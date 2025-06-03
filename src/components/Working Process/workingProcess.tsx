import { useState } from 'react';
import styles from './WorkingProcess.module.css';
import Img1 from '../../assets/chevron.svg';
import Img2 from '../../assets/minus.svg';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We will discuss your business goals, target audience, and current marketing efforts to tailor our services accordingly.',
  },
  {
    number: '02',
    title: 'Research',
    description:
      'We conduct deep market research to better understand your industry landscape and positioning.',
  },
  {
    number: '03',
    title: 'Strategy Development',
    description:
      'Based on our research, we design a custom strategy to help you achieve your goals effectively.',
  },
  {
    number: '04',
    title: 'Execution',
    description:
      'Our team implements the strategy using best practices and continuous monitoring.',
  },
  {
    number: '05',
    title: 'Optimization',
    description:
      'We refine the process based on performance data and feedback to ensure maximum impact.',
  },
  {
    number: '06',
    title: 'Review',
    description:
      'We wrap up with a review session, evaluate outcomes, and hand over all documentation.',
  },
];

const WorkingProcess = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Working Process</h2>
      <p className={styles.subtitle}>Step-by-Step Guide to Achieving Your Business Goals</p>

      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className={`${styles.step} ${isActive ? styles.active : ''}`}
            onClick={() => toggleStep(index)}
          >
            <div className={styles.stepHeader}>
              <div className={styles.left}>
                <span className={styles.number}>{step.number}</span>
                <span className={styles.stepTitle}>{step.title}</span>
              </div>
              <div className={styles.icon}>
                <img src={isActive ? Img2 : Img1} alt="toggle" />
              </div>
            </div>

            {isActive && (
              <>
                <div className={styles.divider} />
                <p className={styles.description}>{step.description}</p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default WorkingProcess;
