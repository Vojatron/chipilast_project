const router = require('express').Router()

const { 
    getAllButacas, 
    getOneButaca, 
    createButaca, 
    updateButaca,
    deleteButaca } = require('../controllers/butaca.controller')

router.get('/', getAllButacas)
router.get('/:name', getOneButaca)
router.post('/', createButaca)
router.put('/:id', updateButaca)
router.delete('/:name', deleteButaca)

module.exports = router