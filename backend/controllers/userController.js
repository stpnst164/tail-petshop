import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

//login user
export const loginUser = async (request, response) => {
    const { email, password } = request.body;
    try {
        //проверка пользователя по почте
        const user = await userModel.findOne({ email });

        //если вводятся данные не того пользователя, высвечивается ошибка
        if (!user) {
            return response.json({
                success: false,
                message: 'Пользователя не существует'
            });
        }

        //сравнение введенного пароля от хранимого пароля пользователя
        const isMatch = await bcrypt.compare(password, user.password);

        //если не совпадают, высвечивается ошибка
        if (!isMatch) {
            return response.json({
                success: false,
                message: 'Неверные данные'
            });
        }

        //если все хорошо, создается токен
        const token = createToken(user._id);
        response.json({ success: true, token });
    } catch (error) {
        console.log(error);
        response.json({ succes: false, message: 'Error' });
    }
};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
export const registerUser = async (request, response) => {
    const { name, email, password } = request.body;
    try {
        //проверка существует ли пользователь
        const exists = await userModel.findOne({ email });
        if (exists) {
            return response.json({
                success: false,
                message:
                    'Пользователь с почтовым адресом ${email} уже существует'
            });
        }

        //валидация почты
        if (!validator.isEmail(email)) {
            return response.json({
                success: false,
                message: 'Пожалуйста, введите правильную почту'
            });
        }

        //валидация пароля (надежность)
        if (password.length < 8) {
            return response.json({
                success: false,
                message: 'Пожалуйста, введите более надежный пароль'
            });
        }

        //хранение пароля пользователя
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //создание нового пользователя
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        //хранение нового пользователя в переменной user
        const user = await newUser.save();
        const token = createToken(user._id);
        response.json({ success: true, token });
    } catch (error) {
        console.log(error);
        response.json({ success: false, message: 'Error' });
    }
};
