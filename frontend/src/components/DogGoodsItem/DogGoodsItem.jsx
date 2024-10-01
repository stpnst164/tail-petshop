import React, { useContext, useState } from 'react';
import './DogGoodsItem.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const DogGoodsItem = ({
    id,
    image,
    brand,
    title,
    categoryOfPet,
    categoryOfGood,
    weight,
    price
}) => {
    const { url } = useContext(StoreContext);

    // const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, deleteFromCart } = useContext(StoreContext);

    return (
        <>
            <div className="promotions__cards__item dog-goods-item">
                <div className="dog-goods-item__img">
                    <img
                        //load images from mongodb to frontend
                        src={url + '/uploads/' + image}
                        width="200px"
                        height="200px"
                        alt="Dog goods image"
                    />
                </div>
                <div className="dog-goods-item__brand">
                    <h5>{brand}</h5>
                </div>
                <div className="promotions__cards__item__text dog-goods-item__title">
                    <h6>{title}</h6>
                </div>
                <div className="weight-price">
                    <div className="dog-goods-item__weight">
                        <div className="promotions__cards__item__btn">
                            <button className="promotions__cards__item__weight weight">
                                <p className="promotions__cards__item__weight__text">
                                    {weight}
                                </p>
                            </button>
                        </div>
                    </div>

                    <div className="dog-goods-item__price">
                        <p>{price}</p>
                    </div>
                </div>

                {!cartItems[id] ? (
                    <div
                        onClick={() => addToCart(id)}
                        className="promotions__cards__item__btn add">
                        <button className="promotions__cards__item__cart">
                            <p className="promotions__cards__item__cart__text">
                                В корзину
                            </p>
                        </button>
                    </div>
                ) : (
                    <div className="dog-goods-item__counter">
                        <img
                            onClick={() => deleteFromCart(id)}
                            src={assets.delete_icon}
                            alt="Delete iocn"
                        />
                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon}
                            alt="Add iocn"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default DogGoodsItem;
