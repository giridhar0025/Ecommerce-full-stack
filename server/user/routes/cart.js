const express = require('express');
const cartModel = require('../models/cartmodel')
const jwt = require('jsonwebtoken')

const router = express.Router();


router.get("/", (req, res) => {
    try{
        const user = jwt.verify(req.headers.authorization, process.env.secretKey)
        console.log(user)
        cartModel.find({email : user}).then((cartData) => {
            res.status(200).send({cartData : cartData})
        }).catch((err) => {
            res.status(400).send(err)
        }) 
    }catch(err) {
        res.status(400).send(err)
    }

})



router.post('/add', (req, res) => {
    try {
        const user = jwt.verify(req.headers.authorization, process.env.secretKey)
        cartModel.create({
            email : user,
            item_link: req.body.itemData.item_link,
            item_name : req.body.itemData.item_name,
            item_image: req.body.itemData.item_image,
            item_price : req.body.itemData.item_price,
            item_reviews:req.body.itemData.item_reviews,
        }).then(() => {
            res.status(200).json("Item added successfully!");
        }).catch((err) => {
            res.status(400).send(err)
        })
    } catch(err) {
        console.log(err)
    }
})

router.delete('/remove/:id', (req, res) => {
    cartModel.deleteOne({
        _id : req.params.id
    }).then(() => {
        res.status(200).send("Item removed successfully!");
    }).catch((err) => {
        res.status(400).send(err)
    })
})

module.exports = router