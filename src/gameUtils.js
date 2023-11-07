export const winCombinations = [
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

export function checkForWinner(resultArr) {
  for (let combination of winCombinations) {
    if (
      resultArr[combination.indexCombination[0]] ===
        resultArr[combination.indexCombination[1]] &&
      resultArr[combination.indexCombination[1]] ===
        resultArr[combination.indexCombination[2]] &&
      resultArr[combination.indexCombination[0]] != null
    ) {
      return combination;
    }
  }
  return null;
}
