import React, { useState } from "react";
import { ButtonStyle, FontStyle, ListStyle, TrStyle } from "./listStyles";
import axios from "axios";

const List = ({data}) =>{
  const op = data
  const [updtOperation, setUpdtOperation ] = useState(op)
  
  
  const sendOp = () =>{
    const info = updtOperation
    console.log(info); 
    //const idOp = updtOperation.id
    /* const conceptOp = document.querySelector("#conceptOp").value
    const amountOp = document.querySelector("#amountOp").value */
    axios.patch(`http://localhost:3001/${updtOperation.id}`, updtOperation)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  return(
    <TrStyle>
      <ListStyle>{op.id}</ListStyle>
      <ListStyle><input type="text" id="conceptOp" name="concept" placeholder="concepto" value={updtOperation.concept} onChange={(e)=> setUpdtOperation({...updtOperation, concept: e.target.value})}/></ListStyle>
      <ListStyle><input type="number" id="amountOp" name="amount" placeholder="0" value={updtOperation.amount} onChange={(e)=> setUpdtOperation({...updtOperation, amount: e.target.value})}/></ListStyle>
      <ListStyle>{op.date}</ListStyle>
      <ListStyle>{op.type}</ListStyle>
      <ButtonStyle onClick={sendOp}>Editar</ButtonStyle>
      {/* <button onClick={sendOp} value="enviar" className="btnOk" style={{display: "none"}}>Actualizar</button> */}
    </TrStyle>
  )
}
export default List;