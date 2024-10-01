import React, { useEffect, useState } from 'react';
import './ListItems.css';
import axios from 'axios';

export const ListItems = () => {
    const url = 'http://localhost:4000';
    const [list, setList] = useState([]);

    const fetchList = async () => {
        //путь, по которому можно увидеть список товаров
        const response = await axios.get(`${url}/api/goods/list`);
        // console.log(response.data);
        if (response.data.success) {
            //load the data
            setList(response.data.data);
        } else {
            console.log('Data not loaded');
        }
    };

    //delete dog good from the list
    const deleteGood = async (goodId) => {
        // console.log(foodId);

        const response = await axios.post(`${url}/api/goods/delete`, {
            id: goodId
        });

        await fetchList();
        if (response.data.success) {
            console.log('Товар успешно удален');
        } else {
            console.log('Error');
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <>
            <div className="list-items add-items flex-col">
                <p>Список кормов для собак</p>
                <div className="list-items__table">
                    <div className="list-items__table__format title">
                        <b>Изображение</b>
                        <b>Бренд</b>
                        <b>Название</b>
                        <b>Категория животного</b>
                        <b>Категория товара</b>
                        <b>Вес</b>
                        <b>Цена</b>
                    </div>
                    {list.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="list-items__table__format">
                                <img
                                    className="list-items__table__format__img"
                                    src={`${url}/uploads/` + item.image}
                                    width="150px"
                                    height="200px"
                                    alt=""
                                />
                                <p className="list-items__card__brand">
                                    {item.brand}
                                </p>
                                <p className="list-items__card__title">
                                    {item.title}
                                </p>
                                <p className="list-items__card__category__pet">
                                    {item.categoryOfPet}
                                </p>
                                <p className="list-items__card__category__food">
                                    {item.categoryOfGood}
                                </p>
                                <p className="list-items__card__weight">
                                    {item.weight}
                                </p>
                                <p className="list-items__card__price">
                                    {item.price + ` ₽`}
                                </p>
                                <p
                                    onClick={() => deleteGood(item._id)}
                                    className="cursor">
                                    X
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default ListItems;
