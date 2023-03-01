const Cine = require('../api/models/cine.model')
const Pelicula = require('../api/models/pelicula.model')
const Sala = require('../api/models/sala.model')
const Butaca = require('../api/models/butaca.model')
const Cliente = require('../api/models/cliente.model')
const Administrador = require('../api/models/administrador.model')

function addRelationsToModels() {
  try {
    Administrador.hasMany(Cine)
    Cine.belongsTo(Administrador)

    Cine.hasMany(Sala)
    Sala.belongsTo(Cine)

    Sala.hasOne(Pelicula)
    Pelicula.belongsTo(Sala)

    Cine.belongsToMany(Pelicula, { through: 'CinePelicula'})
    Pelicula.belongsToMany(Cine, { through: 'CinePelicula'})

    Pelicula.belongsToMany(Butaca, { through: 'PeliculaButaca'})
    Butaca.belongsToMany(Pelicula, { through: 'PeliculaButaca'})

    Butaca.hasMany(Cliente)
    Cliente.belongsTo(Butaca)

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels