const express = require('express')
const router = express.Router()
const userController = require('../../controllers/users')
const postController = require('../../controllers/posts')

//Users
router.get('/:id',userController.getbyId) //publico
router.post('/',userController.post) //publico
router.post('/auth/login',userController.login) //publico

//Posts
router.get('/', postController.getAll) //publico
router.get('/:id',postController.getbyId) //publico

module.exports = router