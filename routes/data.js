import express from 'express'
import {_getProducts,_addProduct,_updateProduct,_addSale, _getSales,_getSalesFiveDays} from '../controllers/data.js'
import { addProduct } from '../modules/data.js';

const router = express.Router();

router.get('/products',_getProducts)
router.post('/product', _addProduct)
router.post('/product/:id',_updateProduct)
router.post('/sales', _addSale)
router.get('/sales',_getSales)
router.get('/sales-five-days',_getSalesFiveDays)
// router.delete('/product',)


export default router