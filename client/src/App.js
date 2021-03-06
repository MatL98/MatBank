import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import Form from "./components/Form/Form";
import SignUp from "./components/auth/SignUp/SignUp";
import Login from "./components/auth/Login/Login";
//import PageNotFound from "./components/PageNotFound/PageNotFound";
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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
        {loggedIn ? <Route exact path="/home" element={<Home />} /> : <Route path="/" element={<Navigate to={"/login"}/>}/>}
        {loggedIn ? <Route exact path="/form" element={<Form />} /> : <Route path="/form" element={<Navigate to={"/login"}/>}/>}
        {/* <Route path="/*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
