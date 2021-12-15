import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
