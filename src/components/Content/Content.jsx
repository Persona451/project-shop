import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "./content.module.css";

const Content = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img src="/images/store.png" alt="" className={styles.img} />
        <div className={styles.descr}>
        <h2 className={styles.title}>Be your Own level</h2>
        <p className={styles.info}>
        Правильная обувь может превратить любой образ из простого в стильный всего за несколько шагов. В нашем обувном магазине представлен широкий выбор стильной обуви, которая поможет вам создать идеальный образ. От современных кроссовок до классических лоферов — у нас есть что-то на любой вкус и случай. Наша обувь разработана так, чтобы быть удобной, прочной и модной, чтобы вы могли выглядеть и чувствовать себя лучше, независимо от того, что на вас надето.
        </p>
        </div>
      </div>
      <h1 className={styles.trending}>Trending in 2023</h1>
      <div className={styles.trend_wrapper}>
        <div className={styles.trend_item}>
          <img className={styles.trend_img} src="/images/trend1.png" alt="" />
          <p className={styles.trend_title}>Nike Air Force</p>
          <Link to="/catalog" className={styles.link}>Посмотреть сейчас</Link>
        </div>
        <div className={styles.trend_item}>
          <img className={styles.trend_img} src="/images/trend2.png" alt="" />
          <p className={styles.trend_title}>Nike Air Force</p>
          <Link to="/catalog" className={styles.link}>Посмотреть сейчас</Link>
        </div>
        <div className={styles.trend_item}>
          <img className={styles.trend_img} src="/images/trend3.png" alt="" />
          <p className={styles.trend_title}>Running shoes</p>
          <Link to="/catalog" className={styles.link}>Посмотреть сейчас</Link>
        </div>
        <div className={styles.trend_item}>
          <img className={styles.trend_img} src="/images/trend4.png" alt="" />
          <p className={styles.trend_title}>Canvas shoes</p>
          <Link to="/catalog" className={styles.link}>Посмотреть сейчас</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Content;
