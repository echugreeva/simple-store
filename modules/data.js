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
        .select('id')
        .count('id', {as:'sales'}) 
        .groupBy('id')
        .limit(5)
    
}

//need a join to get price by id sum 
 export const getSalesFiveDays = (date) => {
    return db('sistore_sales')
        .select('id')
        .count('id', {as:'sales'}) 
        .groupBy('id')
        .where('date', '>', date-5)
        .limit(5)
    
}

// .where({ date is 5 days from today sum of lines by produt id order desc limit 5
        
    // })
export const addSale = (ids)=> {
    return db('sistore_sales')
    .insert(ids)
    .returning('*')

}