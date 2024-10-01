import React, { useEffect, useState } from 'react';
import './AddItems.css';
import './../../index.css';
import { assets } from '../../assets/assets';
import axios from 'axios';

export const AddItems = () => {
    const url = 'http://localhost:4000';

    const [image, setImage] = useState(false);

    //store data to frontend
    const [data, setData] = useState({
        brand: '',
        title: '',
        categoryOfPet: '',
        categoryOfGood: '',
        weight: '',
        price: ''
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    //проверка отправки данных в консоли
    useEffect(() => {
        console.log(data);
    }, [data]);

    //отправка данных в консоль, если все поля заполнены (required)
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('brand', data.brand);
        formData.append('title', data.title);
        formData.append('categoryOfPet', data.categoryOfPet);
        formData.append('categoryOfGood', data.categoryOfGood);
        formData.append('weight', data.weight);
        formData.append('price', data.price);
        formData.append('image', image);

        //Response from the server
        const response = await axios.post(`${url}/api/goods/add`, formData);

        if (response.data.success) {
            setData({
                brand: '',
                title: '',
                categoryOfPet: '',
                categoryOfGood: '',
                weight: '',
                price: ''
            });
            setImage(false);
        } else {
        }
    };

    return (
        <>
            <div className="add-items">
                {/* <div className="container"> */}
                <form onSubmit={onSubmitHandler} className="flex-col">
                    <div className="add-items__img__upload flex-col">
                        <p>Загрузить изображение</p>
                        <label htmlFor="image">
                            <img
                                src={
                                    image
                                        ? URL.createObjectURL(image)
                                        : assets.upload__icon
                                }
                                alt="Upload icon"
                            />
                        </label>
                        <input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            id="image"
                            hidden
                            required
                        />
                    </div>
                    <div className="add-items__product__brand flex-col">
                        <p>Бренд товара</p>
                        <input
                            onChange={onChangeHandler}
                            value={data.brand}
                            type="text"
                            name="brand"
                            placeholder="Бренд товара"
                        />
                    </div>
                    <div className="add-items__product__title flex-col">
                        <p>Название товара</p>
                        <textarea
                            onChange={onChangeHandler}
                            value={data.title}
                            name="title"
                            rows="6"
                            placeholder="Название товара"></textarea>
                    </div>
                    <div className="add-items__category__pet flex-col">
                        <p>Категория животного:</p>
                        <select
                            onChange={onChangeHandler}
                            value={data.categoryOfPet}
                            name="categoryOfPet">
                            <option value="Нет">Нет</option>
                            <option value="Собаки">Собаки</option>
                            <option value="Кошки">Кошки</option>
                            <option value="Грызуны">Грызуны</option>
                            <option value="Попугаи">Попугаи</option>
                        </select>
                    </div>
                    <div className="add-items__category__good flex-col">
                        <p>Категория товара:</p>
                        <select
                            onChange={onChangeHandler}
                            value={data.categoryOfGood}
                            name="categoryOfGood">
                            <option value="Нет">Нет</option>
                            <option value="Корма">Корма</option>
                            <option value="Амуниция">Амуниция</option>
                            <option value="Гигиена и уход">
                                Гигиена и уход
                            </option>
                            <option value="Вет.аптека">Вет.аптека</option>
                            <option value="Игрушки">Игрушки</option>
                            <option value="Одежда">Одежда</option>
                            <option value="Посуда">Посуда</option>
                            <option value="Лакомства">Лакомства</option>
                        </select>
                    </div>
                    <div className="add-items__weight__price">
                        <div className="add-items__weight flex-col">
                            <p>Вес товара</p>
                            <select
                                onChange={onChangeHandler}
                                value={data.weight}
                                name="weight">
                                <option value="Нет">Нет</option>
                                <option value="Меньше 1 кг">Меньше 1 кг</option>
                                <option value="1 кг">1 кг</option>
                                <option value="3 кг">3 кг</option>
                                <option value="9 кг">9 кг</option>
                            </select>
                        </div>
                        <div className="add-items__price flex-col">
                            <p>Цена товара</p>
                            <input
                                onChange={onChangeHandler}
                                value={data.price}
                                type="Number"
                                name="price"
                                placeholder="100 руб"
                            />
                        </div>
                    </div>
                    <button type="submit" className="add-items__btn">
                        Добавить
                    </button>
                </form>
            </div>
            {/* </div> */}
        </>
    );
};

export default AddItems;
