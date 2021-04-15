import React from "react";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";
import brandLogo from "../../../assets/images/brand-logo1.png";

const Footer = () => {
  return (
    <div className={styles.OutterContainer}>
      <footer className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <div className={styles.LeftCol}>
            <img src={brandLogo} className={styles.Logo} />
            <div className={styles.SocialMedia}>
              <a
                href="https://www.instagram.com/dialogue.pizza.sushi/"
                target="_blank"
                className={styles.SocialMediaIcon}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/dialogue.pizza.sushi"
                target="_blank"
                className={styles.SocialMediaIcon}
              >
                <FaFacebook />
              </a>
            </div>
            <p className={styles.RightText}>
              © 2021 Created By Alex All Rights Reserved.
            </p>
          </div>
          <div className={styles.RightCol}>
            <h1>Наші Новини</h1>
            <div className={styles.Border}></div>
            <p>Введіть вашу електронну адресу, щоб отримувати наші новини.</p>
            <form action="" className={styles.NewsletterForm}>
              <input
                type="text"
                className={styles.Input}
                placeholder="Електронна адреса"
              />
              <input
                type="submit"
                className={styles.Button}
                value="відправити"
              />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
