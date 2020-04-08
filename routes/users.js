const route = require('express').Router();

route.get('/',(req,res) =>{

    res.render('main')
})
route.get('/Home',(req,res) =>{

    res.render('home')
})

route.get('/Menu',(req,res) =>{

    res.render('menu')
})
route.get('/About',(req,res) =>{

    res.render('about')
})

route.get('/Contact',(req,res) =>{

    res.render('contact')
})
exports = module.exports =
    route