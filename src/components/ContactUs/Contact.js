import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContactInfo}>
        <div className={styles.Card}>
          <i /* className={styles.ContainerIcon} */>
            <FaEnvelope className={styles.Icon} />
          </i>
          <div className={styles.CardContent}>
            <h3>Email</h3>
            <span>email@adress.com</span>
          </div>
        </div>
        <div className={styles.Card}>
          <i>
            <FaPhone className={styles.Icon} />
          </i>
          <div className={styles.CardContent}>
            <h3>Phone Number</h3>
            <span>+380 971 587 991</span>
          </div>
        </div>
        <div className={styles.Card}>
          <i>
            <FaMapMarkerAlt className={styles.Icon} />
          </i>
          <div className={styles.CardContent}>
            <h3>Location</h3>
            <span>
              Україна, Іллінці <br /> вул. Лебедина 12
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
