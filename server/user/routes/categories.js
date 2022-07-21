const express = require('express')
const categoriesModel = require('../models/categoriesmodel')


const router = express.Router();


router.get('/', (req, res) => {
    categoriesModel.find().then((itemData) => {
       res.status(200).send({item : itemData})
    }).catch((err) => {
       res.status(400).send(err)
    })
})





router.post('/add', (req, res) => {
   categoriesModel.insertMany(req.body.categories).then(() => {
    res.status(200).send("Data Added successfully")
   }).catch((err) => {
    res.status(400).send(err)
   })
   
})

module.exports = router