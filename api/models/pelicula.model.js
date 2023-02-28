const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Pelicula = sequelize.define(
    'pelicula',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      schedule: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      priceTen: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      priceThirty: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    { timestamps: false }
  )
  
  module.exports = Pelicula