const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Butaca = sequelize.define(
    'butaca',
    {
      idNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    //   type: {
    //     type: DataTypes.ENUM(['standard', 'premium', 'vip']),
    //     allowNull: false,
    //     defaultValue: 'standard'
    //   },
      extraPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    { timestamps: false }
  )
  
  module.exports = Butaca