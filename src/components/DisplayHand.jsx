import React from "react";
import styles from "../App.module.css";
import Winner from "./Winner";

const DisplayHand = ({
  playerHand,
  computerHand,
  timer,
  runTimer,
  icons,
  results,
}) => {
  return (
    <>
      <div
        className={`${styles.playerHand} ${
          results.winner === "Player" ? styles.winnerAnimation : ""
        }`}
      >
        {runTimer && (
          <div className={styles.shakingHandPlayer}>{icons[0].icon}</div>
        )}
        {results?.winner && (
          <>
            {icons[playerHand].icon}
            <p>{icons[playerHand].name}</p>
          </>
        )}
      </div>

      <Winner runTimer={runTimer} timer={timer} results={results} />

      <div
        className={`${styles.computerHand} ${
          results.winner === "Computer" ? styles.winnerAnimation : ""
        }`}
      >
        <div>
          {runTimer && (
            <div className={styles.shakingHandComputer}>{icons[0].icon}</div>
          )}
          {results?.winner && (
            <>
              {icons[computerHand].icon}
              <p>{icons[computerHand].name}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayHand;
