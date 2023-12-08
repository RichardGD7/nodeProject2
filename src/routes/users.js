const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')


router.get('/:id',userController.getbyId)
router.post('/',userController.post)
// router.put('/:id',userController.put)

//router.post('/login',userController.login)
//router.post('/logout',userController.logout)

module.exports = router