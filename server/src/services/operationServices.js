const ContainerDao = require("../models/dao/factoryDaos");
const operation = ContainerDao.operation;

const getAllOperations = async (id) => {
  try {
    const response = await operation.getAllOperations(id)
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const saveOperation = async (infoOperation) => {
  try {
    const response = await operation.save(infoOperation);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const deleteOperation = async () => {
  try {
    const response = await operation.delete();
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const updateOperation = async (id, operationUpdate) => {
  try {
    const response = await operation.update(id, operationUpdate);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const sumOperation = async (id) => {
  try {
    const response = await operation.sumCash(id)
    return response;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { getAllOperations, saveOperation, deleteOperation, updateOperation, sumOperation };
