import React from "react";
import styles from "./welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <h1 className="very-dack-Violet max-font">
            <b>More than just shorter links</b>
          </h1>
          <p className="font-size-2">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-cyan-raduis-50">Get Started</button>
        </div>
        <div className={styles.rigth}>
          <img src="images/illustration-working.svg" alt="welcome-image" />
        </div>
      </div>

      <div className={styles.supCardContainer}>
        <div className={styles.card}>
          <div className={styles.form}>
            <input type="text" placeholder="Shorten a link here..." />
            <button className="btn-cyan-raduis-15">Shorten It!</button>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Welcome;
