import React from "react";
import { FaHome, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContactPage}>
        <h2 className={styles.Title}>Get in touch</h2>
        <div className={styles.ContactInfo}>
          <div className={styles.Item}>
            <div className={styles.ContainerIcon}>
              <FaHome className={styles.Icon} />
            </div>
            Illintsi, Ukraine
          </div>
          <div className={styles.Item}>
            <i className={styles.ContainerIcon}>
              <FaPhone className={styles.Icon} />
            </i>
            +380 971 587 991
          </div>
          <div className={styles.Item}>
            <i className={styles.ContainerIcon}>
              <FaEnvelope className={styles.Icon} />
            </i>
            email@adress.com
          </div>
          <div className={styles.Item}>
            <i className={styles.ContainerIcon}>
              <FaClock className={styles.Icon} />
            </i>
            Mon - Fri 8:00 AM to 10:00 PM
          </div>
        </div>
        <form action="" className={styles.ContactForm}>
          <input type="text" placeholder="Your Name" className={styles.Input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.Input}
          />
          <textarea
            placeholder="Your Message"
            className={styles.TextArea}
          ></textarea>
          <input type="submit" value="Send" className={styles.Button} />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
