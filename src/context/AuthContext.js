import { createContext, useState } from "react";
import { app, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider =  ({ children }) => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorInLogIn, setErrorInLogIn] = useState(false);
  const [errorMessageLogIn, setErrorMessageLogIn] = useState("");
  const [errorInSignUp, setErrorInSignUp] = useState(false);
  const [errorMessageSignUp, setErrorMessageSignUp] = useState("");


  const navigate = useNavigate();
  const loginUser = async () => {
    try {
      const us = await signInWithEmailAndPassword(auth, email, password);
      console.log(us);
      navigate("/");
    } catch (error) {
      setErrorMessageLogIn(error.message);
      setErrorInLogIn(true);
    }
  };

  const signupUser = async () => {
    try {
      const us = await createUserWithEmailAndPassword(auth, email, password);
      console.log(us);
      navigate('/')
    } catch (error) {
      setErrorMessageSignUp(error.message);
      setErrorInSignUp(true);
    }
  };

  const logout = async()=>{
      await signOut(auth);
      navigate('/login')
      console.log("logout")
  }

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  let contextData = {
    user: user,
    setPassword: setPassword,
    setEmail: setEmail,
    auth: auth,
    loginUser: loginUser,
    logout: logout,
    register: signupUser,
    errorInLogIn :  errorInLogIn,
    errorInSignUp : errorInSignUp,
    errorMessageLogIn : errorMessageLogIn,
    errorMessageSignUp: errorMessageSignUp,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};