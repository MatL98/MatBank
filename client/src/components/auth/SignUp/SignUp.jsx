import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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
          "http://localhost:3001/api/auth/signUp",
          datos
        );
        if (data === datos.mail) {
          navigate("/login");
        } else if(data === "no"){
          let msn = "Ya existe una cuenta con este mail";
          setFailForm(msn);
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
        <h1>Registrate</h1>
        <p>
          Tenes una cuenta? Ingresa a <Link to={"/login"}>Inicia Sesión</Link>
        </p>
      </TitleDiv>
      <FormStyle>
        <h2>Formulario de registro</h2>
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
