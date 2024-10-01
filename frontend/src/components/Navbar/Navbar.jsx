import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="navbar__wrapper">
                        <nav className="nav">
                            <ul className="nav-list">
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Собаки
                                    </a>
                                </li>
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Кошки
                                    </a>
                                </li>
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Грызуны
                                    </a>
                                </li>
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Птицы
                                    </a>
                                </li>
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Рыбы
                                    </a>
                                </li>
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Другие питомцы
                                    </a>
                                </li>
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Вет.аптека
                                    </a>
                                </li>
                                <li className="nav-list__link">
                                    <a className="nav-list__item" href="#">
                                        Акции
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
