const router = require('express').Router()

const { 
    getAllAdmin, 
    getOneAdmin, 
    createAdmin, 
    updateAdmin,
    deleteAdmin } = require('../controllers/administrador.controller')

router.get('/', getAllAdmin)
router.get('/:userName', getOneAdmin)
router.post('/', createAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)

module.exports = router