import React, { useState } from "react";
import { FontStyle, ListStyle } from "./listStyles";
import axios from "axios";

const List = ({data}) =>{
  const op = data
  const [updtOperation, setUpdtOperation ] = useState({
      id: '',
      concept: '',
      amount: ''
    })
  

  const showConfirm = () =>{
    /* const btnConfirm = document.querySelector(".btnOk")
    btnConfirm.setAttribute("style", "display: hide") */
    sendOp(op.id)
  }
  
  const sendOp = (id) =>{  
    //const idOp = updtOperation.id
    /* const conceptOp = document.querySelector("#conceptOp").value
    const amountOp = document.querySelector("#amountOp").value */
    axios.put(`http://localhost:3001/${id}`, updtOperation)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(id);
  }
  
    
    


  return(
      <ListStyle>
        <FontStyle>{op.id}</FontStyle>
        <FontStyle><input type="text" id="conceptOp" value={op.concept} onChange={(e)=> setUpdtOperation({...op, concept: e.target.value})}/></FontStyle>
        <FontStyle><input type="number" id="amountOp" value={op.amount} onChange={(e)=> setUpdtOperation({...updtOperation, amount: e.target.value})}/></FontStyle>
        <FontStyle>{op.date}</FontStyle>
        <FontStyle>{op.type}</FontStyle>
        <button onClick={showConfirm}>Editar</button>
        {/* <button onClick={sendOp} value="enviar" className="btnOk" style={{display: "none"}}>Actualizar</button> */}
      </ListStyle>
  )
}
export default List;