import { useEffect, useState } from "react";
import { checkForWinner, winCombinations } from "./gameUtils"; // Assuming gameUtils.js contains these exports

export default function Board() {
  const [isCross, setIsCross] = useState(true);
  const [resultArr, setResultArr] = useState(Array(9).fill(null));
  const [wonPlayer, setWonPlayer] = useState(null);
  const [winCombination, setWinCombination] = useState([]);
  const [winClass, setWinClass] = useState("");

  useEffect(() => {
    const winner = checkForWinner(resultArr);
    if (winner) {
      setWonPlayer(isCross ? "O" : "X");
      setWinCombination(winner.indexCombination);
      setWinClass(winner.winClass);
    }
  }, [resultArr, isCross]);

  function handleClick(index) {
    if (!resultArr[index] && !wonPlayer) {
      setResultArr((prevArr) => {
        const newArr = [...prevArr];
        newArr[index] = isCross ? "X" : "O";
        return newArr;
      });
      debugger;
      setIsCross((prevIsCross) => !prevIsCross);
    }
  }

  function resetGame() {
    setResultArr(Array(9).fill(null));
    setWinCombination([]);
    setWinClass("");
    setWonPlayer(null);
  }

  return (
    <div className="container">
      {resultArr.map((value, index) => (
        <div
          className={`box ${winCombination.includes(index) ? winClass : ""}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          {value}
        </div>
      ))}
      {wonPlayer && (
        <div className="">
          <span>Player {wonPlayer} Won!</span>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
}
