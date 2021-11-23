import React, { useState } from "react";

//Contexts
import { QuizContext } from "./Helpers/Contexts";

//Components
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import UserForm from "./Components/UserForm";

//Styling
import "./App.css";

function App() {
  //global states
  const [gameState, setGameState] = useState("signup");
  const [score, setScore] = useState(0);
  const [haveAccount, setHaveAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>Regulating Gene Expression</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          haveAccount,
          setHaveAccount,
          username,
          setUsername,
          password,
          setPassword,
        }}
      >
        {gameState === "signup" && <UserForm loginSignUp="Sign Up" />}
        {gameState === "login" && <UserForm loginSignUp="Login" />}
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
