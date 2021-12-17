import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () =>{
  const [ showMessage, setShowMessage ] = useState(false)
  const [datos , setDatos ] = useState({
      concept: '',
      amount: '',
      type: ''
    })

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
      setShowMessage(true)
    }
console.log("es necesario eligir los tres campos")
  }

  return(
    <>
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
    <p style={{visibility:showMessage ? "visible" : "hidden"}}>{datos.type === 'entry' ? `Ingresaste ${datos.amount}` : `Retiraste ${datos.amount}`}</p>
    <div>
      <a href="/">Regresar al home</a>
    </div>
    </>
  )
  
}



export default Form;