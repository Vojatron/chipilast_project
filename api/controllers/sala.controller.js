const Sala = require('../models/sala.model')

async function getAllSalas(req, res) {
    try {
      const salas = await Sala.findAll({
        where: req.query})
      return !salas ? res.status(404).send('No existen salas') : res.status(200).json(salas)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function getOneSala(req, res) {
    try {
      const sala = await Sala.findAll({
        where: {
            roomNumberId: req.params.roomNumberId
        }
      })
  
      if (sala) {
        return res.status(200).json(sala)
      } else {
        return res.status(404).send('Sala not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createSala(req, res) {
    try {
      const sala = await Sala.create({
        roomNumberId: req.body.roomNumberId,
        assignedFilm: req.body.assignedFilm,
        capacity: req.body.capacity,
      })
      return res.status(200).json({ message: 'Sala created', sala: sala })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async function updateSala(req, res) {
    try {
      const [salaExist, sala] = await Sala.update(req.body, {
        returning: true,
        where: {
            roomNumberId: req.params.roomNumberId,
        },
      })
          if (salaExist !== 0) {
        return res.status(200).json({ message: 'Sala updated', sala: sala })
      } else {
        return res.status(404).send('Sala not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteSala(req, res) {
    try {
      const sala = await Sala.destroy({
        where: {
            roomNumberId: req.params.roomNumberId,
        },
      })
      if (sala) {
        return res.status(200).json('Sala deleted')
      } else {
        return res.status(404).send('Sala not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = { 
  getAllSalas, 
  getOneSala, 
  createSala, 
  updateSala, 
  deleteSala }