import React, { useState } from "react";

//Components
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import Register from "./Components/Register";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";

//Contexts
import { QuizContext } from "./Helpers/Contexts";

//Styling
import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  //global states
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          user,
          setUser,
        }}
      >
        <NavBar />
        {gameState === "signup" && <Register />}
        {gameState === "login" && <Login />}
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
