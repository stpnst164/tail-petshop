import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import Header from '../../components/Header/Header';
import Sale from '../../components/Sale/Sale';
import Navbar from '../../components/Navbar/Navbar';

const Cart = () => {
    const { cartItems, goods_list, deleteFromCart } = useContext(StoreContext);

    return (
        <>
            <Sale />
            <Header />
            <Navbar />
            <div className="cart">
                <div className="container">
                    <div className="cart-items">
                        <div className="cart-items__title">
                            <p>Изображение</p>
                            <p>Бренд</p>
                            <p>Название</p>
                            <p>Количество</p>
                            <p>Вес</p>
                            <p>Цена</p>
                            <p>Итоговая стоимость</p>
                            <p>Удалить</p>
                        </div>
                        <br />
                        <hr />
                        {/* {goods_list.map((item, index) => {
                            //если корзина содержит хоть 1 товар
                            if (cartItems[item._id] > 0) {
                                return (
                                    <>
                                        <div className="cart-items__title cart-items-item">
                                            <p>{item.title}</p>
                                        </div>
                                    </>
                                );
                            }
                        })} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
