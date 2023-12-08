const Post = require('../models/posts')

module.exports = {
    getAll: async (req, res, next) => {
        let posts = await Post.find()
        if (!posts) next({status: 404, send:{msg: "Usuarios no encontrados"}})
        next({status:201, send: {msg: "Usuario encotrado", data: posts}})
    },
    getbyId: async (req, res, next) => {
        const {id} = req.params
        let selectpost = await Post.findById(id)
        if (!selectpost) next({status: 404, send:{msg: "Usuarios no encontrados"}})
        next({status:201, send: {msg: "Usuario encotrado", data: selectpost}})
    },
    delete: async (req, res, next) => {
        next({status: 200, send: {msg: "Post Eliminado", data: {}}}) 
    },
}