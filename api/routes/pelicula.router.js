const router = require('express').Router()

const { getAllPeliculas, 
        getOnePelicula, 
        createPelicula, 
        updatePelicula, 
        deletePelicula} = require('../controllers/pelicula.controller')

router.get('/', getAllPeliculas)
router.get('/:name', getOnePelicula)
router.post('/', createPelicula)
router.put('/:id', updatePelicula)
router.delete('/:name', deletePelicula)

module.exports = router