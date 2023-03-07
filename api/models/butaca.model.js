const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Butaca = sequelize.define(
    'butaca',
    {
      idNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      extraPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    { timestamps: false }
  )
  
  module.exports = Butaca