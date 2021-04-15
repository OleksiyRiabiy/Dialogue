import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" exact>
      ГОЛОВНА
    </NavigationItem>
    <NavigationItem link="/menu">МЕНЮ</NavigationItem>
    <NavigationItem link="/about_us">ПРО НАС</NavigationItem>
    {/* <NavigationItem link="/contact_us">КОНТАКТИ</NavigationItem> */}
    <NavigationItem link="/contacts">КОНТАКТИ</NavigationItem>
  </ul>
);

export default navigationItems;
