import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                {/* <div className="container"> */}
                <div className="sidebar__wrapper">
                    <div className="sidebar__section">
                        <div className="sidebar__section__title">
                            <p>Товары для собак</p>
                        </div>
                        <hr className="divider" />
                        <div className="sidebar__section__categories">
                            <div className="">
                                <a href="">Корма</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Миски</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Амуниция</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Лежанки</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Игрушки</a>
                            </div>
                            <hr className="grey-divider" />
                        </div>
                    </div>
                    <div className="sidebar__section">
                        <div className="sidebar__section__title">
                            <p>Товары для кошек</p>
                        </div>
                        <hr className="divider" />
                        <div className="sidebar__section__categories">
                            <div className="">
                                <a href="">Корма</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Миски</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Туалеты</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Наполнители</a>
                            </div>
                            <hr className="grey-divider" />
                            <div className="">
                                <a href="">Когтеточки</a>
                            </div>
                            <hr className="grey-divider" />
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Sidebar;
