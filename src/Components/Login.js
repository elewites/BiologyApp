import React, { useContext, useState } from "react";

//contexts
import { QuizContext } from "../Helpers/Contexts";

//styling
import "../css/userform.css";

//firebase
import { auth } from "../Helpers/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const { setGameState } = useContext(QuizContext);

  //local states used to login a user
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //EFFECTS: attempts to login user with given loginUser and loginPassword;
  //         catches and alerts error otherwise
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginUser, loginPassword);
      setGameState("menu");
    } catch (error) {
      alert(error.message);
    }
  };

  //EFFECTS: changes gameState to "signup"
  const changeGameState = () => {
    setGameState("signup");
  };

  return (
    <div className="form">
      <label for="username">Email</label>
      <input
        id="username"
        onChange={(e) => setLoginUser(e.target.value)}
      ></input>
      <label for="password">Password</label>
      <input
        id="password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      ></input>
      <button onClick={login}>Login</button>
      <button onClick={changeGameState}>Need an account?</button>
    </div>
  );
}
