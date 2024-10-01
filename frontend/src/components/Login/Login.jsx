import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';

const Login = ({ setLogin }) => {
    const { url, setToken } = useContext(StoreContext);

    const [currState, setCurrState] = useState('Войти');
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    const onLogin = async (event) => {
        //page not reloaded
        event.preventDefault();
        let newUrl = url;
        if (currState === 'Войти') {
            newUrl += '/api/user/login';
        } else {
            newUrl += '/api/user/register';
        }

        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            setLogin(false);
        } else {
            alert(response.data.message);
        }
    };

    return (
        <>
            <div className="login">
                <form onSubmit={onLogin} action="" className="login-form">
                    <div className="login-form__title">
                        <h2>{currState}</h2>
                        <img
                            className="grey_close__icon"
                            onClick={() => setLogin(false)}
                            src={assets.grey_close__icon}
                            alt="Close icon"
                        />
                    </div>
                    <div className="login-form__inputs">
                        {currState === 'Войти' ? (
                            <></>
                        ) : (
                            <input
                                name="name"
                                onChange={onChangeHandler}
                                value={data.name}
                                className="login-form__input"
                                type="text"
                                placeholder="Ваше имя"
                                required
                            />
                        )}
                        <input
                            name="email"
                            onChange={onChangeHandler}
                            value={data.email}
                            className="login-form__input"
                            type="email"
                            placeholder="Ваша почта"
                            required
                        />
                        <input
                            name="password"
                            onChange={onChangeHandler}
                            value={data.password}
                            className="login-form__input"
                            type="password"
                            placeholder="Пароль"
                            required
                        />
                    </div>
                    <button type="submit" className="login-form__btn">
                        {currState === 'Зарегистрироваться'
                            ? 'Создать аккаунт'
                            : 'Войти'}
                    </button>
                    <div className="login-form__conditions">
                        <input type="checkbox" required />
                        <span>
                            Я ознакомлен (-на) и согласен (-на) с Политикой
                            конфиденциальности
                        </span>
                    </div>
                    <div className="login-form__question">
                        {currState === 'Зарегистрироваться' ? (
                            <p className="login__curr">
                                Уже есть существующий аккаунт?
                                <span onClick={() => setCurrState('Войти')}>
                                    Нажать здесь
                                </span>
                            </p>
                        ) : (
                            <p className="login__new">
                                Создать новый аккаунт?
                                <span
                                    onClick={() =>
                                        setCurrState('Зарегистрироваться')
                                    }>
                                    Нажать здесь
                                </span>
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
