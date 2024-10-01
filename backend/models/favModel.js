import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const favSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    goodImage: {
        type: String
    },
    goodBrand: {
        type: String
    },
    goodId: {
        type: String
    },
    goodTitle: {
        type: String
    }
});

//либо нахождение существующей коллекции или создание новой под названием user
const favModel = mongoose.models.fav || mongoose.model('favorites', favSchema);

export default favModel;
