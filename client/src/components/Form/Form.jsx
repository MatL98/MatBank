import React, { useEffect } from "react";
import axios from "axios";

const Form = () =>{

  /* const formPost = () =>{
    axios.post('http://localhost:3001/form', {
      concept: "juego",
      amount: 200,
      type: "entry"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  useEffect(()=>{
    formPost()
  }) */

  return(
    <form action="">
      <input type="text" placeholder="Concepto"/>
      <input type="number" placeholder="Monto"/>
      <select name="" id="">
        <option value="entry">Ingresar</option>
        <option value="cashOut">Retirar</option>
      </select>
    </form>
  )

}

export default Form;