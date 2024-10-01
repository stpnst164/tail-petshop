import mongoose from 'mongoose';

const goodSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    categoryOfPet: {
        type: String,
        required: true
    },
    categoryOfGood: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const goodModel = mongoose.models.goods || mongoose.model('goods', goodSchema);

export default goodModel;
