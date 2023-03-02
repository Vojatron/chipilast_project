const Cliente = require('../models/cliente.model')

async function getAllClientes(req, res) {
  try {
    const clientes = await Cliente.findAll({
      where: req.query})
    return !clientes ? res.status(404).send('No existen clientes') : res.status(200).json(clientes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneCliente(req, res) {
    try {
      const cliente = await Cliente.findAll({
        where: {
            userName: req.params.userName
        }
      })
  
      if (cliente) {
        return res.status(200).json(cliente)
      } else {
        return res.status(404).send('Cliente not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function createCliente(req, res) {
    try {
      const cliente = await Cliente.create({
        userName: req.body.userName,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        creditCard: req.body.creditCard
      })
      return res.status(200).json({ message: 'Cliente created', cliente: cliente })
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  async function updateCliente(req, res) {
    try {
      const [clienteExist, cliente] = await Cliente.update(req.body, {
        returning: true,
        where: {
            userName: req.params.userName,
        },
      })
          if (clienteExist !== 0) {
        return res.status(200).json({ message: 'Cliente updated', cliente: cliente })
      } else {
        return res.status(404).send('Cliente not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  async function deleteCliente(req, res) {
    try {
      const cliente = await Cliente.destroy({
        where: {
            userName: req.params.userName,
        },
      })
      if (cliente) {
        return res.status(200).json('Cliente deleted')
      } else {
        return res.status(404).send('Cliente not found')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

module.exports = { getAllClientes, getOneCliente, createCliente, updateCliente, deleteCliente }