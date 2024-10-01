import React, { useContext, useState } from 'react';
import './DogGoodsDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import DogGoodsItem from '../DogGoodsItem/DogGoodsItem';
import { goods_list } from '../../Data/goods_list';

const DogGoodsDisplay = ({ categoryOfGood, categoryOfPet }) => {
    //лист товаров для собак на странице товаров для собак (Все товары)
    const { goods_list } = useContext(StoreContext);

    return (
        <>
            <div className="dog-goods-display" id="dog-goods-display">
                <div className="container">
                    <h2 className="dog-goods-display__title">Все товары</h2>
                    <div className="dog-foods-display__list">
                        {goods_list.map((item, index) => {
                            if (
                                //фильтрация по категории при клике на опр.категорию
                                categoryOfGood === 'Все' ||
                                (categoryOfGood === item.categoryOfGood &&
                                    categoryOfPet === item.categoryOfPet)

                                /*Тут не работают все товары, но при клике все работает под 
                                каждую категорию */
                                // categoryOfPet === item.categoryOfPet &&
                                // categoryOfGood === item.categoryOfGood

                                /*в этом случае - высвечивается список товаров для собак и при клике на категорию -
                                ничего не работает*/
                                // categoryOfPet === item.categoryOfPet ||
                                // categoryOfGood === item.categoryOfGood
                            ) {
                                return (
                                    <DogGoodsItem
                                        key={index}
                                        id={item.id}
                                        image={item.image}
                                        brand={item.brand}
                                        title={item.title}
                                        categoryOfPet={item.categoryOfPet}
                                        categoryOfGood={item.categoryOfGood}
                                        weight={item.weight}
                                        price={item.price}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DogGoodsDisplay;
