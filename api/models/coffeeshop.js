'use strict';
module.exports = function(sequelize, DataTypes) {
  var coffeeshop = sequelize.define('coffeeshop', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return coffeeshop;
};