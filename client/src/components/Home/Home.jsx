import React, { useEffect, useState } from "react";
import Balance from "./Balance/Balance";
import { HomeStyle, BalanceDiv, TableStyle } from "./homeStyles";
import axios from "axios";
import List from "./List/ListOperations";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [operation, setOperations] = useState([]);
  const [cash, setCash] = useState(0);
  let navigate = useNavigate();

  const getApi = () => {
    axios.get("http://localhost:3001/api/home").then(function (response) {
      const data = response.data
      const dataParsed = JSON.parse(data.data)
      const totalAmount = data.sum
      setCash(totalAmount)
      setOperations(dataParsed[0].Operations);
      return dataParsed;
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  const logOut = () => {
    let logged = window.localStorage.getItem("loggedUserWithMail");
    if (logged) {
    window.localStorage.removeItem("loggedUserWithMail")
    navigate("/login")
  }
}

  return (
    <HomeStyle>
      <BalanceDiv>
        <h1>HOME</h1>
        <Link to={"/form"}>Realizar Operación</Link>
        <button onClick={logOut}>Log-out</button>
        <Balance data={cash} />
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
