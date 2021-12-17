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

    getAll = async ()=>{
        const newData = await this.table.select("*").orderBy('id','desc').limit("10")
        return newData
    }

    getById = (id, newOperation)=>{
        this.table.where("id", id).update(newOperation).then((data)=> {
            return data
        })
        .catch((err)=> err)
    }

    cash = ()=>{
        this.table.sum({total: 'amount'}).then((data)=> { 
            console.log(data.map(x => console.log(x)));})
        .catch(err=> err)

    }
}

module.exports = Bank