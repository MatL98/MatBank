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
	try {
		const data = await getAllSessions()
		const dataUser = data[0]
		const dataUserParse = JSON.parse(dataUser.user)
		const userData = dataUserParse
		let id = userData.id
    return id;
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

const deleteSession = async (id) => {
  try {
    const response = await session.delete(id);
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
