const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    item_link: String,
    item_name :String,
    item_image: String,
    item_price : String,
    item_reviews:String,
})

const orderModel = mongoose.model('Orders', OrderSchema)

module.exports = orderModel;