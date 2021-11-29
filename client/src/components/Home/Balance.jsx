/* import React, { useState } from "react";
import { BalanceStyle, CardStyle, ContentStyle } from "./balanceStyles";

const Balance = ({data}) =>{
  const operation = data.data
  console.log(operation);
  return(
    <BalanceStyle>
      {operation.map((op, idx) =>{
        return (
        `<thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Concepto</th>
          <th scope="col">Monto</th>
          <th scope="col">Fecha</th>
          <th scope="col">Operacion</th>
        </tr>
        </thead>
        <tr>
          <th scope="row">${op.id}</th>
          <td>${op.concept}</td>
          <td>${op.amount}</td>
          <td>${op.date}</td>
          <td>${op.type}</td>
        </tr>`
        )
      })}
    </BalanceStyle>
  )


}

export default Balance; */

