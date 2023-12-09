const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')

router.post('/',postController.post) 
router.delete('/:id', postController.deletePost)
router.put('/:id',postController.putPost)

module.exports = router