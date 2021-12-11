import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () =>{
   const [datos , setDatos ] = useState({
     concept: '',
     amount: '',
     type: ''
   })

  // const handleInput = (e) =>{
  //   setDatos({
  //     ...datos,
  //     [e.target.name]: e.target.value
  //   })
  // }
  console.log(datos); 
  const handleFormSubmit = () =>{


    if (datos.concept && datos.amount && datos.type) {
      
      axios.post('http://localhost:3001/form', datos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }
console.log("es necesario eligir los tres campos")

  }
 
  return(
    <form>
      <input type="text" name="concept" placeholder="Concepto" id="concept" value={datos.concept} onChange={(e)=> setDatos({...datos, concept: e.target.value})} />
      <input type="number"  name="amount" placeholder="Monto" id="amount" value={datos.amount} onChange={(e)=> setDatos({...datos, amount: e.target.value})}/>
      <select name="type" name="type" id="type" value={datos.type} onChange={(e)=> setDatos({...datos, type: e.target.value})}>
      <option >Elige la opcion</option>
        <option value="entry">Ingresar</option>
        <option value="cashOut">Retirar</option>
      </select>
      <input type="button" value="Enviar" onClick={ handleFormSubmit }/>
    </form>
  )
  
}



export default Form;