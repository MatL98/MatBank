const ContainerDao = require("../models/dao/factoryDaos");
const session = ContainerDao.session;

const getAllSessions = async () => {
  try {
    const response = await session.getAll()
		const data = JSON.parse(response)
    return data;
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
    const response = await session.getById(id)
		const data = JSON.parse(response)
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const saveSession = async (newSession) => {
  try {
    const response = await session.save(newSession);
		const data = JSON.parse(response)
    return data;
  } catch (error) {
    throw Error(error);
  }
};

const deleteSession = async () => {
  try {
    const response = await session.delete();
		const data = JSON.parse(response)
    return data;
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
