//React
import React, { useContext } from "react";

//contexts
import { QuizContext } from "../Helpers/Contexts";

//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Helpers/firebase-config";

//styling
import "../App.css";

export default function MainMenu() {
  //global states
  const { setGameState, user, setUser } = useContext(QuizContext);

  //EFFECTS: onAuthStateChanged checks for any changes in the user's authentication;
  //         if user is not logged in, then currentUser === null is true
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //EFFECTS: if user is not logged in redirects to signup page, redirects to quiz page otherwise
  const startQuiz = () => {
    if (user == null) {
      alert("must login first");
      setGameState("signup")
    } else {
      setGameState("quiz");
    }
  }

  return (
    <div className="Menu">
      <button
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
}
