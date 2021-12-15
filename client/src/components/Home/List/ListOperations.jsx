import React from "react";
import { FontStyle, ListStyle } from "./listStyles";

const List = (data) =>{
  const op = data.data
  return(
      <ListStyle>
        <FontStyle>{op.id}</FontStyle>
        <FontStyle>{op.concept}</FontStyle>
        <FontStyle>{op.amount}</FontStyle>
        <FontStyle>{op.date}</FontStyle>
        <FontStyle>{op.type}</FontStyle>
      </ListStyle>
  )
}
export default List;