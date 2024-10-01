import React from 'react';
import { assets } from '../../assets/assets';
import './PopularBrands.css';

const PopularBrands = () => {
    return (
        <>
            <div className="brands">
                <div className="container">
                    <div className="brands__wrapper">
                        <div className="brands__title">
                            <h4>Популярные бренды</h4>
                        </div>
                        <div className="brands__cards">
                            <div className="brands__cards__item">
                                <a href="#">
                                    <img
                                        src={assets.brands_img1}
                                        alt="First brand img"
                                    />
                                </a>
                            </div>
                            <div className="brands__cards__item">
                                <a href="#">
                                    <img
                                        src={assets.brands_img2}
                                        alt="Second brand img"
                                    />
                                </a>
                            </div>
                            <div className="brands__cards__item">
                                <a href="#">
                                    <img
                                        src={assets.brands_img3}
                                        alt="Third brand img"
                                    />
                                </a>
                            </div>
                            <div className="brands__cards__item">
                                <a href="#">
                                    <img
                                        src={assets.brands_img4}
                                        alt="Fourth brand img"
                                    />
                                </a>
                            </div>
                            <div className="brands__cards__item">
                                <a href="#">
                                    <img
                                        src={assets.brands_img5}
                                        alt="Fifth brand img"
                                    />
                                </a>
                            </div>
                            <div className="brands__cards__item">
                                <a href="#">
                                    <img
                                        src={assets.brands_img6}
                                        alt="Sixth brand img"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularBrands;
