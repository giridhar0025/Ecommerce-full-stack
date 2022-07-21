const express = require('express');
const router = express.Router();
const SignupModel = require('../models/signupmodel');
const { checkExistingUser, generateHash } = require('../utility');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
require('dotenv').config()


router.post('/login', (req, res) => {
    SignupModel.find({ email : req.body.email }).then((userData) => {
        if (userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((value) => {
                if (value) {
                    const authorization = jwt.sign(userData[0].email, process.env.secretKey)
                    res.status(200).send({ authorization })
                } else {
                    res.status(400).send("Invalid Password");
                }
            }).catch((err) => {
                console.log(err)
            })
        } else {
            res.status(400).send("Invalid Details")
        }
    })
})


router.post('/signup', async (req, res) => {
    let check = await checkExistingUser(req.body.email)
    // console.log(check)
    if (check) {
        res.status(400).send(`User with ${req.body.email}  already exists`)
    } else {
        const passwordHash = await generateHash(req.body.password);
        SignupModel.create({
            username: req.body.username,
            email: req.body.email,
            phone_number: req.body.phone_number,
            password: passwordHash
        }).then(() => {
            res.status(200).send(`${req.body.username} added successfully`)
        }).catch((err) => {
            console.log(err)
        })
    }
})

router.post('/logout', (req, res) => {

})

router.put('/updatepassword', (req, res) => {
    SignupModel.find({ email: req.body.email }).then((user) => {
        if (user.length) {
            bcrypt.compare(req.body.oldPassword, user[0].password).then((match) => {
                if (match) {
                    generateHash(req.body.newPassword).then((hashedPass) => {
                        SignupModel.updateOne({ email: req.body.email }, { password : hashedPass}).then(() => {
                            res.status(200).send("Password updated successfully")
                        }).catch((err) => {
                            res.status.send(err)
                        })
                    })
                    
                } else {
                    res.status(400).send("Invalid Details")
                }
            })
        } else {
            res.status(400).send("Invalid Details")
        }
    })
})


module.exports = router


