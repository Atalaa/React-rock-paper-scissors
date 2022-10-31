import React from "react";
import styles from "../App.module.css";

const Score = ({score}) => {
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.score}>
        <h3>Player</h3>
        <p>Score: {score.player}</p>
      </div>
      <div className={styles.score}>
        <h3>Computer</h3>
        <p>Score: {score.computer}</p>
      </div>
    </div>
  );
};

export default Score;
