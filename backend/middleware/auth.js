import jwt from 'jsonwebtoken';

const authMiddleware = async (request, response, next) => {
    const { token } = request.headers;
    if (!token) {
        return response.json({
            success: false,
            message: 'Не авторизован вход'
        });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        request.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        response.json({ success: false, message: 'Error' });
    }
};

export default authMiddleware;
