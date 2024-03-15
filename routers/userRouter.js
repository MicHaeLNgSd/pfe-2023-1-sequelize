const userRouter = require('express').Router();
const UserController = require('../controllers/userController');
const pagination = require('../middlewares/paginationMW');
const { findUser } = require('../middlewares/findUserMW');
const todoRouter = require('./todoRouter');
const { orderRouter } = require('./orderRouter');

userRouter.post('/', UserController.createUser);
userRouter.get('/', pagination, UserController.getUsers);
userRouter.get('/:userId', findUser, UserController.getUser);
userRouter.put('/:userId', findUser, UserController.updateUser);
userRouter.delete('/:userId', findUser, UserController.deleteUser);

userRouter.use('/:userId/todos', findUser, todoRouter);
userRouter.use('/:userId/orders', orderRouter);

module.exports = userRouter;
