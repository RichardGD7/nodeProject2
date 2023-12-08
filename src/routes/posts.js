const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')

router.get('/', postController.getAll)
router.get('/:id',postController.getbyId)
router.delete('/:id', postController.delete)
module.exports = router