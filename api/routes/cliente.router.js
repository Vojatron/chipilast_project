const router = require('express').Router()

const { 
    getAllClientes, 
    getOneCliente, 
    createCliente, 
    updateCliente,
    deleteCliente } = require('../controllers/cliente.controller')

router.get('/', getAllClientes)
router.get('/:userName', getOneCliente)
router.post('/', createCliente)
router.put('/:userName', updateCliente)
router.delete('/:userName', deleteCliente)

module.exports = router