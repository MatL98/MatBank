import React from "react";
import Home from "./components/Home/Home";
import './App.css';
import Form from "./components/Form/Form";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"



const App = () => {
  return(
    <Router>
        <Home>
          <Route path="/form">
            <Form/>
          </Route>
        </Home> 
    </Router>
  )
}

export default App;