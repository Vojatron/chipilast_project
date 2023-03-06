const router = require('express').Router()

const { 
    getAllCines, 
    getOneCine, 
    createCine, 
    updateCine,
    deleteCine,
    getAllEstrenos, 
    getOneCineEstrenos,
    getOneCineDescuentos } = require('../controllers/cine.controller')

router.get('/', getAllCines)
router.get('/estrenos', getAllEstrenos)
router.get('/:name', getOneCine)
router.get('/:id/descuentos', getOneCineDescuentos)
router.get('/:id/estrenos', getOneCineEstrenos)
router.post('/admin/:adminId', createCine)
router.put('/:id', updateCine)
router.delete('/:name', deleteCine)


module.exports = router