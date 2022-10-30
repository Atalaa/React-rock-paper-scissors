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
  const [results, setResults] = useState({
    winner: "",
    message: "",
  });

  const [score, setScore] = useState({ player: 0, computer: 0 });

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
      whoWon();
    }
  }, [runTimer, timer]);

  const selectHand = (handIndex) => {
    setResults({
      winner: "",
      message: "",
    });
    setPlayerHand(handIndex);
  };

  const generateComputerHand = () => {
    const randomeNumber = Math.floor(Math.random() * 3);
    setComputerHand(randomeNumber);
  };

  const play = () => {
    setResults({
      winner: "",
      message: "",
    });
    setRunTimer(true);
    generateComputerHand();
  };

  const whoWon = () => {
    //DRAW
    if (
      icons[playerHand].name === "rock" &&
      icons[computerHand].name === "rock"
    ) {
      setResults({ winner: "We have a Draw!", message: "There is no winner" });
    } else if (
      icons[playerHand].name === "paper" &&
      icons[computerHand].name === "paper"
    ) {
      setResults({ winner: "We have a Draw!", message: "There is no winner" });
    } else if (
      icons[playerHand].name === "scissors" &&
      icons[computerHand].name === "scissors"
    ) {
      setResults({ winner: "We have a Draw!", message: "There is no winner" });
    }

    // PLAYER WINS
    else if (
      icons[playerHand].name === "rock" &&
      icons[computerHand].name === "scissors"
    ) {
      setResults({ winner: "Player", message: "Rock beats scissors" });
      setScore({ ...score, player: score.player + 1 });
    } else if (
      icons[playerHand].name === "paper" &&
      icons[computerHand].name === "rock"
    ) {
      setResults({ winner: "Player", message: "Paper beats rock" });
      setScore({ ...score, player: score.player + 1 });
    } else if (
      icons[playerHand].name === "scissors" &&
      icons[computerHand].name === "paper"
    ) {
      setResults({ winner: "Player", message: "Scissors beats paper" });
      setScore({ ...score, player: score.player + 1 });
    }

    // COMPUTER WINS
    else if (
      icons[playerHand].name === "rock" &&
      icons[computerHand].name === "paper"
    ) {
      setResults({ winner: "Computer", message: "Paper beats rock" });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (
      icons[playerHand].name === "paper" &&
      icons[computerHand].name === "scissors"
    ) {
      setResults({ winner: "Computer", message: "Scissors beats paper" });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (
      icons[playerHand].name === "scissors" &&
      icons[computerHand].name === "rock"
    ) {
      setResults({ winner: "Computer", message: "Rock beats scissors" });
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>ROCK, PAPER, SCISSORS</h1>
        <p>React game!</p>
      </div>

      {/* SCORE */}
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

      {/* RESULTS */}
      <div className={styles.resultsContainer}>
        {/* PLAYER */}
        <div className={styles.playerHand}>
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

        {/* MESSAGE WINNER */}
        <div className={styles.midCol}>
          {runTimer && <p className={styles.timer}>{timer}</p>}
          {results?.winner && (
            <>
              <p className={styles.resultsWinner}>Winner: {results.winner}</p>
              <p className={styles.resultsMessage}>{results.message}</p>
            </>
          )}
        </div>

        {/* COMPUTER */}
        <div className={styles.computerHand}>
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
