import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Header.css';
import { useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ setLogin }) => {
    const { token, setToken } = useContext(StoreContext);
    // // Допустим, после успешного входа вы обновляете токен
    const handleLoginSuccess = (newToken) => {
        setToken(newToken);
    };

    const navigate = useNavigate();

    const url = 'http://localhost:4000';

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/');
    };

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <a href="#">
                                <Link to="/">
                                    <img
                                        src={assets.logo}
                                        width="200px"
                                        height="100px"
                                        alt="Logo"
                                    />
                                </Link>
                            </a>
                        </div>
                        <div className="header__info__wrapper">
                            <div className="header__info">
                                <div className="header__info-location">
                                    <a
                                        className="header__info-location__text"
                                        href="#">
                                        Энгельс
                                    </a>
                                </div>
                                <div className="header__info-delivery">
                                    <a
                                        className="header__info-delivery__text"
                                        href="#">
                                        Бесплатная доставка от 500 руб
                                    </a>
                                </div>
                                <div className="header__info-phone">
                                    <a
                                        className="header__info-phone__text"
                                        href="#">
                                        88-88-88
                                    </a>
                                </div>
                            </div>
                            <div className="header__search">
                                <div className="header__search-input">
                                    <input
                                        className="header__search-input__text"
                                        type="text"
                                        placeholder="Поиск"
                                    />
                                    <button className="header__search-input__btn">
                                        <img
                                            src={assets.search_icon}
                                            alt="Search icon"
                                        />
                                    </button>
                                </div>
                                <div className="header__search__catalog">
                                    <button href="#">
                                        <img
                                            src={assets.burger_menu_icon}
                                            alt="Burger menu icon"
                                        />
                                        <span className="header__search__catalog__title">
                                            Каталог товаров
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {!token ? (
                            <div className="header__actions">
                                <div className="header__actions__user">
                                    <a href="#" onClick={() => setLogin(true)}>
                                        <img
                                            src={assets.user_icon}
                                            alt="User icon"
                                        />
                                    </a>
                                </div>
                                <div className="header__actions__fav">
                                    <a href="#">
                                        <img
                                            src={assets.fav_icon}
                                            alt="Fav icon"
                                        />
                                    </a>
                                    <span className="header__actions__fav__count">
                                        0
                                    </span>
                                </div>
                                <div className="header__actions__cart">
                                    <a href="#">
                                        <Link to="/cart">
                                            <img
                                                src={assets.cart_icon}
                                                alt="Cart icon"
                                            />
                                        </Link>
                                    </a>
                                    <span className="header__actions__cart__count">
                                        0
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="header-profile">
                                <img
                                    className="header-profile__img"
                                    src={assets.profile_icon}
                                    width="40px"
                                    height="40px"
                                    alt="Profile icon"
                                />
                                <ul className="header-profile-dropdown">
                                    <li className="header-profile-dropdown__link">
                                        <img
                                            src={assets.bag_icon}
                                            width="20px"
                                            height="20px"
                                            alt="Bag icon"
                                        />
                                        <p>Заказы</p>
                                    </li>
                                    <hr />
                                    <li
                                        onClick={logout}
                                        className="header-profile-dropdown__link">
                                        <img
                                            src={assets.logout_icon}
                                            width="20px"
                                            height="20px"
                                            alt="Logout icon"
                                        />
                                        <p>Выйти</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
