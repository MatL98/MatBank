/* import React, {createContext, useState} from "react";
import axios from "axios"
export const Context = createContext()

const BankProvider = ({children}) =>{
  const [operations, setOperations] = useState([])

  const getApi = () =>{
    axios.get('http://localhost:3001/home')
      .then(function (response) {
        setOperations(response.data)
        //return response;
      }) 
    }
  return(
    <Context.Provider  value={{
      operations,
      getApi
    }}>
      {children}
    </Context.Provider> 
  )
}
export default BankProvider; */