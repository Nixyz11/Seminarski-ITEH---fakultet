const Sequelize = require('sequelize');

const sequelize = require('../util/db');
//findByPk
const Test = sequelize.define('test',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        polozio: Sequelize.BOOLEAN
      
    }
  );

  module.exports = Test;