/* const mysql = require('mysql2');


const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'kvaka',
    password: '',

}) */
//module.exports = pool.promise();

const Sequeilize = require('sequelize');
const sequelize = new Sequeilize('kvaka','root','',{dialect: 'mysql',host:'localhost'});

module.exports=sequelize;
