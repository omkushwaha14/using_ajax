const sequelize = require('sequelize')

const db = new sequelize(
    'mytestdb',
    'myusers',
    'mypasss',
    {
        host:'localhost',
        dialect:'mysql',
        pool:{
            min:0,
            max:5
        }
    })
const Users=db.define('data',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    emails:{
        type:sequelize.STRING,
        allowNull: false
    }
    ,  message:{
        type:sequelize.CHAR,
        allowNull: false
    }

})
db.sync()
    .then(()=>console.log('database is synced'))
    .catch((err)=>console.error('error creating database'))

exports = module.exports = {

    Users
}