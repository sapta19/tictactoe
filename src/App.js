import "./styles.css";
import Board from "./Board";
import { useState } from "react";
export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <div className="App">
      {!gameStarted && (
        <button
          onClick={() => {
            setGameStarted(true);
          }}
        >
          Start Game
        </button>
      )}
      {gameStarted && <Board />}
    </div>
  );
}
