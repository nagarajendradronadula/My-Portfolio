import { useState } from "react";
import "./simonGame.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const colors = ["red", "green", "blue", "yellow"];

const SimonGame = () => {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);
  const [message, setMessage] = useState("Press Start to Play");
  const [level, setLevel] = useState(0);

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setIsGameActive(true);
    setMessage("Game Started! Watch the sequence...");
    setLevel(1);
    generateNextStep([]);
  };

  const stopGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setIsGameActive(false);
    setIsPlayerTurn(false);
    setMessage("Game Stopped. Press Start to Play Again.");
    setLevel(0);
  };

  const generateNextStep = (currentSequence) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newSequence = [...currentSequence, randomColor];
    setSequence(newSequence);
    setPlayerSequence([]);
    setIsPlayerTurn(false);
    playSequence(newSequence);
  };

  const playSequence = (newSequence) => {
    let i = 0;
    const interval = setInterval(() => {
      highlightColor(newSequence[i]);
      i++;
      if (i >= newSequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsPlayerTurn(true);
          setMessage(`Level ${level}: Your Turn. Repeat the sequence!`);
        }, 500);
      }
    }, 1000);
  };

  const highlightColor = (color) => {
    const colorButton = document.getElementById(color);
    if (colorButton) {
      colorButton.classList.add("active");
      setTimeout(() => {
        colorButton.classList.remove("active");
      }, 500);
    }
  };

  const handleColorClick = (color) => {
    if (!isPlayerTurn || !isGameActive) return;

    const updatedPlayerSequence = [...playerSequence, color];
    setPlayerSequence(updatedPlayerSequence);

    if (
      updatedPlayerSequence.join("") !==
      sequence.slice(0, updatedPlayerSequence.length).join("")
    ) {
      setMessage("Wrong! Game Over!");
      stopGame();
      return;
    }

    if (updatedPlayerSequence.length === sequence.length) {
      setMessage("Correct! Watch the next sequence...");
      setLevel((prevLevel) => prevLevel + 1);
      setIsPlayerTurn(false);
      setTimeout(() => generateNextStep(sequence), 1000);
    }
  };

  // Animate on view
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  // Slide variant (used by heading and section)
  const slideVariant = {
    hidden: { x: "100vw" },
    visible: {
      x: 0,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  // Fade variant for image and content
  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 3, delay: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="FunGame"
      className="simon-game"
      ref={ref}
      variants={{slideVariant, fadeVariant}}
      initial={{ x: 200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
    >
      <div className="text-center w-full">
        <h1 className="game-title headings">Simon Game</h1>
      </div>
      <p className="game-message">{message}</p>
      {level > 0 && <p className="game-level">Level: {level}</p>}
      <div className="board">
        {colors.map((color) => (
          <button
            key={color}
            id={color}
            className={`color-button ${color}`}
            onClick={() => handleColorClick(color)}
          ></button>
        ))}
      </div>
      <div className="controls">
        <button className="control-button start-button" onClick={startGame}>
          Start
        </button>
        <button className="control-button stop-button" onClick={stopGame}>
          Stop
        </button>
      </div>
    </motion.div>
  );
};

export default SimonGame;
