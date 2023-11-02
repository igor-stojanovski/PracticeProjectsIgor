// import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialBoard);

  //   function handleBoardChange(rowIndex, colIndex) {
  //     setGameBoard((prevBoard) => {
  //       const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

  //       return updatedBoard;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <button
                    key={colIndex}
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
