import React from "react";
import { BalanceStyle, CardStyle, ContentStyle } from "./balanceStyles";


const Balance = (prop) =>{
  const cashBalance = prop.data

  return(
    <BalanceStyle>
      <CardStyle>
        {cashBalance}
      </CardStyle>
    </BalanceStyle>
  )

}

export default Balance;