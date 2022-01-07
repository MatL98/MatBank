import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TitleDiv, ContainerForm, FormStyle, PopUp2 } from "./signStyle";

const SignUp = () => {
  const [failForm, setFailForm] = useState("");
  let navigate = useNavigate();
  const [datos, setDatos] = useState({
    mail: "",
    username: "",
    password: "",
  });
  function hide() {
    setFailForm("");
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (datos.username && datos.mail && datos.password) {
        const { data } = await axios.post(
          "http://localhost:3001/signUp",
          datos
        );
        if (data === "ok") {
          navigate("/login");
        }
      } else {
        let msn = "es necesario eligir los tres campos";
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
        <h1>Registrate</h1>
        <p>
          Tenes una cuenta? Ingresa a <a href="/login">Login</a>
        </p>
      </TitleDiv>
      <FormStyle>
        <h2>Formulario</h2>
        <input
          type="text"
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
          placeholder="contraseña"
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
      <PopUp2 style={{ visibility: failForm ? "visible" : "hidden" }}>
        <p>{failForm ? `${failForm}` : ""}</p>
      </PopUp2>
    </ContainerForm>
  );
};

export default SignUp;
