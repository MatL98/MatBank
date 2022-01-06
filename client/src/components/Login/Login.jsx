import React, { useState } from "react";
import axios from "axios";
import { TitleDiv, ContainerForm, FormStyle, PopUp, PopUp2 } from "./loginStyle";

const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [failForm, setFailForm] = useState("");
  const [mail, setMail] = useState();
  const [datos, setDatos] = useState({
    mail: "",
    username: "",
    password: "",
  });
  function hide() {
    setShowMessage(false);
    setFailForm("");
  }
  const handleFormSubmit = () => {
    if (datos.username && datos.mail && datos.password) {
      axios
        .post("http://localhost:3001/login", datos)
        .then(function (response) {
          setMail(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      setShowMessage(true);
      setTimeout(hide, 2000);
    } else {
      let msn = "es necesario eligir los tres campos";
      setFailForm(msn);
      setTimeout(hide, 2000);
    }
  };
	
	
	const loginSession = () => {
		if (mail === datos.mail) {
			window.location.href="/"
		}
  };
	loginSession()

  return (
    <ContainerForm>
      <TitleDiv>
        <h1>Inicia sesion</h1>
        <p>
          No tenes una cuenta? Ingresa a <a href="/signUp">SignUp</a>
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
      <PopUp style={{ visibility: showMessage ? "visible" : "hidden" }}>
        <p>
          {datos.type === "entry"
            ? `Ingresaste ${datos.amount}`
            : `Retiraste ${datos.amount}`}
        </p>
      </PopUp>
      <PopUp2 style={{ visibility: failForm ? "visible" : "hidden" }}>
        <p>{failForm ? `${failForm}` : ""}</p>
      </PopUp2>
    </ContainerForm>
  );
};

export default Login;
