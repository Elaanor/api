const mongoose = require("mongoose")

const Post = mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    })

module.exports = mongoose.model('Post',  Post);