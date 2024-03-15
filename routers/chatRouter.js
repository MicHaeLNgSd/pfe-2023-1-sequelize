const chatRouter = require('express').Router();
const ChatRouter = require('../controllers/chatController');

chatRouter.post('/', ChatRouter.createChat);
chatRouter.get('/', ChatRouter.getChats);

module.exports = chatRouter;
