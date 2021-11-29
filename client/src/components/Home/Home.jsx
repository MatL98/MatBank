import React, { useEffect, useState } from "react";
import Balance from "./Balance";
import HomeStyle from "./homeStyles";
import axios from "axios";
import List from "./ListOperations";
import { Link } from "react-router-dom";

const Home = () => {
  const [operation, setOperations] = useState([]);
  const getApi = () => {
    axios.get("http://localhost:3001/home").then(function (response) {
      setOperations(response.data.data);
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
        <Link to="/form">
          Agregar operacion
        </Link>
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
            {operation.map((op, idx) => {
              return <List data={op} key={idx} />;
            })}
          </tr>
        </tbody>
      </table>
    </HomeStyle>
  );
};

export default Home;
