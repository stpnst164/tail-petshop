import { assets } from '../assets/assets';

export const goods_list = [
    //корма
    {
        id: 1,
        image: assets.dog_food_img_2,
        brand: 'Royal Canin',
        title: 'Royal Canin Golden Retriever Puppy корм сухой полнорационный для щенков до 15 месяцев',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Корма',
        weight: '3 кг',
        price: '2499'
    },
    {
        id: 2,
        image: assets.dog_food_img_3,
        brand: 'Go!',
        title: 'Go! Solutions Skin + Coat сухой корм для щенков и собак с курицей, фруктами и овощами',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Корма',
        weight: '9 кг',
        price: '8800'
    },
    {
        id: 3,
        image: assets.dog_food_img_4,
        brand: 'Monge',
        title: 'Корм консервированный Monge Dog Fruit, для собак, лосось с грушей',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Корма',
        weight: 'Меньше 1 кг',
        price: '91'
    },
    {
        id: 4,
        image: assets.dog_food_img_5,
        brand: 'Happy Dog',
        title: 'Влажный корм для собак Happy Dog телятина с рисом',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Корма',
        weight: 'Меньше 1 кг',
        price: '157'
    },
    {
        id: 5,
        image: assets.dog_food_img_6,
        brand: 'Go!',
        title: 'Беззерновой сухой корм GO! Limited Ingredient Lamb Recipe Dog Grain Free для щенков и взрослых собак с ягненком для чувствительного пищеварения',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Корма',
        weight: '1 кг',
        price: '2674'
    },
    //амуниция
    {
        id: 6,
        image: assets.dog_ammunition_img_1,
        brand: 'Flexi',
        title: 'Flexi Classic XS - рулетка Флекси Классик, лента 3 м',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Амуниция',
        weight: '190 г',
        price: '900'
    },
    {
        id: 7,
        image: assets.dog_ammunition_img_2,
        brand: 'Flexi',
        title: 'Flexi Classic XS - рулетка Флекси Классик, лента 3 м, синяя',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Амуниция',
        weight: '190 г',
        price: '900'
    },
    {
        id: 8,
        image: assets.dog_ammunition_img_3,
        brand: 'Woofy',
        title: 'Поводок из биотана Woofy "Гекса" водостойкий, ширина 20 мм, зеленый',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Амуниция',
        weight: '190 г',
        price: '1650'
    },
    {
        id: 9,
        image: assets.dog_ammunition_img_4,
        brand: 'Rungo',
        title: 'Шлейка для собак Rungo Step-in 1 х 35-53 см',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Амуниция',
        weight: '50 г',
        price: '437'
    },
    {
        id: 10,
        image: assets.dog_ammunition_img_5,
        brand: '',
        title: 'Светящийся ошейник для собак с USB-зарядкой 50см зеленый',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Амуниция',
        weight: '100 г',
        price: '510'
    },
    //гигиена и уход
    {
        id: 11,
        image: assets.dog_care_img_1,
        brand: 'WONDER',
        title: 'Шампунь для собак WONDER Lab 550мл',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '550 мл',
        price: '365'
    },
    {
        id: 12,
        image: assets.dog_care_img_2,
        brand: 'Iv San Bernard',
        title: 'Шампунь для кошек и собак Iv San Bernard Traditional Line Banana для шерсти средней длины 500 мл',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '500 мл',
        price: '1200'
    },
    {
        id: 13,
        image: assets.dog_care_img_3,
        brand: 'Not Wet',
        title: 'Полотенце для собак и кошек впитывающее из микрофибры Not Wet',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '300 г',
        price: '700'
    },
    {
        id: 14,
        image: assets.dog_care_img_4,
        brand: 'Cliny',
        title: 'Зубная паста для животных Cliny Кальций+ 75мл',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '75 мл',
        price: '470'
    },
    {
        id: 15,
        image: assets.dog_care_img_5,
        brand: 'DGS',
        title: 'Перчатка для груминга DogGoneSmart GroomingMitt Серая',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '180 г',
        price: '399'
    },
    //ветаптека
    {
        id: 16,
        image: assets.dog_chemistry_img_1,
        brand: 'Zoetis',
        title: 'Препарат инсектоакарицидный для собак Zoetis Симпарика 80мг №3 таблетки',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '300 г',
        price: '5715'
    },
    {
        id: 17,
        image: assets.dog_chemistry_img_2,
        brand: 'Elanco',
        title: 'Антигельминтик для собак Elanco Мильбемакс крупных пород 2таблетки',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '15 г',
        price: '917'
    },
    {
        id: 18,
        image: assets.dog_chemistry_img_3,
        brand: 'Elanco',
        title: 'Ошейник для собак Elanco Foresto более 8кг от блох и клещей защита 8месяцев 70см 65494',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '132 г',
        price: '2940'
    },
    {
        id: 19,
        image: assets.dog_chemistry_img_4,
        brand: 'Luxsan',
        title: 'Бинт для животных Luxsan самофиксирующийся с горькой пропиткой 2.5см*4.5м',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '13 г',
        price: '100'
    },
    {
        id: 20,
        image: assets.dog_chemistry_img_5,
        brand: 'ZOORIK',
        title: 'Маска для шерсти ZOORIK увлажняющая 250 мл',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Гигиена и уход',
        weight: '250 мл',
        price: '430'
    },
    //игрушки
    {
        id: 21,
        image: assets.dog_toy_img_1,
        brand: 'Barbaks',
        title: 'Игрушка для собак Barbaks Краб кожаный прочный пищит шуршит 34.5*19.5см',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Игрушки',
        weight: '300 г',
        price: '550'
    },
    {
        id: 22,
        image: assets.dog_toy_img_2,
        brand: 'Doglike',
        title: 'Игрушка для собак Doglike Tug and Twist Кольцо восьмигранное среднее 26.5см Оранжевый',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Игрушки',
        weight: '250 г',
        price: '579'
    },
    {
        id: 23,
        image: assets.dog_toy_img_3,
        brand: 'Gigwi',
        title: 'Игрушка для собак Gigwi Мяч с пищалкой 3шт 4см',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Игрушки',
        weight: '83 г',
        price: '380'
    },
    {
        id: 24,
        image: assets.dog_toy_img_4,
        brand: 'Triol',
        title: 'Игрушка для собак Triol Horror Мяч-паутинка из термопластичной резины d65мм',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Игрушки',
        weight: '68 г',
        price: '240'
    },
    {
        id: 25,
        image: assets.dog_toy_img_5,
        brand: 'GiGwi',
        title: 'Игрушка для собак GiGwi I am HERO Бегемот в резиновой броне 20см',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Игрушки',
        weight: '185 г',
        price: '679'
    },
    //одежда
    {
        id: 26,
        image: assets.dog_clothes_img_1,
        brand: 'Зоозавр',
        title: 'Комбинезон для собак и кошек Зоозавр',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Одежда',
        weight: '110 г',
        price: '999'
    },
    {
        id: 27,
        image: assets.dog_clothes_img_2,
        brand: 'Не один дома',
        title: 'Куртка для собак Не один дома',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Одежда',
        weight: '500 г',
        price: '1100'
    },
    {
        id: 28,
        image: assets.dog_clothes_img_3,
        brand: 'Zoozavr',
        title: 'Дождевик-куртка для собак Zoozavr чёрный 50',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Одежда',
        weight: '500 г',
        price: '399'
    },
    {
        id: 29,
        image: assets.dog_clothes_img_4,
        brand: 'Зоозавр',
        title: 'Шарф для собак и кошек Зоозавр',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Одежда',
        weight: '100 г',
        price: '149'
    },
    {
        id: 30,
        image: assets.dog_clothes_img_5,
        brand: 'Зоозавр',
        title: 'Жилет для собак и кошек Зоозавр',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Одежда',
        weight: '400 г',
        price: '1399'
    },
    //Посуда
    {
        id: 31,
        image: assets.dog_dishes_img_1,
        brand: 'ZDK',
        title: 'Автоматическая кормушка ZDK двойная 4500 мл для кошек и собак',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Посуда',
        weight: '700 г',
        price: '8900'
    },
    {
        id: 32,
        image: assets.dog_dishes_img_2,
        brand: 'Пижон',
        title: 'Подставка с мисками Пижон 350 мл разборная чёрная',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Посуда',
        weight: '839 г',
        price: '1399'
    },
    {
        id: 33,
        image: assets.dog_dishes_img_3,
        brand: 'Не один дома',
        title: 'Миска для собак Не один дома 860222-20IQtr1 Pet Toy',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Посуда',
        weight: '226 г',
        price: 790
    },
    {
        id: 34,
        image: assets.dog_dishes_img_4,
        brand: 'Stefan',
        title: 'Миска для собак Stefan для медленного поедания 23.5х22х4.5 500мл зеленая',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Посуда',
        weight: '160 г',
        price: 288
    },
    {
        id: 35,
        image: assets.dog_dishes_img_5,
        brand: 'oqqi',
        title: 'Авто-кормушка oqqi с поилкой 17х17х78',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Посуда',
        weight: '1123 г',
        price: 3520
    },
    //Лакомства
    {
        id: 36,
        image: assets.dog_tasty_img_1,
        brand: 'Деревенские лакомства',
        title: 'Лакомство для собак Деревенские лакомства соломка утка 90г',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Лакомства',
        weight: '90 г',
        price: 299
    },
    {
        id: 37,
        image: assets.dog_tasty_img_2,
        brand: '8in1',
        title: 'Лакомство для собак 8in1 мелких пород Косточки с куриным мясом с минералами 7шт',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Лакомства',
        weight: '90 г',
        price: 339
    },
    {
        id: 38,
        image: assets.dog_tasty_img_3,
        brand: 'TITBIT',
        title: 'Лакомство для собак TITBIT Нога говяжья большая 1283 г',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Лакомства',
        weight: '1283 г',
        price: 640
    },
    {
        id: 39,
        image: assets.dog_tasty_img_4,
        brand: 'Triol',
        title: 'Лакомство для собак Triol Dental 7.5см*4шт Косточки жевательные',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Лакомства',
        weight: '300 г',
        price: 219
    },
    {
        id: 40,
        image: assets.dog_tasty_img_5,
        brand: 'Деревенские лакомства',
        title: 'Лакомство для собак Деревенские лакомства мини пород Медальоны ягненок 55г',
        categoryOfPet: 'Собаки',
        categoryOfGood: 'Лакомства',
        weight: '55 г',
        price: 185
    },
    {
        id: 41,
        image: assets.cat_litter_img_1,
        brand: 'Сибирская кошка',
        title: 'Наполнитель для кошек Сибирская кошка Элита 24л',
        categoryOfPet: 'Кошки',
        categoryOfGood: 'Наполнители',
        weight: '24 л',
        price: 2550
    }
];
