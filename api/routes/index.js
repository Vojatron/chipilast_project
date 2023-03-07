const router = require('express').Router()


const cinesRouter = require('./cine.router')
const peliculasRouter = require('./pelicula.router')
const salasRouter = require('./sala.router')
const butacasRouter = require('./butaca.router')
const clientesRouter = require('./cliente.router')
const adminsRouter = require('./admin.router')
const authRouter = require('./auth.router')

router.use('/cines', cinesRouter)
router.use('/peliculas', peliculasRouter)
router.use('/salas', salasRouter)
router.use('/butacas', butacasRouter)
router.use('/clientes', clientesRouter)
router.use('/admins', adminsRouter)
router.use('/auth', authRouter)

module.exports = router