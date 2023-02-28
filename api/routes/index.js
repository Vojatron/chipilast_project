const router = require('express').Router()

const cinesRouter = require('./cine.router')
const peliculasRouter = require('./pelicula.router')

router.use('/cines', cinesRouter)
router.use('/peliculas', peliculasRouter)

module.exports = router