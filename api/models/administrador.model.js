const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Administrador = sequelize.define(
    'administrador',
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
    //   rol: {
    //     type: DataTypes.ENUM(['admin', 'editor']),
    //     allowNull: false,
    //     defaultValue: 'editor'
    //     },
    cineAdmin: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    { timestamps: false }
  )
  
  module.exports = Administrador