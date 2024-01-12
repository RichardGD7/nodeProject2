const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users");
const postController = require("../../controllers/posts");

//Users
router.get("/users/:id", userController.getbyId); //publico
router.post("/users", userController.post); //publico
router.post("/users/auth/login", userController.login); //publico

//Posts
router.get("/posts", postController.getAll); //publico
router.get("/posts/:id", postController.getbyId); //publico

module.exports = router;
