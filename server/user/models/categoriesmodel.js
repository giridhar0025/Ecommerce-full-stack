const mongoose = require('mongoose')


const CategoriesSchema = new mongoose.Schema({
    item: String,
    itemlink: String,
    category: String,
    categorylink: String,
    category_1: String,
    categorylink_1: String,
    category_2: String,
    categorylink_2: String,
    category_3: String,
    categorylink_3: String,
    category_4: String,
    categorylink_4: String,
    category_5: String,
    categorylink_5: String,
    category_6: String,
    categorylink_6: String,
    category_7: String,
    categorylink_7: String,
    dep_image : String
})

const categoriesModel = mongoose.model("Categories", CategoriesSchema)


module.exports = categoriesModel;