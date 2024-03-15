const { Todo, User } = require('../models');

module.exports.createTodo = async (req, res, next) => {
  try {
    const { body, user } = req;

    // v1 старий нецікавий метод
    // const todo = await Todo.create({...body, userId});

    // v2 додамо магії
    const realBody = { idDone: false, ...body };

    // const user = await User.findByPk(userId);
    const todo = await user.createTodo({ ...realBody });

    res.send({ data: todo });
  } catch (error) {
    next(error);
  }
};

module.exports.getTodos = async (req, res, next) => {
  try {
    const { user } = req;

    // const todos = await Todo.findAll({ where: { userId: userId } });
    // const user = await User.findByPk(userId);
    const todos = await user.getTodos();

    res.send({ data: todos });
  } catch (error) {
    next(error);
  }
};

module.exports.getTodo = async (req, res, next) => {
  try {
    const {
      params: { todoId },
      user,
    } = req;

    // const user = await User.findByPk(userId);
    const todos = await user.getTodo(todoId);

    res.send({ data: todos });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTodo = async (req, res, next) => {
  try {
    const {
      body,
      params: { todoId },
    } = req;

    const todo = await Todo.findByPk(todoId);
    const updatedTodo = await todo.update(body, { returning: true });

    res.send({ data: updatedTodo });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  try {
    const {
      body,
      params: { todoId },
      user,
    } = req;

    const todoToDelete = await Todo.findOne({
      where: {
        id: todoId,
        userId: user.id,
      },
    });
    await todoToDelete.destroy();

    res.send({ data: todoToDelete });
  } catch (error) {
    next(error);
  }
};

// module.exports.getAllTodos = async (req, res, next) => {
//   try {
//     const todos = await Todo.findAll();
//     res.send({ data: todos });
//   } catch (error) {
//     next(error);
//   }
// };
