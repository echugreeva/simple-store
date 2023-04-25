import db from '../connections/elephant_db.js'

export const getProducts = () => {
    return db('sistore_product')
    .select('*')
}

export const addProduct = (product) => {
    return db('sistore_product')
    .insert(product)
    .returning('*')
}
export const updateProduct = (id, title, description,price,url)=> {
    return db('sistore_product')
    .where({id: id})
    .update({
        title:title,
        description:description,
        price:price,
        url:url,
    })
    .returning('*')

}

export const deleteProduct = (id) => {
    return db('sistore_product')
    .where({id: id})
    .delete()
    .returning('*')
}
export const getSales = () => {
    return db('sistore_sales')
    // .where({ date is 5 days from today sum of lines by produt id order desc limit 5
        
    // })
    .select('*')
}

export const updateSales = (id)=> {
    return db('sistore_sales')
    .insert(id)
    .returning('*')

}