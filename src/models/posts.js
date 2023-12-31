const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    comments: {
        type: Array,
    },

    comments_count: {
        type: String,
    },

    date: {
        type: String,
    },

    description: {
        type: String,
    },

    img: {
        type: String,
    },

    imgprofile: {
        type: String,
    },

    name: {
        type: String,
    },

    tags: {
        type: Array,
    },

    title: {
        type: String,
    },

})

const Post = mongoose.model('Post',postSchema)

module.exports = Post