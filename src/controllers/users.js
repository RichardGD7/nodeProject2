//Los modelos se importan empezando con mayusculas
const User = require('../models/users')

module.exports = {
    // getAll: async (req, res, next) => {
    //     next({status: 200, send: {msg: "Usuarios", data: []}})
    // },
    
    // getById: async (req, res, next) => {
    // next({status: 200, send: {msg: "Usuario encontrado", data: {}}})
    // },
    post: async (req, res, next) => {
        console.log(req.body)
        try {
            let user = await User.create(req.body)
            next({status: 201, send: {msg: "Usuario creado", data: user}})
        } catch (error) {
            next({status: 400, send: {msg: "Usuario no creado", err: error}})
        }
    },
    // put: async (req, res, next) => {
    //     next({status: 200, send: {msg: "Usuario actualizado", data: {}}})
    // },
    // delete: async (req, res, next) => {
    //     next({status: 200, send: {msg: "Usuario elimninado", data: {}}})
    // }

}