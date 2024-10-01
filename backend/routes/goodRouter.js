import express from 'express';
import {
    addGood,
    deleteGood,
    listGood
} from '../controllers/goodsController.js';
import multer from 'multer';

const goodRouter = express.Router();

//Image Storage
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (request, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// store to uploads folder
//post
goodRouter.post('/add', upload.single('image'), addGood);
//get
goodRouter.get('/list', listGood);

goodRouter.post('/add', addGood);

goodRouter.post('/delete', deleteGood);

export default goodRouter;
