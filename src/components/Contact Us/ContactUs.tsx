import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import Img1 from '../../assets/pics/contact-pic.png';

const ContactUs: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('sayHi');
  const [message, setMessage] = useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value;
    setInquiryType(selected);

    if (selected === 'getQuote') {
      setMessage("We're interested in your services! Please get in touch with us.");
    } else {
      setMessage('');
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Contact Us</h2>
          <p>Connect with Us. Let’s Discuss Your Digital Marketing Needs</p>
        </div>

        <div className={styles.contactBox}>
          <form className={styles.form}>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="inquiryType"
                  value="sayHi"
                  checked={inquiryType === 'sayHi'}
                  onChange={handleRadioChange}
                  className={styles.radio}
                />
                Say Hi
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="inquiryType"
                  value="getQuote"
                  checked={inquiryType === 'getQuote'}
                  onChange={handleRadioChange}
                  className={styles.radio}
                />
                Get a Quote
              </label>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Name" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" placeholder="Email" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                placeholder="Message"
                className={styles.textarea}
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.button}>Send Message</button>
          </form>

          <div className={styles.design}>
            <img src={Img1} alt="design" className={styles.contactImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
