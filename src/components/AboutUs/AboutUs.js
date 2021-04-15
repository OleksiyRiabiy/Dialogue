import React, { useState, useCallback, useEffect } from "react";

import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <div className={styles.OutterContainer}>
      <div className={styles.AboutSection}>
        <div className={styles.InnerContainer}>
          <h1>Про нас</h1>
          <p className={styles.Text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={styles.Skills}>
            <span>Найсмачніші страви</span>
            <span>Приємна атмосфера</span>
            <span>Швидка доставка</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
