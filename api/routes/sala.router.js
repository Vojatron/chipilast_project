const router = require('express').Router()

const { 
    getAllSalas, 
    getOneSala, 
    createSala, 
    updateSala,
    deleteSala } = require('../controllers/sala.controller')

router.get('/', getAllSalas)
router.get('/:roomNumberId', getOneSala)
router.post('/', createSala)
router.put('/:roomNumberId', updateSala)
router.delete('/:roomNumberId', deleteSala)

module.exports = router