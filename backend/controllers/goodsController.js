import goodModel from '../models/goodModel.js';
import fs from 'fs';

//Добавление товара
const addGood = async (request, response) => {
    let image_filename = `${request.file.filename}`;

    const good = new goodModel({
        brand: request.body.brand,
        title: request.body.title,
        categoryOfPet: request.body.categoryOfPet,
        categoryOfGood: request.body.categoryOfGood,
        weight: request.body.weight,
        price: request.body.price,
        image: image_filename
    });
    try {
        await good.save();
        response.json({ success: true, message: 'Товар добавлен' });
    } catch (error) {
        console.log(error);
        response.json({ success: false, message: 'Error' });
    }
};

//Все товары
const listGood = async (request, response) => {
    try {
        //все товары
        const goods = await goodModel.find({});
        response.json({ success: true, data: goods });
    } catch (error) {
        console.log(error);
        response.json({ success: false, message: 'Error' });
    }
};

//Удаление товара
const deleteGood = async (request, response) => {
    try {
        //поиск товара по id
        const good = await goodModel.findById(request.body.id);
        //удаление изображения из папки uploads
        fs.unlink(`uploads/${good.image}`, () => {});

        //удаление товара
        await goodModel.findByIdAndDelete(request.body.id);
        response.json({ success: true, message: 'Товар удален' });
    } catch (error) {
        console.log(error);
        response.json({ success: false, message: 'Error' });
    }
};

export { addGood, listGood, deleteGood };
