import React from "react";
import styles from "../App.module.css";

const Winner = ({ runTimer, timer, results }) => {
  return (
    <div className={styles.midCol}>
      {runTimer && <p className={styles.timer}>{timer}</p>}
      {results?.winner && (
        <>
          <p className={styles.resultsWinner}>Winner: {results.winner}</p>
          <p className={styles.resultsMessage}>{results.message}</p>
        </>
      )}
    </div>
  );
};

export default Winner;
