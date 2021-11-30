import React, { useState, useContext } from "react";

//components
import { QuizContext } from "../Helpers/Contexts";

//firebase imports
import {
  createUserWithEmailAndPassword, 
} from "firebase/auth";
import { auth } from "../Helpers/firebase-config";

//styling
import "../css/userform.css";

export default function Register() {
  //global states
  const { setGameState } = useContext(QuizContext);

  //local states used to register a user
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  //EFFECTS: tries to add a user to firebase authentication database;
  //         if not able, catches error and alerts to user
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerUsername,
        registerPassword
      );
      alert("user created and logged in!");
      setGameState("menu");
    } catch (error) {
      console.log(error.message);
      alert("Invalid email");
    }
  };

  //EFFECTS: sets gameState to "login"
  const changeGameState = () => {
    setGameState("login")
  }

  return (
    <div className="form">
      <label htmlFor="username">Email</label>
      <input
        id="username"
        onChange={(e) => {
          setRegisterUsername(e.target.value);
        }}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      ></input>
      <button onClick={register}>Register</button>
      <button onClick={changeGameState}>Already have an account?</button>
    </div>
  );
}
