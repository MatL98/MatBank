
class Bank{
    constructor(table){
        this.table = table
    }

    save = async(op)=>{
        this.table.insert(op).then((data)=>{
            return data
        }).catch(err=>console.log(err))
    }

    getAll = async()=>{
        this.table.from('operations').select("*").orderBy('id','desc').limit("10").then((data)=> {
        let datos = JSON.stringify(data)
        let newData = JSON.parse(datos)
        return newData
        })
    }

    getById = async(id, newOperation)=>{
        this.table.where("id", id).update(newOperation).then((data)=> {
            return data
        })
        .catch((err)=> err)
    }

    add = async()=>{
        this.table.sum({total: 'amount'}).then((data)=> { 
            return data[0].total })
        .catch(err=> err)
    }
}

module.exports = Bank