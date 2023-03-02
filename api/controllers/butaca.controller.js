const Butaca = require('../models/butaca.model')

async function getAllButacas(req, res) {
  try {
    const butacas = await Butaca.findAll({
      where: req.query})
    return !butacas ? res.status(404).send('No existen butacas') : res.status(200).json(butacas)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneButaca(req, res) {
    try {
      const butaca = await Butaca.findAll({
        where: {
            idNumber: req.params.idNumber
        }
      })
  
      if (butaca) {
        return res.status(200).json(butaca)
      } else {
        return res.status(404).send('Butaca not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createButaca(req, res) {
    try {
      const butaca = await Butaca.create({
        idNumber: req.body.idNumber,
        available: req.body.available,
        // type: req.body.type,
        extraPrice: req.body.extraPrice
      })
      return res.status(200).json({ message: 'Butaca created', butaca: butaca })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async function updateButaca(req, res) {
    try {
      const [butacaExist, butaca] = await Butaca.update(req.body, {
        returning: true,
        where: {
            idNumber: req.params.idNumber,
        },
      })
          if (butacaExist !== 0) {
        return res.status(200).json({ message: 'Butaca updated', butaca: butaca })
      } else {
        return res.status(404).send('Butaca not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteButaca(req, res) {
    try {
      const butaca = await Butaca.destroy({
        where: {
            idNumber: req.params.idNumber,
        },
      })
      if (butaca) {
        return res.status(200).json('Butaca deleted')
      } else {
        return res.status(404).send('Butaca not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = { getAllButacas, getOneButaca, createButaca, updateButaca, deleteButaca }