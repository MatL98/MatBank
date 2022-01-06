const express = require("express")
const { Router } = express
const router = new Router()
const passport = require('passport')

router.post("/login" , passport.authenticate('local-login' ,{
    successRedirect: '/localhost:3000',
    failureRedirect: '/login',
    failureFlash: true
}))

router.post("/signUp" , passport.authenticate('local-signUp', {
    successRedirect: '/login',
    failureRedirect: '/signUp'
}))


module.exports = router;

