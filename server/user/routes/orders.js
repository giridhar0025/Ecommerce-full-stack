const express = require('express')
const orderModel = require('../models/ordermodel')
const jwt = require('jsonwebtoken')

const router = express.Router();

router.get('/', (req, res) => {
    try{
        const user = jwt.verify(req.headers.authorization, process.env.secretKey)
        
        res.status(200).send(user)
    }catch(err) {
        res.status(400).send("User not Authorized", err)
    }
})


router.post(('/add'), (req, res) => {



    orderModel.create({
            item_link: req.body.item_link,
            item_name : req.body.item_name,
            item_image: req.body.item_image,
            item_price : req.body.item_price,
            item_reviews:req.body.item_reviews,
    }).then(() => {
        res.status(200).send("Order placed Successfully")
    }).catch((err) => {
        res.status(400).send(err)
    })
})

router.delete('/cancel/:id', (req, res) => {
    orderModel.deleteOne({order_id : req.params.id}).then(() => {
        res.status(200).send("Order cancelled Successfully")
    }).catch((err) => {
        res.status(400).send(err)
    })
})




module.exports = router