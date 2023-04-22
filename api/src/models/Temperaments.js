const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperaments', {
      id: {
        type: DataTypes.STRING(5),
         primaryKey : true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
     
    });
  
    
  };