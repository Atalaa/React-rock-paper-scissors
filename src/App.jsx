import { useState, useEffect } from "react";
import "./App.css";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";
import Title from "./components/Title";
import Score from "./components/Score";
import DisplayHand from "./components/DisplayHand";
import ChooseHand from "./components/ChooseHand";
import styles from "./App.module.css";

function App() {
  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [results, setResults] = useState({
    winner: "",
    message: "",
  });
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
      setResults({ winner: "No one", message: "There is no winner" });
    } else if ( 
      icons[playerHand].name === "paper" &&
      icons[computerHand].name === "paper"
    ) {
      setResults({ winner: "No one", message: "There is no winner" });
    } else if (
      icons[playerHand].name === "scissors" &&
      icons[computerHand].name === "scissors"
    ) {
      setResults({ winner: "No one", message: "There is no winner" });
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
      <Title />

      <Score score={score} />

      <div className={styles.resultsContainer}>
        <DisplayHand
          computerHand={computerHand}
          playerHand={playerHand}
          timer={timer}
          runTimer={runTimer}
          icons={icons}
          results={results}
        />
      </div>

      <div className={styles.choiceBtnContainer}>
        <ChooseHand
          playerHand={playerHand}
          icons={icons}
          selectHand={selectHand}
        />
      </div>

      <button className={styles.playBtn} onClick={play}>
        Play
      </button>
    </main>
  );
}

export default App;
