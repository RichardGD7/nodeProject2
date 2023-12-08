const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')

router.get('/', postController.getAll)
router.get('/:id',postController.getbyId)
router.post('/',postController.post)
router.delete('/:id', postController.deletePost)

module.exports = router