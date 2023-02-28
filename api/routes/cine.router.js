const router = require('express').Router()

const { 
    getAllCines, 
    getOneCine, 
    createCine, 
    updateCine,
    deleteCine } = require('../controllers/cine.controller')

router.get('/', getAllCines)
router.get('/:name', getOneCine)
router.post('/', createCine)
router.put('/:id', updateCine)
router.delete('/:name', deleteCine)

module.exports = router