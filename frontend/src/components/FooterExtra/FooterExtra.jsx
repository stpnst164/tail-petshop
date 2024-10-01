import React from 'react';
import { assets } from '../../assets/assets';
import './FooterExtra.css';

const FooterExtra = () => {
    return (
        <>
            <div className="footer-extra">
                <div className="container">
                    <div className="footer-extra__wrapper">
                        <div className="footer-extra__catalog">
                            <div className="footer-extra__catalog__title">
                                <p>Каталог</p>
                            </div>
                            <ul className="footer-extra__catalog__list">
                                <li>
                                    <a href="#">Товары для собак</a>
                                </li>
                                <li>
                                    <a href="#">Товары для кошек</a>
                                </li>
                                <li>
                                    <a href="#">Товары для грызунов</a>
                                </li>
                                <li>
                                    <a href="#">Товары для птиц</a>
                                </li>
                                <li>
                                    <a href="#">Товары для рыб</a>
                                </li>
                                <li>
                                    <a href="#">Вет.аптека</a>
                                </li>
                                <li>
                                    <a href="#">Купить питомца</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-extra__company">
                            <div className="footer-extra__company__title">
                                <p>Компания</p>
                            </div>
                            <ul className="footer-extra__company__list">
                                <li>
                                    <a href="#">О нас</a>
                                </li>
                                <li>
                                    <a href="#">Магазины</a>
                                </li>
                                <li>
                                    <a href="#">Новости</a>
                                </li>
                                <li>
                                    <a href="#">Вакансии</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-extra__clients">
                            <div className="footer-extra__clients__title">
                                <p>Покупателям</p>
                            </div>
                            <ul className="footer-extra__clients__list">
                                <li>
                                    <a href="#">Акции</a>
                                </li>
                                <li>
                                    <a href="#">Бренды</a>
                                </li>
                                <li>
                                    <a href="#">Бонусная программа</a>
                                </li>
                                <li>
                                    <a href="#">Доставка и оплата</a>
                                </li>
                                <li>
                                    <a href="#">Условия возврата</a>
                                </li>
                                <li>
                                    <a href="#">Часто задаваемые вопросы</a>
                                </li>
                                <li>
                                    <a href="#">Политика конфиденциальности</a>
                                </li>
                                <li>
                                    <a href="#">Пользовательское соглашение</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-extra__payment">
                            <div className="footer-extra__payment__title">
                                <p>Мы принимаем к оплате</p>
                            </div>
                            <div className="footer-extra__payment__ways">
                                <div className="footer-extra__payment__visa">
                                    <a href="#">
                                        <img
                                            src={assets.payment_img1}
                                            alt="First payment img"
                                        />
                                    </a>
                                </div>
                                <div className="footer-extra__payment__master__card">
                                    <a href="#">
                                        <img
                                            src={assets.payment_img2}
                                            alt="Second payment img"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="divider footer-extra-divider" />
                    <div className="footer-extra__captions">
                        <p>© 2024 Зоомагазин «Хвость»</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterExtra;
