import userModel from '../models/userModel.js';

//добавление в корзину
const addToCart = async (request, response) => {
    try {
        let userData = await userModel.findOne({ _id: request.body.userId });
        let cartData = await userData.cartData;
        if (!cartData[request.body.itemId]) {
            cartData[request.body.itemId] = 1;
        } else {
            cartData[request.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(request.body.userId, { cartData });
        response.json({ success: true, message: 'Добавлено в корзину' });
    } catch (error) {
        console.log(error);
        response.json({ success: false, message: 'Error' });
    }
};

//удаление из корзины
const deleteFromCart = async (request, response) => {};

//получение данных корзины пользователя
const getCart = async (request, response) => {};

export { addToCart, deleteFromCart, getCart };
