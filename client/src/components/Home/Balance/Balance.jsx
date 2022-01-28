import React from "react";
import { CardStyle, ContentStyle, ContentStyleCash } from "./balanceStyles";


const Balance = (prop) =>{
  const cashBalance = prop.data
  console.log(prop);

  return(
      <CardStyle>
        <ContentStyle>Saldo de la cuenta</ContentStyle>
        <ContentStyleCash>${cashBalance}</ContentStyleCash>
      </CardStyle>
  )

}

export default Balance;