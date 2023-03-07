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

    const {checkAuth, checkAdmin} = require('../utils/index')

router.get('/', getAllCines)
router.get('/estrenos', getAllEstrenos)
router.get('/:name', getOneCine)
router.get('/:id/descuentos', getOneCineDescuentos)
router.get('/:id/estrenos', getOneCineEstrenos)
router.post('/admin/:adminId', checkAuth, createCine)
router.put('/:id', checkAuth, updateCine)
router.delete('/:name', checkAuth, deleteCine)


module.exports = router