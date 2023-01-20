const Sequelize = require('sequelize');

const sequelize = require('../util/db');
//findByPk
const Trener = sequelize.define('trener',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ime: Sequelize.STRING,
        prezime: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    }
  );

  module.exports = Trener;