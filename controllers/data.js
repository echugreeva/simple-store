import {getProducts, addProduct, updateProduct, deleteProduct, getSales, addSale, getSalesFiveDays } from '../modules/data.js'

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

export const _addSale = (req, res) => {
    console.log(req.body)
    console.log(req.body.cartItems[0].id)
    let ids=[]
    req.body.cartItems.map(i => {
        ids.push({id:i.id })
    })
    console.log(ids)
    addSale(ids)
    .then(data=> {
        res.json(data) })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _getSales = (req,res) => {
    getSales()
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}

export const _getSalesFiveDays = (req,res) => {
    let date = new Date()
    getSalesFiveDays (date)
    .then(data=> {
        res.json(data)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({ msg: 'not found' })
    })
}