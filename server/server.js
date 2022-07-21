// Requirements

const express = require('express');
const userController = require('./user/routes/user');
const orderController = require('./user/routes/orders');
const cartController = require('./user/routes/cart');
const itemController = require('./user/routes/item');
const categoryController = require('./user/routes/categories')
const mongoose = require('mongoose');
const multer = require('multer')();
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const unprotectedRoutes = ["/user/signup", "/user/login", "/item/add"]






// Adding express configuration to the app

const app = express();

// Start the server

const port = process.env.PORT || 8000

app.listen(port, (err) => {
    if (!err) {
        console.log("server is running")
    } else {
        console.log(err)
    }
})

// body parser middleware 

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(multer.array());
app.use(cors())






// Connecting with mongoose

mongoose.connect('mongodb+srv://giri:143%23mamatha@ecommerce.qt4dlsq.mongodb.net/?retryWrites=true&w=majority', () => {
        console.log("connected to database")
    }, (err) => {
        console.log(err)
    })


// Setting up Base Route

app.get('/', (req, res) => {
    res.send("Ecommerce Backend")
})

// Setting up routes middleware

app.use('/user', userController)

app.use('/order', orderController)

app.use('/cart', cartController)

app.use('/item', itemController)

app.use('/categories', categoryController)