const Post = require('../models/posts')

module.exports = {
    getAll: async (req, res, next) => {
        let posts = await Post.find()
        if (!posts) next({status: 404, send:{msg: "Publicacioes no encontradas"}})
        next({status:201, send: {msg: "Publicación encotrada", data: posts}})
    },
    getbyId: async (req, res, next) => {
        const {id} = req.params
        let selectpost = await Post.findById(id)
        if (!selectpost) next({status: 401, send:{msg: "Publicación no encontrada"}})
        next({status:201, send: {msg: "Publicación encotrada", data: selectpost}})
    },
    post: async (req, res, next) => {
        console.log(req.body)
        try {
            let post = await Post.create(req.body)
            next({status: 201, send: {msg: "Publicación creada", data: post}})
        } catch (error) {
            next({status: 400, send: {msg: "Publicación no creada", err: error}})
        }
    },
    deletePost: async (req, res, next) => {
        const {id} = req.params
        let selectpost = await Post.findByIdAndDelete(id)
        if (!selectpost) next({status: 401, send:{msg: "No se pudo borrar la publicación"}})
        next({status:201, send: {msg: "Publicación borrada con éxito", data: selectpost}})
    }
}