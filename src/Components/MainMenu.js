import React, { useContext } from "react";

//contexts
import { QuizContext } from "../Helpers/Contexts";

//styling
import "../App.css"

export default function MainMenu() {
  //global states
  const { gameState, setGameState } = useContext(QuizContext);
  
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
