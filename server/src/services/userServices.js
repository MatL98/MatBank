const ContainerDao = require("../models/dao/factoryDaos");

const user = ContainerDao.user;

const getAllUser = async () => {
  try {
    const response = await user.getAll();
		console.log(response);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const getUserById = async (id) => {
  try {
    const response = await user.getById(id);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const saveUser = async (user) => {
  try {
    const response = await user.save(user);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
module.exports = {
  getAllUser,
  getUserById,
  saveUser,
};
