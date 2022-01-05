import React, { useState } from "react";
import { ButtonStyle, ListStyle, TrStyle } from "./listStyles";
import axios from "axios";

const List = ({data}) =>{
  const op = data
  const [ updtOperation, setUpdtOperation ] = useState(op)
  
  
  const updateOp = () =>{
    axios.patch(`http://localhost:3001/${updtOperation.id}`, updtOperation)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const deleteOp = () =>{
    axios.delete(`http://localhost:3001/${op.id}`)
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
      <ListStyle><input type="text" id="conceptOp" name="concept" maxLength="9" placeholder="concepto" value={updtOperation.concept} onChange={(e)=> setUpdtOperation({...updtOperation, concept: e.target.value})}/></ListStyle>
      <ListStyle><input type="number" id="amountOp" name="amount" maxLength="9" placeholder="0" value={updtOperation.amount} onChange={(e)=> setUpdtOperation({...updtOperation, amount: e.target.value})}/></ListStyle>
      <ListStyle>{op.date}</ListStyle>
      <ListStyle>{op.type}</ListStyle>
      <ButtonStyle onClick={updateOp}>Editar</ButtonStyle>
      <ButtonStyle onClick={deleteOp}>Borrar</ButtonStyle>  
    </TrStyle>
  )
}
export default List;