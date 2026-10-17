import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    // moves.blue += 1;
    console.log(`Moves = ${moves.blue}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: moves.blue + 1 };
    });
  };

  let updateYellow = () => {
    // moves.blue += 1;
    console.log(`Moves = ${moves.blue}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: moves.yellow + 1 };
    });
  };

  let updateGreen = () => {
    // moves.blue += 1;
    console.log(`Moves = ${moves.green}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, green: moves.green + 1 };
    });
  };
  let updateRed = () => {
    // moves.blue += 1;
    console.log(`Moves = ${moves.red}`);
    setMoves((prevMoves) => {
      return { ...prevMoves, red: moves.red + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue Move={moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Move={moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green Move={moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Move={moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
