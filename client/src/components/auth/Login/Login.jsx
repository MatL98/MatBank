import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import {
  TitleDiv,
  ContainerForm,
  FormStyle,
  PopUp,
  PopUp2,
} from "./loginStyle";

const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [failForm, setFailForm] = useState("");
  let navigate = useNavigate();
  const [datos, setDatos] = useState({
    mail: "",
    username: "",
    password: "",
  });
  function hide() {
    setShowMessage(false);
    setFailForm("");
  } 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (datos.username && datos.mail && datos.password) {
        const { data } = await axios.post("http://localhost:3001/api/auth/login", datos);
        if (data.mail === datos.mail) {
          window.localStorage.setItem(
          "loggedUserWithMail",
          JSON.stringify(data.mail)
          );
          window.localStorage.setItem("token",
          JSON.stringify(data.token))
          window.localStorage.setItem("idUser",
          JSON.stringify(data.idUser))
          navigate("/home");
        } else {
          setShowMessage(true);
          setTimeout(hide, 2000);
        }
      } else {
        let msn = "Es necesario eligir los tres campos";
        setFailForm(msn);
        setTimeout(hide, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerForm>
      <TitleDiv>
        <h1>Inicia sesion</h1>
        <p>
          No tenes una cuenta? Ingresa a <Link to={"/signUp"}>Registrate</Link>
        </p>
      </TitleDiv>
      <FormStyle>
        <h2>Login</h2>
        <input
          type="email"
          name="mail"
          placeholder="mail"
          id="mail"
          value={datos.amount}
          onChange={(e) => setDatos({ ...datos, mail: e.target.value })}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          maxLength="10"
          value={datos.username}
          onChange={(e) => setDatos({ ...datos, username: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="contrase??a"
          id="password"
          value={datos.password}
          onChange={(e) => setDatos({ ...datos, password: e.target.value })}
        />
        <input type="button" value="Enviar" onClick={handleFormSubmit} />
        <input
          type="reset"
          value="Borrar"
          onClick={() => setDatos({ concept: "", amount: "", type: "" })}
        />
      </FormStyle>
      <PopUp style={{ visibility: showMessage ? "visible" : "hidden" }}>
        <p>Usuario y/o Contrase??a invalida</p>
      </PopUp>
      <PopUp2 style={{ visibility: failForm ? "visible" : "hidden" }}>
        <p>{failForm ? `${failForm}` : ""}</p>
      </PopUp2>
    </ContainerForm>
  );
};

export default Login;
