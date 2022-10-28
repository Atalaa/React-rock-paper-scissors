import { useState } from "react";
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
  const icons = [
    { name: "rock", icon: <FaRegHandRock color="black" size={60} /> },
    { name: "paper", icon: <FaRegHandPaper color="black" size={60} /> },
    { name: "scissors", icon: <FaRegHandScissors color="black" size={60} /> },
  ];

  const [noneHand, setNoneHand] = useState(false);
  const [score, setScore] = useState(0);

  //human player
  const selectHand = (handIndex) => {
    setPlayerHand(handIndex);
  };

  //computer
  const generateComputerHand = () => {
    const randomeNumber = Math.floor(Math.random() * 3);
    setComputerHand(randomeNumber);
    setNoneHand(true);
  };

  const play = () => {
    generateComputerHand();
  };

  console.log("playerHand:", playerHand);
  console.log("computerHand:", computerHand);

  return (
    <main className={styles.container}>
      {/* title page */}
      <div className={styles.titleContainer}>
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>Enjoy the game!</p>
      </div>

      {/* score */}
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
          <p className={styles.resultsWinner}>Winner: Player</p>
          <p className={styles.resultsMessage}>Rock beats Scissors</p>
        </div>

        {/* COMPUTER */}
        <div className={styles.computerHand}>
          <div>
            {icons[computerHand].icon}
            <p>{icons[computerHand].name}</p>
          </div>
        </div>
      </div>

      {/* buttons choice */}
      <div className={styles.choiceBtnContainer}>
        {/* Rock button*/}
        <button
          className={`${styles.choiceBtn} ${styles.bounce} ${
            playerHand === 0 ? styles.activeHand : ""
          }`}
          onClick={() => selectHand(0)}
        >
          <FaRegHandRock color="black" size={60} />
          Rock
        </button>

        {/* Paper button*/}
        <button
          className={`${styles.choiceBtn} ${styles.bounce} ${
            playerHand === 1 ? styles.activeHand : ""
          }`}
          onClick={() => selectHand(1)}
        >
          <FaRegHandPaper color="black" size={60} />
          Paper
        </button>

        {/* Scissors button*/}
        <button
          className={`${styles.choiceBtn} ${styles.bounce} ${
            playerHand === 2 ? styles.activeHand : ""
          }`}
          onClick={() => selectHand(2)}
        >
          <FaRegHandScissors color="black" size={60} />
          Scissors
        </button>
      </div>

      {/* Play button */}
      <button className={styles.playBtn} onClick={play}>
        Play
      </button>
    </main>
  );
}

export default App;
