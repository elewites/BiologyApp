import React, { useState, useContext } from "react";
import "../css/userform.css";
import { QuizContext } from "../Helpers/Contexts";

export default function UserForm(props) {
  const {
    haveAccount,
    setHaveAccount,
    setGameState,
    setUsername,
    setPassword,
  } = useContext(QuizContext);

  const moveToQuiz = () => {
    setGameState("menu");
  };

  const handleAccount = () => {
    setHaveAccount(true);
    setGameState("login");
  };

  return (
    <div className="form">
      <div className="input">
        <label for="username">Username</label>
        <input
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="input">
        <label for="password">Password</label>
        <input
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <button onClick={moveToQuiz}>{props.loginSignUp}</button>
      {haveAccount ? (
        <div></div>
      ) : (
        <button onClick={handleAccount}>Already have an account?</button>
      )}
    </div>
  );
}
