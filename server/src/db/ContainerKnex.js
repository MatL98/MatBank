const { default: knex } = require("knex")

class Bank{
    constructor(table){
        this.table = table
    }

    save = (op) =>{
        this.table.insert(op).then((data)=>{
        return data
        }).catch(err=>console.log(err))
    }

    getAll = () =>{
        const newData = this.table.select("*").orderBy('id','desc').limit("10")
        return newData
    }

    update = (id, newOperation) =>{
        knex("operations").where({id: id}).update(newOperation).then((data)=> {
            console.log(data + "es la data");
            return data 
        })
        .catch((err)=> err)
    }

    cash = () =>{
        this.table.sum({total: 'amount'}).then((data)=> { 
            console.log(data.map(x => console.log(x)));})
        .catch(err=> err)

    }
}

module.exports = Bank