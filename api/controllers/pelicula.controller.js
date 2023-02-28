const Pelicula = require('../models/pelicula.model')

async function getAllPeliculas(req, res) {
    try {
      const peliculas = await Pelicula.findAll()
      return !peliculas ? res.status(404).send('No existen peliculas') : res.status(200).json(peliculas)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = { getAllPeliculas }