import express from 'express';
import cors from 'cors';
// import { connectDB } from './config/db.js';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import 'dotenv/config.js';
import cartRouter from './routes/cartRouter.js';
import goodRouter from './routes/goodRouter.js';

mongoose
    .connect(
        'mongodb+srv://admin:1234567890@cluster0.pyedw.mongodb.net/tail-petshop'
    )
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log('DB Error', err));

//App config
const app = express();
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json()); //получение запроса из frontend -> backend
app.use(cors()); //доступ к backend от frontend

//Connect to DB
// connectDB();

//api endpoints
app.use('/api/goods', goodRouter);
app.use('/uploads', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('api/cart', cartRouter);

app.get('/', (request, response) => {
    response.send('API Working');
}); //запрос данных от сервера

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
