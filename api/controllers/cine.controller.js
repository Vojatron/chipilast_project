const Cine = require('../models/cine.model')

async function getAllCines(req, res) {
  try {
    const cines = await Cine.findAll()
    return !cines ? res.status(404).send('No existen cines') : res.status(200).json(cines)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneCine(req, res) {
    try {
        console.log(req.params.name)
      const cine = await Cine.findAll({
        where: {
            name: req.params.name
        }
      })
  
      if (cine) {
        return res.status(200).json(cine)
      } else {
        return res.status(404).send('Cine not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createCine(req, res) {
    try {
      const cine = await Cine.create({
        name: req.body.name,
        address: req.body.address,
        numberOfCinemaRoom: req.body.numberOfCinemaRoom
      })
      return res.status(200).json({ message: 'Cine created', cine: cine })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async function updateCine(req, res) {
    try {
      const [cineExist, cine] = await Cine.update(req.body, {
        returning: true,
        where: {
          id: req.params.id,
        },
      })
          if (cineExist !== 0) {
        return res.status(200).json({ message: 'Cine updated', cine: cine })
      } else {
        return res.status(404).send('Cine not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteCine(req, res) {
    try {
      const cine = await Cine.destroy({
        where: {
          name: req.params.name,
        },
      })
      if (cine) {
        return res.status(200).json('Cine deleted')
      } else {
        return res.status(404).send('Cine not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = { getAllCines, getOneCine, createCine, updateCine, deleteCine }