const Sequelize = require('sequelize');

const sequelize = require('../util/db');




const Fudbaler = sequelize.define('fudbaler',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ime: Sequelize.STRING,
        prezime: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        pozicija: Sequelize.STRING
    }
  );
//findByPk()
  module.exports = Fudbaler;