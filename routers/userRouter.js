const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const TodoController = require('../controllers/todoController');
const OrderController = require('../controllers/orderController');
const paginationMW = require('../middlewares/pagination');
const { findUser } = require('../middlewares/findUserMW');

userRouter.post('/', UserController.createUser);
userRouter.get('/', paginationMW, UserController.getUsers);
userRouter.get('/:userId', UserController.getUser);
userRouter.put('/:userId', UserController.updateUser);
userRouter.delete('/:userId', UserController.deleteUser);

userRouter.post('/:userId/todos', TodoController.createTodo);
userRouter.get('/:userId/todos', TodoController.getTodos);
userRouter.get('/:userId/todos/:todoId', TodoController.getTodos);
userRouter.put('/:userId/todos/:todoId', TodoController.updateTodo);
userRouter.delete('/:userId/todos/:todoId', TodoController.deleteTodo);

userRouter.post('/:userId/orders', OrderController.createOrder);
userRouter.get('/:userId/orders', paginationMW, OrderController.getOrders);

module.exports = userRouter;
