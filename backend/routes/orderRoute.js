import express from 'express'
import {placeOrderCashOnDelivery, placeOrderStripe, getAllOrders, getUserOrders, updateOrderStatus, verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();

orderRouter.post('/list', adminAuth ,getAllOrders);
orderRouter.post('/status', adminAuth, updateOrderStatus);

orderRouter.post('/placeCashOnDelivery', authUser, placeOrderCashOnDelivery);
orderRouter.post('/placeStripe', authUser, placeOrderStripe);

orderRouter.post('/userOrders', authUser, getUserOrders);
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter
