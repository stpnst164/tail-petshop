import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    // const nav = useNavigate();
    return (
        <>
            <div className="sidebar">
                {/* <div className="container"> */}
                <div className="sidebar__wrapper">
                    <div className="container">
                        <div className="sidebar__options">
                            <NavLink to="/addItems" className="sidebar__option">
                                <div className="sidebar__option__img">
                                    <a href="#">
                                        <img
                                            src={assets.add_icon}
                                            alt="Add Items icon"
                                        />
                                    </a>
                                </div>
                                <div className="sidebar__option__title">
                                    <p>Добавить товары</p>
                                </div>
                            </NavLink>
                            <NavLink
                                to="/listItems"
                                className="sidebar__option">
                                <div className="sidebar__option__img">
                                    <a href="#">
                                        <img
                                            src={assets.list_icon}
                                            alt="List Items icon"
                                        />
                                    </a>
                                </div>
                                <div className="sidebar__option__title">
                                    <p>Список товаров</p>
                                </div>
                            </NavLink>
                            <NavLink to="/orders" className="sidebar__option">
                                <div className="sidebar__option__img">
                                    <a href="#">
                                        <img
                                            src={assets.orders_icon}
                                            alt="Orders icon"
                                        />
                                    </a>
                                </div>
                                <div className="sidebar__option__title">
                                    <p>Заказы</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Sidebar;
