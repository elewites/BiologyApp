import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

export default function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const [trueOrFalse, setTrueOrFalse] = useState(false);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h3 className="prompt">{Questions[currQuestion].prompt}</h3>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        {Questions[currQuestion].optionC !== "" ? (
          <button onClick={() => setOptionChosen("C")}>
            {Questions[currQuestion].optionC}
          </button>
        ) : (
          <></>
        )}
        {Questions[currQuestion].optionD !== "" ? (
          <button onClick={() => setOptionChosen("D")}>
            {Questions[currQuestion].optionD}
          </button>
        ) : (
          <></>
        )}
      </div>

      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}
