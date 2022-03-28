import React from "react";
import "./navBarStyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  let navigate = useNavigate();
  const logOut = () => {
    axios.get("http://localhost:3001/api/auth/logOut").then(function (res) {
      return res;
    });
    let logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
      window.localStorage.removeItem("loggedUserWithMail");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("idUser");
      navigate("/login");
    }
  };
  return (
    <div className="navBarHome">
      <div className="navBar">
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/form"}>Cajero</Link>
          </li>
          <button className="btnLogOut" onClick={logOut}>
            Log-out
          </button>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
