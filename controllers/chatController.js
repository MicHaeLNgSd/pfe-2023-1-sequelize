const { Chat, User } = require('../models');
const { createChat } = require('../services/chat.service');

module.exports.createChat = async (req, res, next) => {
  try {
    const {
      body: { userId, ...chatData },
    } = req;

    await createChatAndAddUser(userId, chatData);

    res.send({ data: chat });
  } catch (error) {
    next(error);
  }
};

module.exports.getChats = async (req, res, next) => {
  try {
    const chat = await Chat.findAll();
    res.send({ data: chat });
  } catch (error) {
    next(error);
  }
};
