const Pelicula = require('../models/pelicula.model')
const Cine = require('../models/cine.model')
const {Op} = require("sequelize")

async function getAllPeliculas(req, res) {
    try {
      const peliculas = await Pelicula.findAll({
        where: req.query})
      return !peliculas ? res.status(404).send('No existen peliculas') : res.status(200).json(peliculas)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function getOnePelicula(req, res) {
    try {
      const pelicula = await Pelicula.findAll({
        where: {
            name: req.params.name
        }
      })
  
      if (pelicula) {
        return res.status(200).json(pelicula)
      } else {
        return res.status(404).send('Película not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createPelicula(req, res) {
    try {
      const pelicula = await Pelicula.create({
        name: req.body.name,
        schedule: req.body.schedule,
        releaseDate: req.body.releaseDate,
        duration: req.body.duration,
        price: req.body.price,
        priceTen: req.body.priceTen,
        priceThirty: req.body.priceThirty,
      })
      return res.status(200).json({ message: 'Pelicula created', pelicula: pelicula })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async function updatePelicula(req, res) {
    try {
      const [peliculaExist, pelicula] = await Pelicula.update(req.body, {
        returning: true,
        where: {
          id: req.params.id,
        },
      })
          if (peliculaExist !== 0) {
        return res.status(200).json({ message: 'Pelicula updated', pelicula: pelicula })
      } else {
        return res.status(404).send('Pelicula not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deletePelicula(req, res) {
    try {
      const pelicula = await Pelicula.destroy({
        where: {
          name: req.params.name,
        },
      })
      if (pelicula) {
        return res.status(200).json('Pelicula deleted')
      } else {
        return res.status(404).send('Pelicula not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function getAllPeliculasOneCine(req, res) {
    try {
      const cine = await Cine.findByPk(req.params.id)
      const pelicula = await cine.getPeliculas()
  
      if (pelicula) {
        return res.status(200).json(pelicula)
      } else {
        return res.status(404).send('Película not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = { 
  getAllPeliculas, 
  getOnePelicula, 
  createPelicula, 
  updatePelicula, 
  deletePelicula,
  getAllPeliculasOneCine }