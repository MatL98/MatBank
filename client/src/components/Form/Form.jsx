import React, { useState } from "react";
import axios from "axios";
import {
  TitleDiv,
  ContainerForm,
  FormStyle,
  Select,
  PopUp,
  PopUp2,
} from "./formStyle";

const Form = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [failForm, setFailForm] = useState("");
  const [datos, setDatos] = useState({
    concept: "",
    amount: "",
    type: "",
  });
  function hide() {
    setShowMessage(false);
    setFailForm("");
  }
  const handleFormSubmit = () => {
    if (datos.concept && datos.amount && datos.type) {
      axios
        .post("http://localhost:3001/api/form", datos)
        .then(function (response) {
          console.log(response);
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

  return (
    <ContainerForm>
      <TitleDiv>
        <h1>Ingresar Operaciones</h1>
        <a href="/home">Regresar al home</a>
      </TitleDiv>
      <FormStyle>
        <h2>Formulario</h2>
        <input
          type="text"
          name="concept"
          placeholder="Concepto"
          id="concept"
          maxLength="9"
          value={datos.concept}
          onChange={(e) => setDatos({ ...datos, concept: e.target.value })}
        />
        <input
          type="number"
          name="amount"
          placeholder="Monto"
          id="amount"
          maxLength="9"
          value={datos.amount}
          onChange={(e) => setDatos({ ...datos, amount: e.target.value })}
        />
        <Select
          name="type"
          id="type"
          value={datos.type}
          onChange={(e) => setDatos({ ...datos, type: e.target.value })}
        >
          <option>Elige la operación</option>
          <option value="entry">Ingresar</option>
          <option value="cashOut">Retirar</option>
        </Select>
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

export default Form;
