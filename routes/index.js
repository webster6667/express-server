const Router = require('express')
const router = new Router()
const cors = require('cors')
const userRouter = require('./userRouter')
const jobRouter = require('./jobRouter')

router.all('*', cors());

router.use('/user', userRouter)
router.use('/job', jobRouter)

module.exports = router