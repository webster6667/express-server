const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const jobRouter = require('./jobRouter')


router.use('/user', userRouter)
router.use('/job', jobRouter)

module.exports = router