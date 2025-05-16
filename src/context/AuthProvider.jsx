import React from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
// import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  // 12.5 create user with email and password in firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // 12.2
  const userInfo = {
    // 12.6
    createUser,
  };
  // 12.3
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
