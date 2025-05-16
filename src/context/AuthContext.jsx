import React, { createContext } from "react";
// 12.0 authenticate by email and password that's why created signin, signup, AuthContext and AuthProvider also setup firebase

// 12.1
const AuthContext = createContext(null);

export default AuthContext;
