import React from 'react';
import './Promotions.css';
import { assets } from '../../assets/assets';

const Promotions = () => {
    return (
        <>
            <div className="promotions">
                <div className="container">
                    <div className="promotions__wrapper">
                        <div className="promotions__title">
                            <h4>Акции дня</h4>
                        </div>
                        <div className="promotions__cards">
                            <div className="promotions__cards__item">
                                <div className="promotions__cards__item__img">
                                    <img
                                        src={assets.promotion_card_img1}
                                        width="250px"
                                        height="250px"
                                        alt="First promotion card img"
                                    />
                                    {/* <Fav
                                        userFrom={localStorage.getItem('token')}
                                    /> */}
                                    <button className="promotion__btn">
                                        <p className="promotion__btn__text">
                                            Акция
                                        </p>
                                    </button>
                                    <button className="promotion__sale__btn">
                                        <p className="promotion__sale__btn__text">
                                            -10%
                                        </p>
                                    </button>
                                </div>
                                <div className="promotions__cards__item__price">
                                    <h4 className="current-price">1170 ₽</h4>
                                    <a className="old-price">1300 ₽</a>
                                </div>
                                <div className="promotions__cards__item__text">
                                    <p>
                                        Grandorf сухой корм для взрослых собак
                                        мелких пород с ягненком и индейкой
                                    </p>
                                </div>
                                <div className="promotions__cards__item__btn">
                                    <button className="promotions__cards__item__weight">
                                        <p className="promotions__cards__item__weight__text">
                                            1 кг
                                        </p>
                                    </button>
                                </div>
                                <div className="promotions__cards__item__btn">
                                    <button className="promotions__cards__item__cart">
                                        <p className="promotions__cards__item__cart__text">
                                            В корзину
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div className="promotions__cards__item">
                                <div className="promotions__cards__item__img">
                                    <img
                                        src={assets.promotion_card_img2}
                                        alt="First promotion card img"
                                    />
                                    <button className="fav__btn">
                                        <img
                                            src={assets.fav_blue_icon}
                                            alt="Fav blue icon"
                                        />
                                    </button>
                                    <button className="promotion__btn">
                                        <p className="promotion__btn__text">
                                            Акция
                                        </p>
                                    </button>
                                    <button className="promotion__sale__btn">
                                        <p className="promotion__sale__btn__text">
                                            -15%
                                        </p>
                                    </button>
                                </div>
                                <div className="promotions__cards__item__price">
                                    <h4 className="current-price">1821 ₽</h4>
                                    <span className="old-price">2142 ₽</span>
                                </div>
                                <div className="promotions__cards__item__text golden__item__text">
                                    <p>
                                        Сухой корм Royal Canin Golden Retriever
                                        Adult для взрослых собак породы Голден
                                        Ретривер от 15 месяцев
                                    </p>
                                </div>
                                <div className="promotions__cards__item__btn">
                                    <button className="promotions__cards__item__weight golden__item__weight">
                                        3 кг
                                    </button>
                                </div>
                                <div className="promotions__cards__item__btn">
                                    <button className="promotions__cards__item__cart">
                                        <p className="promotions__cards__item__cart__text">
                                            В корзину
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div className="promotions__cards__item">
                                <div className="promotions__cards__item__img">
                                    <img
                                        src={assets.promotion_card_img3}
                                        alt="First promotion card img"
                                    />
                                    <button className="fav__btn">
                                        <img
                                            src={assets.fav_blue_icon}
                                            alt="Fav blue icon"
                                        />
                                    </button>
                                    <button className="promotion__btn">
                                        <p className="promotion__btn__text">
                                            Акция
                                        </p>
                                    </button>
                                    <button className="promotion__sale__btn">
                                        <p className="promotion__sale__btn__text">
                                            -10%
                                        </p>
                                    </button>
                                </div>
                                <div className="promotions__cards__item__price">
                                    <h4 className="current-price">73 ₽</h4>
                                    <span className="old-price">66 ₽</span>
                                </div>
                                <div className="promotions__cards__item__text">
                                    <p>
                                        FLORIDA пауч для взрослых кошек с
                                        чувствительным пищеварением: кусочки с
                                        лососем в соусе
                                    </p>
                                </div>
                                <div className="promotions__cards__item__btn">
                                    <button className="promotions__cards__item__weight">
                                        85 г
                                    </button>
                                </div>
                                <div className="promotions__cards__item__btn">
                                    <button className="promotions__cards__item__cart">
                                        <p className="promotions__cards__item__cart__text">
                                            В корзину
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Promotions;
