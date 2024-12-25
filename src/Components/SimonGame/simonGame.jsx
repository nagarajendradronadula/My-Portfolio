import { useState } from "react";

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

  return (
    <div className="simon-game">
      <h1 className="game-title">Simon Game</h1>
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

      <style>
        {`
          .simon-game {
            text-align: center;
            font-family: Arial, sans-serif;
            color: white;
            background: rgba(0, 0, 0, 0.85); /* Black with opacity */
            border-radius: 20px;
            padding: 20px;
            margin: 40px auto;
            max-width: 600px;
          }
          .game-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #f0f0f0;
          }
          .game-message, .game-level {
            font-size: 1.2rem;
            margin: 10px 0;
            color: #d1d1d1;
          }
          .board {
            display: grid;
            grid-template-columns: repeat(2, 100px);
            gap: 10px;
            justify-content: center;
            margin: 20px auto;
          }
          .color-button {
            width: 100px;
            height: 100px;
            border: none;
            border-radius: 10px;
            opacity: 0.8;
            cursor: pointer;
            transition: transform 0.1s, opacity 0.3s;
          }
          .color-button:active {
            transform: scale(0.9);
          }
          .color-button.active {
            opacity: 1;
          }
          .red {
            background-color: red;
          }
          .green {
            background-color: green;
          }
          .blue {
            background-color: blue;
          }
          .yellow {
            background-color: yellow;
          }
          .controls {
            margin-top: 20px;
          }
          .control-button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 0 10px;
            cursor: pointer;
            border: none;
            border-radius: 10px;
            background: white;
            color: black;
            transition: all 0.3s ease;
          }
          .control-button:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          .control-button:active {
            transform: scale(0.95);
          }
        `}
      </style>
    </div>
  );
};

export default SimonGame;