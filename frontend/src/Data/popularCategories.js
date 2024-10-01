import { assets } from '../assets/assets';

export const popularCategories = [
    {
        id: 1,
        img: assets.ctg_dogs_img1,
        title: 'Собаки',
        arrow_icon: assets.arrow_icon,
        redirect: 'dogs/catalog',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Корма'
    },
    {
        id: 2,
        img: assets.ctg_cats_img2,
        title: 'Кошки',
        arrow_icon: assets.arrow_icon,
        redirect: 'cats/catalog'
    },
    {
        id: 3,
        img: assets.ctg_rabbits_img3,
        title: 'Грызуны',
        arrow_icon: assets.arrow_icon,
        redirect: 'rabbits/catalog'
    },
    {
        id: 4,
        img: assets.ctg_chemistry_img,
        title: 'Вет.аптека',
        arrow_icon: assets.arrow_icon,
        redirect: 'chemistry/catalog'
    }
];
