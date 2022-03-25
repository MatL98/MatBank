const ContainerDao = require("../models/dao/factoryDaos");
const session = ContainerDao.session;

const getAllSessions = async () => {
  try {
    const response = await session.getAll()
    return response;
  } catch (error) {
    throw Error(error);
  }
};

const getSessionById = async () => {
	const dataUser = await session.getAllSessions()
  const dataUserParse = JSON.parse(dataUser)
  const userData = dataUserParse[0].user
	let id = userData.id
  console.log(userData.id)
  try {
    const response = await session.getById(id);
		console.log(response);
    return response;
  } catch (error) {
    throw Error(error);
  }
};

const saveSession = async () => {
  try {
    const response = await session.save();
    return response;
  } catch (error) {
    throw Error(error);
  }
};

const deleteSession = async () => {
  try {
    const response = await session.delete();
    return response;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getAllSessions,
  getSessionById,
  saveSession,
  deleteSession,
};
