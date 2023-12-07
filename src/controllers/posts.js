const Post = require('../models/posts')

module.exports = {
    getAll: async (req, res, next) => {
        let posts = await Post.find()
        if (!posts) next({status: 404, send:{msg: "Usuarios no encontrados"}})
        next({status:201, send: {msg: "Usuario encotrado", data: posts}})
    }

}