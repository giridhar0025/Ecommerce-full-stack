const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    email :String,
    item_link: String,
    item_name :String,
    item_image: String,
    item_price : String,
    item_reviews:String,
})

const cartModel = mongoose.model('Cart', CartSchema)

module.exports = cartModel;