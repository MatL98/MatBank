const assert = require("assert");
const request = require("supertest")("http://localhost:3001/");
const sequelize = require("../db/db")

describe("conexion a Sequelize", () => {
  it("Sequelize: Probando conexion", async () => {
    const testConnection = await sequelize.authenticate()
    assert.notDeepEqual(testConnection, true);
  });

  it("Probando ruta login", () => {
		const data = {
			mail: "test@mail.com",
			username: "test",
			password: "test123"
		}
    request.post("api/auth/login")
		.send(data)
		.expect('Content-type', '/json/')
  });
});
