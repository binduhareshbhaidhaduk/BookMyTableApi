import express from 'express';
import { addOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } from '../Controllers/Booking/orderController.js';

const order = express.Router();

// Routes for Order operations
order.post('/order', addOrder);
order.get('/order', getAllOrders);

order.get('/order/:id', getOrderById);
order.put('/order/:id', updateOrder);
order.delete('/order/:id', deleteOrder);

export default order;
