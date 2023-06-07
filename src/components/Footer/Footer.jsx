import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <img className={styles.img} src="/images/krossbox.png" alt="" />
      <div className={styles.content}>
        <ul className={styles.nav}>
            <h6 className={styles["links-title"]}>Link</h6>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Home</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Shop</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>About</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Contact</a>
            </li>
        </ul>
        <ul className={styles.nav}>
            <h6 className={styles["links-title"]}>Help</h6>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Payment Options</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Returns</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Privacy Policy</a>
            </li>
        </ul>
        <ul className={styles.nav}>
            <h6 className={styles["links-title"]}>Collection</h6>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Men</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Women</a>
            </li>
            <li className={styles["nav-item"]}>
                <a href="" className={styles.link}>Children</a>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
