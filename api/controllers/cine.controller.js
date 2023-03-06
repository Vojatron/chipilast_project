const { Op } = require("sequelize")
const Cine = require('../models/cine.model')
const Admin = require('../models/admin.model')
const Pelicula = require('../models/pelicula.model')

async function getAllCines(req, res) {
  try {
    const cines = await Cine.findAll({
      where: req.query
    })
    return !cines ? res.status(404).send('No existen cines') : res.status(200).json(cines)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneCine(req, res) {
  try {
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

    const admin = await Admin.findByPk(req.params.adminId)

    console.log(admin)

    const cine = await Cine.create({
      name: req.body.name,
      address: req.body.address,
      numberOfCinemaRoom: req.body.numberOfCinemaRoom,
      adminId: req.params.adminId //No asigna bien el admin Id
    })
    await cine.setAdmin(admin)
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



async function getAllEstrenos(req, res) {
  try {
    const today = dateNow()
    console.log(today)

    const estrenos = await Pelicula.findAll({
      where: {
        releaseDate: {
          [Op.gte]: today
        }
      }
    })

    if (estrenos) {
      return res.status(200).json(estrenos)
    } else {
      return res.status(404).send('No hay estrenos')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneCineEstrenos(req, res) {
  try {

    const cine = await Cine.findByPk(req.params.id)
    // console.log(cine.toJSON())

    const peliculas = await cine.getPeliculas()
    if (peliculas) {
      return res.status(200).json(peliculas)
    } else {
      return res.status(404).send('No hay estrenos')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneCineDescuentos(req, res) {
  try {
    const hour = hourNow()
    const today = dateNow()
    console.log(hour)
//Buscar Attributes
    const descuentos = await Pelicula.findAll({
      where: {
        schedule: {
          [Op.gte]: hour,
        },
        releaseDate: {
          [Op.lte]: today
        }
      }
    })

    if (descuentos) {
      return res.status(200).json(descuentos)
    } else {
      return res.status(404).send('No hay estrenos')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


function dateNow() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = yyyy + '-' + mm + '-' + dd;
  return formattedToday
}

function hourNow() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return time
}

module.exports = { 
  getAllCines, 
  getOneCine, 
  createCine, 
  updateCine, 
  deleteCine, 
  getAllEstrenos, 
  getOneCineEstrenos, 
  getOneCineDescuentos }