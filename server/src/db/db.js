const knex = require("knex")({
  client:"mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "bank"
  },
  pool: {min: 2, max: 8}
})

knex.schema.createTableIfNotExists("operations", function(table){
  table.increments("id").primary();
  table.string("concept");
  table.float("amount");
  table.string("date");
  table.string("type");
})
.then(()=>{
  console.log("created table");
})
.catch(err =>{
  console.log(err);
})

knex.schema.createTableIfNotExists("users", function(table){
  table.increments("id").primary();
  table.string("mail");
  table.string("username");
  table.string("password");
})
.then(()=>{
  console.log("created table");
})
.catch(err =>{
  console.log(err);
})


module.exports = knex

