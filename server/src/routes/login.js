const express = require("express")
const { Router } = express
const router = new Router()
const passport = require('passport')

router.get("/login" ,(req, res)=>{
    res.send("hola")
})

router.post("/signUp" , passport.authenticate('local-signUp', {
    successRedirect: '/login',
    failureRedirect: '/signUp'
}))


module.exports = router;

