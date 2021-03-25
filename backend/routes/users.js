const router = require('express').Router()
let user = require('../models/user.model')
const bcrypt = require('bcryptjs')

// register route
router.route('/register').post((req,res) => {
    const { name, username, password } = req.body
    let errors = []
    let message = []

    if(!name || !username || !password) {
        errors.push({ msg: 'Please fill all the details!' })
    }

    if(password.length < 6) {
        errors.push({ msg: 'Password should be atleast 6 characters long!' })
    }

    if(errors.length > 0) {
        res.status(400).json('Error: '+errors)
    } else {
        const newUser = new user({
            name,
            email,
            password
        })

        // hashing password
        bcrypt.genSalt(10, (err,salt) => bcrypt.hash(newUser.password,salt,(err,hash) => {
            if(err) throw err

            // set password to hashed!
            newUser.password = hash
            // save user
            newUser.save()
            .then(user => {
                message.push({ msg: 'You are now registered and can login!' });
                res.json(message)
            })
            .catch(
                err => res.status(400).json('Error: ' + err)
            )
        }))
    }
})

// login router
router.route('/login').post((req,res) => {
    const { email, password } = req.body
    let errors = []

    // match user!
    user.findOne({ email: email })
    .then(user => {
        if(!user) {
            errors.push({ msg: 'Username is not registered!' })
        }

        // match password
        bcrypt.genSalt(10, (err,salt) => bcrypt.hash(req.body.password,salt,(err,hash) => {
            if(err) throw err
            // set password to hash
            req.body.password = hash
        }))

        if(password !== req.body.password) {
            errors.push({ msg: 'Password is incorrect!' })
        } else {
            res.json(req.body.email)
        }
    })
    .catch(err => res.status(400).json('Error: '+err))

    if(errors.length > 0) {
        res.json(errors)
    }
})

module.exports = router;