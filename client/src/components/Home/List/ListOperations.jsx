import React from "react";
import { FontStyle, ListStyle } from "./listStyles";

const List = ({data}) =>{
  const op = data
  return(
      <ListStyle>
        <FontStyle>{op.id}</FontStyle>
        <FontStyle>{op.concept}</FontStyle>
        <FontStyle><input type="number" value={op.amount}/></FontStyle>
        <FontStyle>{op.date}</FontStyle>
        <FontStyle>{op.type}</FontStyle>
      </ListStyle>
  )
}
export default List;