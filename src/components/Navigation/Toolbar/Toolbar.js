import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import styles from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
    <a className={styles.ShoppingCartIcon} href="#">
      <FaShoppingCart />
    </a>
    {/* <div className={styles.ShopCart}>
      <div></div>
      <GiShoppingCart className={styles.SocialMediaIcon} /> 
      <TiShoppingCart className={styles.SocialMediaIcon} />
    </div> */}
  </header>
);

export default toolbar;
