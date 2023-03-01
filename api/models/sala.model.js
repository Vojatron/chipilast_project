const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Sala = sequelize.define(
    'sala',
    {
      roomNumberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      assignedFilm: {
        type: DataTypes.STRING,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: false }
  )
  
  module.exports = Sala