import express from 'express'
import {_getProducts,_addProduct,_updateProduct} from '../controllers/data.js'
import { addProduct } from '../modules/data.js';

const router = express.Router();

router.get('/products',_getProducts)
router.post('/product', _addProduct)
router.post('/product/:id',_updateProduct)
// router.delete('/product',)

export default router