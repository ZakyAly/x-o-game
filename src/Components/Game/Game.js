import React from "react";
import Board from "../Board/Board";
import "./Game.css";

const Game = () => {
  return (
    <div className="game">
      <div>Ready to play a game..!</div>
      <h1>X - O</h1>
      <p>Player 1 vs Player 2</p>
      <Board />
    </div>
  );
};

export default Game;
