const ContainerDao = require("../models/dao/factoryDaos");
const operation = ContainerDao.operation;

const getAllOperation = async (id) => {
  try {
    const response = await operation.getOperationsByUser(id);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const saveOperation = async (infoOperation) => {
  try {
    const response = await operation.save(infoOperation);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    throw Error(error);
  }
};
const deleteOperation = async () => {
  try {
    const response = await operation.delete();
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    throw Error(error);
  }
};
const updateOperation = async (id, operationUpdate) => {
  try {
    const response = await operation.update(id, operationUpdate);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    throw Error(error);
  }
};
const sumOperation = async (id) => {
  try {
    const response = await operation.sumCash(id);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getAllOperation,
  saveOperation,
  deleteOperation,
  updateOperation,
  sumOperation,
};
