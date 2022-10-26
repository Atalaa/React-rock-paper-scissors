import { useState } from "react";
import "./App.css";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>Enjoy the game!</p>
      </div>
      <div className={styles.scoreContainer}>
        <div className={styles.score}>
          <h3>Player</h3>
          <p>Score: 0</p>
        </div>
        <div className={styles.score}>
          <h3>Computer</h3>
          <p>Score: 0</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}>
          <FaRegHandRock color="black" size={60} />
          <p>Rock</p>
        </div>
        <div className={styles.midCol}>
          <p className={styles.resultsWinner}>Winner: Player</p>
          <p className={styles.resultsMessage}>Rock beats Scissors</p>
        </div>
        <div className={styles.computerHand}>
          <FaRegHandPaper color="black" size={60}/>
          <p>Scissor</p>
        </div>
      </div>
    </div>
  );
}

export default App;