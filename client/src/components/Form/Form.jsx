import React, { useState } from "react";
import axios from "axios";
import { TitleDiv, ContainerForm, FormStyle, Select, PopUp } from "./formStyle";

const Form = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [datos, setDatos] = useState({
    concept: "",
    amount: "",
    type: "",
  });

  console.log(datos);
  const handleFormSubmit = () => {
    if (datos.concept && datos.amount && datos.type) {
      axios
        .post("http://localhost:3001/form", datos)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setShowMessage(true);
      function hide(){
        setShowMessage(false)
      }
      setTimeout(hide, 2000)
    } else {
      console.log("es necesario eligir los tres campos");
    }
  };

  return (
    <ContainerForm>
      <TitleDiv>
        <h1>Ingresar Operaciones</h1>
        <a href="/">Regresar al home</a>
      </TitleDiv>
      <FormStyle>
        <h2>Formulario</h2>
        <input
          type="text"
          name="concept"
          placeholder="Concepto"
          id="concept"
          value={datos.concept}
          onChange={(e) => setDatos({ ...datos, concept: e.target.value })}
        />
        <input
          type="number"
          name="amount"
          placeholder="Monto"
          id="amount"
          value={datos.amount}
          onChange={(e) => setDatos({ ...datos, amount: e.target.value })}
        />
        <Select
          name="type"
          id="type"
          value={datos.type}
          onChange={(e) => setDatos({ ...datos, type: e.target.value })}
        >
          <option>Elige la operacion</option>
          <option value="entry">Ingresar</option>
          <option value="cashOut">Retirar</option>
        </Select>
        <input type="button" value="Enviar" onClick={handleFormSubmit} />
      </FormStyle>
      <PopUp style={{ visibility: showMessage ? "visible" : "hidden" }}>
        <p>
          {datos.type === "entry"
            ? `Ingresaste ${datos.amount}`
            : `Retiraste ${datos.amount}`}
        </p>
      </PopUp>
    </ContainerForm>
  );
};

export default Form;
