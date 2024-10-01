import express from 'express';
import {
    addToCart,
    deleteFromCart,
    getCart
} from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

//endpoints
cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/delete', authMiddleware, deleteFromCart);
cartRouter.post('/get', authMiddleware, getCart);

export default cartRouter;
