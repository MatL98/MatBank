import React from "react";
import { BalanceStyle, CardStyle } from "./balanceStyles";


const Balance = (data) =>{
  const cashBalance = data.data.map((x)=>{
    return x.amount;
  })

  return(
    <BalanceStyle>
      <CardStyle>
        {cashBalance}
      </CardStyle>
    </BalanceStyle>
  )

}

export default Balance;