import { React, useState } from 'react';
import './DogCatalog.css';
import { dogCatalog_list } from '../../../Data/dogCatalog_list';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Sale from '../../../components/Sale/Sale';
import Navbar from '../../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import DogGoodsDisplay from '../../../components/DogGoodsDisplay/DogGoodsDisplay';

const DogCatalog = () => {
    const nav = useNavigate();

    const [categoryOfGood, setCategoryOfGood] = useState('Все');
    const [categoryOfPet, setCategoryOfPet] = useState('Собаки');

    const dogCatalog = dogCatalog_list.map((item) => {
        return (
            <div
                onClick={() =>
                    setCategoryOfGood((prev) =>
                        prev === item.title ? 'Все' : item.title
                    ) &&
                    setCategoryOfPet((prev) =>
                        prev === item.categoryOfPet
                            ? 'Собаки'
                            : item.categoryOfPet
                    )
                }
                key={item.id}
                id="dogs-products__cards__item"
                className={categoryOfGood === item.title ? 'active' : ''}>
                <div id="dogs-products__cards__item__img">
                    <a>
                        <img src={item.image} width="150px" height="150px" />
                    </a>
                </div>

                <a
                    onClick={() => nav(item.redirect)}
                    id="dogs-products__cards__title">
                    {item.title}
                </a>
            </div>
        );
    });

    return (
        <>
            <Sale />
            <Header />
            <Navbar />
            <div className="container">
                <h2 className="dogs-products__title">Товары для собак</h2>
            </div>
            <div className="container dogs-products-container">
                <Sidebar />
                <div className="dogs-products">
                    {/* <div className="container"> */}
                    <div className="dogs-products__wrapper">
                        <div className="dogs-products__cards">{dogCatalog}</div>
                    </div>
                </div>
            </div>
            <DogGoodsDisplay
                categoryOfGood={categoryOfGood}
                setCategoryOfGood={setCategoryOfGood}
                categoryOfPet={categoryOfPet}
            />
        </>
    );
};

export default DogCatalog;
