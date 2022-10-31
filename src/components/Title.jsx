import React from "react";
import styles from "../App.module.css";


const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <h1>ROCK, PAPER, SCISSORS</h1>
      <p>React game!</p>
    </div>
  );
};

export default Title;
