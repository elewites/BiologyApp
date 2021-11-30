//React
import React, { useContext, useState } from "react";

//contexts
import { QuizContext } from "../Helpers/Contexts";

//firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Helpers/firebase-config";

//styling
import "../css/navbar.css";

export default function NavBar() {
  //global states
  const { setGameState, user, setUser } = useContext(QuizContext);

  //EFFECTS: attempts to signout the current user, throws error otherwise which is caught
  //         and logged to console
  const logout = async () => {
    try {
      await signOut(auth);
      alert("user signed out");
      setGameState("menu");
    } catch (error) {
      console.log(error.message);
      alert(error);
    }
  };

  //EFFECTS: onAuthStateChanged checks for any changes in the user's authentication;
  //         if user is not logged in, then currentUser === null is true
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="navbar">
      <div className="name">{user ? user.email : ""}</div>
      {user ? <button onClick={logout}>Logout</button> : <div></div>}
    </div>
  );
}
