import React, { useEffect, useState } from "react";
import Balance from "./Balance/Balance";
import HomeStyle from "./homeStyles";
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
      <div>
        <h1>HOME</h1>
        <Balance data={operation.sum}/>
        <a href="/form">Realizar operacion</a>
      </div>
      <table>
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
          <tr className="row">
            {operation.data ? (operation.data.map((op) => {
              return <List data={op} key={op.id} />;
            })) : ("cargando...")}
          </tr>
        </tbody>
      </table>
    </HomeStyle>
  );
};

export default Home;
