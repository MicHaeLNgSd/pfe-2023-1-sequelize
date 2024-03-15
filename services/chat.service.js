module.exports.createChat = async (userId, chatData) => {
  let user;
  if (userId) {
    user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }
  }

  const chat = await Chat.create(chatData);

  if (user) {
    await chat.addUser(user);
  }

  return chat;
};
