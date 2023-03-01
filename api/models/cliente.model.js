const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Cliente = sequelize.define(
    'cliente',
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                msg: "Error: Wrong email format."
            }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      creditCard: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  )
  
  module.exports = Cliente