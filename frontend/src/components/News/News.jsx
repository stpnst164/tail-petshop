import React from 'react';
import { assets } from '../../assets/assets';
import './News.css';

const News = () => {
    return (
        <>
            <div className="news">
                <div className="container">
                    <div className="news__wrapper">
                        <div className="news__title">
                            <h4>Новинки</h4>
                        </div>
                        <div className="news__cards__wrapper">
                            <div className="news__cards__item">
                                <div className="news__cards__item__img">
                                    <img
                                        src={assets.news_card_img1}
                                        alt="First news card img"
                                    />
                                </div>
                                <div className="news__cards__item__info">
                                    <div className="news__cards__item__price">
                                        <h5>689 ₽</h5>
                                    </div>
                                    <div className="news__cards__item__text">
                                        <p>
                                            Ошейник Led (Лэд) Usb 1*46см Силикон
                                            Зеленый
                                        </p>
                                    </div>
                                    <div
                                        className="promotions__cards__item__btn 
                                    news__cards__item__btn">
                                        <button
                                            className="promotions__cards__item__cart 
                                        news__cards__item__cart">
                                            <p
                                                className="promotions__cards__item__cart__text 
                                            news__cards__item__cart__text">
                                                В корзину
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="news__cards__item">
                                <div className="news__cards__item__img">
                                    <img
                                        src={assets.news_card_img2}
                                        alt="Second news card img"
                                    />
                                </div>
                                <div className="news__cards__item__info">
                                    <div className="news__cards__item__price">
                                        <h5>5700 ₽</h5>
                                    </div>
                                    <div className="news__cards__item__text">
                                        <p>
                                            Лежанка Pet Comfort для собак мелких
                                            пород, 50х6...
                                        </p>
                                    </div>
                                    <div
                                        className="promotions__cards__item__btn 
                                    news__cards__item__btn">
                                        <button
                                            className="promotions__cards__item__cart 
                                        news__cards__item__cart">
                                            <p
                                                className="promotions__cards__item__cart__text 
                                            news__cards__item__cart__text">
                                                В корзину
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="news__cards__item">
                                <div className="news__cards__item__img">
                                    <img
                                        src={assets.news_card_img3}
                                        alt="Third news card img"
                                    />
                                </div>
                                <div className="news__cards__item__info">
                                    <div className="news__cards__item__price">
                                        <h5>350 ₽</h5>
                                    </div>
                                    <div className="news__cards__item__text">
                                        <p>
                                            Миска складная для собак и кошек
                                            Super Design силиконова...
                                        </p>
                                    </div>
                                    <div
                                        className="promotions__cards__item__btn 
                                    news__cards__item__btn">
                                        <button
                                            className="promotions__cards__item__cart 
                                        news__cards__item__cart">
                                            <p
                                                className="promotions__cards__item__cart__text 
                                            news__cards__item__cart__text">
                                                В корзину
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="news__cards__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
