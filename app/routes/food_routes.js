const express = require('express')
const passport = require('passport')
const Character = require('../models/characters')

/* ------------- Custom Middleware -------------*/
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

/* ------------- POST a new Food -------------*/

router.post('/foods/:characterId', removeBlanks, (req, res, next) => {
    const food = req.body.food
    const charId = req.params.characterId

    Character.findById(charId) 
        .then(handle404)
        .then(char => {
            console.log('the character: ', char)
            console.log('the food: ', food)

            char.foods.push(food)
            return char.save()
        })
        .then(char => res.status(201).json({char:char}))
        .catch(next)
})
/* ------------- Patch a new Food -------------*/

module.exports = router
