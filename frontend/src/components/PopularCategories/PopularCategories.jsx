import React from 'react';
import './PopularCategories.css';
import { useNavigate } from 'react-router-dom';
import { popularCategories } from '../../Data/popularCategories';

const PopularCategories = ({}) => {
    const nav = useNavigate();
    // const [categoryOfPet, setCategoryOfPet] = useState('Собаки');

    const categories = popularCategories.map((item) => {
        return (
            <div key={item.id} className="categories__cards__item">
                <div className="categories__cards__item__img">
                    <a>
                        <img src={item.img} width="165px" height="165px" />
                    </a>

                    <h4 className="categories__cards__item__title">
                        {item.title}
                    </h4>
                    <button
                        onClick={() => nav(item.redirect)}
                        className="arrow__btn">
                        <img src={item.arrow_icon} alt="Arrow icon" />
                    </button>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="categories">
                <div className="container">
                    <div className="categories__wrapper">
                        <div className="categories__title">
                            <h4>Популярные категории</h4>
                        </div>
                        <div className="categories__cards">{categories}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularCategories;
