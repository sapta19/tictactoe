import { useEffect, useState } from "react";
export default function Board() {
  const [isCross, setIsCross] = useState(true);
  const [resultArr, setResultArr] = useState(Array(9).fill(null));
  const [wonPlayer, setWonPlayer] = useState(false);
  const [winCombination, setWinCombination] = useState([]);
  const [winClass, setWinClass] = useState("");
  const winCombinations = [
    {
      indexCombination: [0, 1, 2],
      winClass: "winner horizontal"
    },
    {
      indexCombination: [3, 4, 5],
      winClass: "winner horizontal"
    },
    {
      indexCombination: [6, 7, 8],
      winClass: "winner horizontal"
    },
    {
      indexCombination: [0, 3, 6],
      winClass: "winner vertical"
    },
    {
      indexCombination: [1, 4, 7],
      winClass: "winner vertical"
    },
    {
      indexCombination: [2, 5, 8],
      winClass: "winner vertical"
    },
    {
      indexCombination: [0, 4, 8],
      winClass: "winner left-diagonal"
    },
    {
      indexCombination: [2, 4, 6],
      winClass: "winner right-diagonal"
    }
  ];
  useEffect(() => {
    for (let combination of winCombinations) {
      if (
        resultArr[combination.indexCombination[0]] ==
          resultArr[combination.indexCombination[1]] &&
        resultArr[combination.indexCombination[1]] ==
          resultArr[combination.indexCombination[2]] &&
        resultArr[combination.indexCombination[0]] != null
      ) {
        const wonPlayer = isCross ? "2" : "1";
        setWonPlayer(wonPlayer);
        setWinCombination(combination.indexCombination);
        setWinClass(combination.winClass);
        break;
      }
    }
  }, [resultArr]);
  function handleClick(e) {
    if (resultArr[e] == null && wonPlayer == false) {
      setIsCross(!isCross);
      setResultArr((prevArr) => {
        let finalArray = [...prevArr];
        prevArr[e] = isCross ? "X" : "0";
        return finalArray;
      });
    }
  }
  return (
    <div className="">
      <div className="container">
        {resultArr.map((e, index) => {
          return (
            <div
              className={`box ${
                winCombination.includes(index) ? `winner ${winClass}` : ""
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {e}
            </div>
          );
        })}
        {wonPlayer && (
          <>
            <span>Player {wonPlayer} Won</span>
            <button
              onClick={() => {
                setResultArr(Array(9).fill(null));
                setWinCombination([]);
                setWinClass("");
                setWonPlayer(false);
              }}
            >
              Restart Game
            </button>
          </>
        )}
      </div>
    </div>
  );
}
