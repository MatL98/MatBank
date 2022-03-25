const { sumOperation, getAllOperations } = require("../services/operationServices");
const { getSessionById } = require("../services/sessionServices");


const getOperation = async (req, res) => {
		const sessionUser = await getSessionById()
    const id = JSON.parse(sessionUser);
    const results = await getAllOperations(id);
    const sum = await sumOperation(id)
    res.json({ data: results, sum: sum });
};

module.exports = {getOperation} 
