import React from 'react';
import { assets } from '../../assets/assets';
import './../Sale/Sale.css';

const Sale = () => {
    return (
        <>
            <div className="sale">
                <div className="container">
                    <div className="sale__text__btn">
                        <div className="sale__text">
                            <p>
                                С 1 июня по 31 августа действует скидка 15% при
                                онлайн заказе. Успей поучаствовать в акции!
                            </p>
                        </div>
                        <div className="sale__btn">
                            <img
                                src={assets.close__icon}
                                alt="Sale close btn"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sale;
