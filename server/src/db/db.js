const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("bank", "root", "", {
  dialect:"mysql",
  host: "localhost",
})



/* knex.schema.createTableIfNotExists("operations", function(table){
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
}) */


module.exports = sequelize

