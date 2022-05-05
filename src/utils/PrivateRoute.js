import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext.js";
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);
  console.log(user)

  return user ? children : navigate('/login');
};

export default PrivateRoute;