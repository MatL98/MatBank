const ContainerDao = require("../models/dao/factoryDaos");
const user = ContainerDao.user;

const getAllUser = async () => {
  try {
    const response = await user.getAll();
		const data = JSON.parse(response)
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const getUserById = async (id) => {
  try {
    const response = await user.getById(id);
		const data = JSON.parse(response)
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const saveUser = async (newUser) => {
  try {
    const response = await user.save(newUser);
		const data = JSON.parse(response)
    return data;
  } catch (error) {
    throw Error(error);
  }
};
module.exports = {
  getAllUser,
  getUserById,
  saveUser,
  //getOperationByUser
};
