const router = require('express').Router()

const { 
    getAllAdmins, 
    getOneAdmin, 
    createAdmin, 
    updateAdmin,
    deleteAdmin } = require('../controllers/admin.controller')

router.get('/', getAllAdmins)
router.get('/:userName', getOneAdmin)
router.post('/', createAdmin)
router.put('/:userName', updateAdmin)
router.delete('/:userName', deleteAdmin)

module.exports = router