const router = require('express').Router()

const { 
    getAllButacas, 
    getOneButaca, 
    createButaca, 
    updateButaca,
    deleteButaca } = require('../controllers/butaca.controller')

router.get('/', getAllButacas)
router.get('/:idNumber', getOneButaca)
router.post('/', createButaca)
router.put('/:idNumber', updateButaca)
router.delete('/:idNumber', deleteButaca)

module.exports = router