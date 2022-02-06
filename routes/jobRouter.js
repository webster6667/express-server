const Router = require('express')
const router = new Router()
const jobController = require('../controllers/jobController')

router.get('/', jobController.getAll)

module.exports = router ;