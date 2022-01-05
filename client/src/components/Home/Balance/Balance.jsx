import React from "react";
import { CardStyle, ContentStyle, ContentStyleCash } from "./balanceStyles";


const Balance = (prop) =>{
  const cashBalance = prop.data

  return(
      <CardStyle>
        <ContentStyle>Saldo de la cuenta</ContentStyle>
        <ContentStyleCash>${cashBalance}</ContentStyleCash>
      </CardStyle>
  )

}

export default Balance;