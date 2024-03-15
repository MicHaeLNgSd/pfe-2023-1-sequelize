const todoRouter = require('express').Router();
const TodoController = require('../controllers/todoController');
const pagination = require('../middlewares/paginationMW');

todoRouter.post('/', TodoController.createTodo);
todoRouter.get('/', pagination, TodoController.getTodos);
todoRouter.get('/:todoId', TodoController.getTodos);
todoRouter.put('/:todoId', TodoController.updateTodo);
todoRouter.delete('/:todoId', TodoController.deleteTodo);

module.exports = todoRouter;
