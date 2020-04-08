const express =require('express')
const path = require('path')
const app =express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs")
app.use('/',express.static(path.join(__dirname,'views')))
app.use('/',require('./routes/users'))


app.listen(2678,()=> console.log('server started at http://localhost:2678'))



