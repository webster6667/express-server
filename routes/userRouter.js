const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.get('/:id', userController.getOne)

module.exports = router ;