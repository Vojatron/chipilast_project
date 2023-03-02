const Cine = require('../api/models/cine.model')
const Pelicula = require('../api/models/pelicula.model')
const Sala = require('../api/models/sala.model')
const Butaca = require('../api/models/butaca.model')
const Cliente = require('../api/models/cliente.model')
const Admin = require('../api/models/admin.model')

function addRelationsToModels() {
  try {
    Admin.hasMany(Cine)
    Cine.belongsTo(Admin)

    Cine.hasMany(Sala)
    Sala.belongsTo(Cine)

    Sala.hasOne(Pelicula)
    Pelicula.belongsTo(Sala)

    Cine.hasMany(Pelicula)
    Pelicula.belongsTo(Cine)
    
    Pelicula.hasMany(Butaca)
    Butaca.belongsTo(Pelicula)

    Cliente.hasMany(Butaca)
    Butaca.belongsTo(Cliente)

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels