import {getProducts, addProduct, updateProduct, deleteProduct, getSales, updateSales} from '../modules/data.js'

export const _getProducts = (req,res) => {
    getProducts()
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _addProduct = (req, res) => {
    addProduct(req.body)
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _updateProduct = (req, res) => {
    console.log(req.body)
    updateProduct(req.params.id, req.body.title, req.body.description,req.body.price,req.body.url)
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}


