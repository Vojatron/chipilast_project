const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Cine = sequelize.define(
    'cine',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberOfCinemaRoom: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false }
  )
  
  module.exports = Cine