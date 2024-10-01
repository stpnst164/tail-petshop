import { redirect } from 'react-router-dom';
import { assets } from '../assets/assets';
import DogCatalog from '../pages/PopularCategories/Dogs/DogCatalog';

//dog catalog list
export const dogCatalog_list = [
    {
        id: 1,
        image: assets.dog_food,
        title: 'Корма',
        categoryOfGood: 'Корма',
        //test
        categoryOfPet: 'Собаки',
        redirect: 'food'
    },
    {
        id: 2,
        image: assets.dog_ammunition,
        title: 'Амуниция',
        categoryOfGood: 'Амуниция'
    },
    {
        id: 3,
        image: assets.dog_care,
        title: 'Гигиена и уход',
        categoryOfGood: 'Гигиена и уход'
    },
    {
        id: 4,
        image: assets.dog_pharmacy,
        title: 'Вет.аптека',
        categoryOfGood: 'Вет.аптека'
    },
    {
        id: 5,
        image: assets.dog_toy,
        title: 'Игрушки',
        categoryOfGood: 'Игрушки'
    },
    {
        id: 6,
        image: assets.dog_clothes,
        title: 'Одежда',
        categoryOfGood: 'Одежда'
    },
    {
        id: 7,
        image: assets.dog_dishes,
        title: 'Посуда',
        categoryOfGood: 'Посуда'
    },
    {
        id: 8,
        image: assets.dog_treat,
        title: 'Лакомства',
        categoryOfGood: 'Лакомства'
    }
];
