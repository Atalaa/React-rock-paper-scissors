import { useState, useEffect } from "react";
import "./App.css";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";
import styles from "./App.module.css";

function App() {
  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [score, setScore] = useState(0);

  const icons = [
    { name: "rock", icon: <FaRegHandRock color="black" size={60} /> },
    { name: "paper", icon: <FaRegHandPaper color="black" size={60} /> },
    { name: "scissors", icon: <FaRegHandScissors color="black" size={60} /> },
  ];

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
    }
  }, [runTimer, timer]);

  const selectHand = (handIndex) => {
    setPlayerHand(handIndex);
  };

  const generateComputerHand = () => {
    const randomeNumber = Math.floor(Math.random() * 3);
    setComputerHand(randomeNumber);
  };

  const play = () => {
    setRunTimer(true);
    generateComputerHand();
  };

  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>Enjoy the game!</p>
      </div>

      {/* SCORE */}
      <div className={styles.scoreContainer}>
        <div className={styles.score}>
          <h3>Player</h3>
          <p>Score: {score}</p>
        </div>
        <div className={styles.score}>
          <h3>Computer</h3>
          <p>Score: {score}</p>
        </div>
      </div>

      {/* RESULTS */}
      <div className={styles.resultsContainer}>
        {/* HUMAN PLAYER */}
        <div className={styles.playerHand}>
          {icons[playerHand].icon}
          <p>{icons[playerHand].name}</p>
        </div>

        {/* MESSAGE WINNER */}
        <div className={styles.midCol}>
          {runTimer && <p className={styles.timer}>{timer}</p>}
          {/* {!runTimer && (
            <div>
              <p className={styles.resultsWinner}>Winner: Player</p>
              <p className={styles.resultsMessage}>Rock beats Scissors</p>
            </div>
          )} */}
        </div>

        {/* COMPUTER */}
        <div className={styles.computerHand}>
          <div>
            {icons[computerHand].icon}
            <p>{icons[computerHand].name}</p>
          </div>
        </div>
      </div>

      {/* BUTTONS CHOICE */}
      <div className={styles.choiceBtnContainer}>
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
      </div>

      {/* PLAY */}
      <button className={styles.playBtn} onClick={play}>
        Play
      </button>
    </main>
  );
}

export default App;
