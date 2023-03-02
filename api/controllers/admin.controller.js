const Administrador = require('../models/admin.model')

async function getAllAdmins(req, res) {
    try {
      const administradores = await Administrador.findAll({
        where: req.query})
      return !administradores ? res.status(404).send('No existen administradores') : res.status(200).json(administradores)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function getOneAdmin(req, res) {
    try {
      const administrador = await Administrador.findAll({
        where: {
            userName: req.params.userName
        }
      })
  
      if (administrador) {
        return res.status(200).json(administrador)
      } else {
        return res.status(404).send('Administrador not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createAdmin(req, res) {
    try {
      const administrador = await Administrador.create({
        userName: req.body.userName,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // rol: req.body.rol,
        cineAdmin: req.body.cineAdmin,
      })
      return res.status(200).json({ message: 'Administrador created', administrador: administrador })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async function updateAdmin(req, res) {
    try {
      const [administradorExist, administrador] = await Administrador.update(req.body, {
        returning: true,
        where: {
          userName: req.params.userName,
        },
      })
          if (administradorExist !== 0) {
        return res.status(200).json({ message: 'Administrador updated', administrador: administrador })
      } else {
        return res.status(404).send('Administrador not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteAdmin(req, res) {
    try {
      const administrador = await Administrador.destroy({
        where: {
          userName: req.params.userName,
        },
      })
      if (administrador) {
        return res.status(200).json('Administrador deleted')
      } else {
        return res.status(404).send('Administrador not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = { 
  getAllAdmins, 
  getOneAdmin, 
  createAdmin, 
  updateAdmin, 
  deleteAdmin }