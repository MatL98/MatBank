import React from "react";
import { CardStyle, ContentStyle, ContentStyleCash, ContentStyleH1 } from "./balanceStyles";


const Balance = (prop) =>{
  console.log(prop);
  const cashBalance = prop.data
  const userName = prop.user

  return(
      <CardStyle>
        <ContentStyleH1>{userName}</ContentStyleH1>
        <ContentStyle>Saldo de tu cuenta</ContentStyle>
        <ContentStyleCash>${cashBalance}</ContentStyleCash>
      </CardStyle>
  )

}

export default Balance;