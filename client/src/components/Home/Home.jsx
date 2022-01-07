import React, { useEffect, useState } from "react";
import Balance from "./Balance/Balance";
import { HomeStyle, BalanceDiv, TableStyle } from "./homeStyles";
import axios from "axios";
import List from "./List/ListOperations";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [operation, setOperations] = useState([]);
  let navigate = useNavigate();

  const getApi = () => {
    axios.get("http://localhost:3001/api/home").then(function (response) {
      setOperations(response.data);
      return response;
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const logOut = () => {
    let logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
    window.localStorage.removeItem("loggedUserWithMail")
    navigate("/")
  }
}

  return (
    <HomeStyle>
      <BalanceDiv>
        <h1>HOME</h1>
        <Link to={"/form"}>Realizar Operación</Link>
        <button onClick={logOut}>Log-out</button>
        <Balance data={operation.sum} />
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
          {operation.data
            ? operation.data.map((op) => {
                return <List data={op} key={op.id} />;
              })
            : "cargando..."}
        </tbody>
      </TableStyle>
    </HomeStyle>
  );
};

export default Home;
