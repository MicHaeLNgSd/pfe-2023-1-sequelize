const orderRouter = require('express').Router();
const OrderController = require('../controllers/orderController');
const pagination = require('../middlewares/paginationMW');

orderRouter.post('/', OrderController.createOrder);
orderRouter.get('/', pagination, OrderController.getOrders);

module.exports.orderRouter = orderRouter;
