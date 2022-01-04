import React, { useEffect, useState } from "react";
import Balance from "./Balance/Balance";
import {HomeStyle, BalanceDiv, TableStyle} from "./homeStyles";
import axios from "axios";
import List from "./List/ListOperations";


const Home = () => {
  const [operation, setOperations] = useState([]);

  const getApi = () => {
    axios.get("http://localhost:3001/home").then(function (response) {
      console.log(response.data);
      setOperations(response.data);
      return response;
    });
  };

  useEffect(() => {
    getApi();
  }, []);
  
  return (
    <HomeStyle>
      <BalanceDiv>
        <h1>HOME</h1>
        <a href="/form">Realizar operacion</a>
        <Balance data={operation.sum}/>
      </BalanceDiv>
      
      <TableStyle>
          <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Concepto</th>
            <th scope="col">Monto</th>
            <th scope="col">Fecha</th>
            <th scope="col">Operacion</th>
          </tr>
          </thead>
        <tbody>
            {operation.data ? (operation.data.map((op) => {
              return <List data={op} key={op.id} />;
            })) : ("cargando...")}
        </tbody>
      </TableStyle>
    </HomeStyle>
  );
};

export default Home;
