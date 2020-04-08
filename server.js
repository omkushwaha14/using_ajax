const express =require('express')
const path = require('path')
const http = require('http')
const app =express();
const PORT = process.env.PORT || 5432
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs")

app.use('/',express.static(path.join(__dirname,'views')))
app.use('/',require('./routes/users'))
app.listen(PORT, () => {
    console.log("Server listening on port");
});

 



