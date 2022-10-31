import React from "react";
import styles from "../App.module.css";

const ChooseHand = ({ playerHand, icons, selectHand }) => {
  return (
    <>
      {/* ROCK */}
      <button
        className={`${styles.choiceBtn} ${styles.bounce} ${
          playerHand === 0 ? styles.activeHand : ""
        }`}
        onClick={() => selectHand(0)}
      >
        {icons[0].icon}
        {icons[0].name}
      </button>

      {/* PAPER */}
      <button
        className={`${styles.choiceBtn} ${styles.bounce} ${
          playerHand === 1 ? styles.activeHand : ""
        }`}
        onClick={() => selectHand(1)}
      >
        {icons[1].icon}
        {icons[1].name}
      </button>

      {/* SCISSORS */}
      <button
        className={`${styles.choiceBtn} ${styles.bounce} ${
          playerHand === 2 ? styles.activeHand : ""
        }`}
        onClick={() => selectHand(2)}
      >
        {icons[2].icon}
        {icons[2].name}
      </button>
    </>
  );
};

export default ChooseHand;
