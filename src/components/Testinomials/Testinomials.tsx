import { useState } from "react";
import styles from "./Testinomials.module.css";
import Bubble from "../../assets/Bubble.png";
import RightArrow from "../../assets/Arrow right.png";
import LeftArrow from "../../assets/Arrow left.png";
import Stars from "../../assets/Vector.png";

const testimonialsData = [
  {
    text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    text: `"Thanks to Positivus, our website engagement has doubled. Their strategic approach and data-driven insights helped us connect better with our customers."`,
    name: "Jane Doe",
    title: "VP of Marketing at ABC Ltd",
  },
  {
    text: `"Impressive results! Positivus helped us scale fast and target the right audience through SEO and PPC. Loved working with their team."`,
    name: "Michael Brown",
    title: "Founder of TechNova",
  },
];

const visibleCards = 3;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.heading}>Testimonials</h2>
      <p className={styles.subheading}>
        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
        About Our Digital Marketing Services
      </p>

      <div className={styles.slider}>
        <div
          className={styles.sliderTrack}
          style={{
            transform: `translateX(-${(100 / visibleCards) * current}%)`,
          }}
        >
          {testimonialsData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.bubbleContainer}>
                <img src={Bubble} alt="Bubble" className={styles.bubble} />
                <div className={styles.textOnBubble}>
                  <p className={styles.quote}>{item.text}</p>
                  <img src={Stars} alt="Stars" className={styles.stars} />
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.title}>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.arrowsRow}>
          <div className={styles.arrow} onClick={prev}>
            <img src={LeftArrow} alt="Previous" />
          </div>
          <div className={styles.arrow} onClick={next}>
            <img src={RightArrow} alt="Next" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
