import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import Form from "./components/Form/Form";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        {!loggedIn ? <Route path="/" element={<Navigate to={"/login"}/>}/> : <Route path="/home" element={<Home />}/>}
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
