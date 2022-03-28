import React, { useEffect, useState } from "react";
import Balance from "./Balance/Balance";
import { HomeStyle, BalanceDiv, TableStyle } from "./homeStyles";
import axios from "axios";
import List from "./List/ListOperations";
import { Link, useNavigate } from "react-router-dom";

import {initAxiosHeader} from "../../helper/header"
import NavBar from "../NavBar/NavBar";
initAxiosHeader()

const Home = () => {
  const [operation, setOperations] = useState([]);
  const [cash, setCash] = useState(0);
  const [userName, setUserName] = useState()
  let navigate = useNavigate();

  const getApi = () => {
    axios.get("http://localhost:3001/api/home").then(function (response) {
      const data = response.data
      const totalAmount = data.sum
      setUserName(data.data[0].username)
      setCash(totalAmount)
      setOperations(data.data[0].Operations);
      return data;
    });
  };

  useEffect(() => {
    getApi();
  }, []);


  return (
    <HomeStyle>
      <NavBar/>
      <BalanceDiv>
        <h1>HOME</h1>
        <Balance data={cash} user={userName}/>
      </BalanceDiv>

      <TableStyle>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Concepto</th>
            <th scope="col">Monto</th>
            <th scope="col">Fecha</th>
            <th scope="col">Operación</th>
          </tr>
        </thead>
        <tbody>
          {operation
            ? operation.map((op) => {;
                return <List data={op} key={op.id} />;
              })
            : "cargando..."}
        </tbody>
      </TableStyle>
    </HomeStyle>
  );
};

export default Home;
