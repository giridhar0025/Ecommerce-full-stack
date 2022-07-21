const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    item_link: String,
    item_name :String,
    item_image: String,
    item_price : String,
    item_reviews:String,
    offer : String,
})

const itemModel = mongoose.model('Items', ItemSchema)

module.exports = itemModel;