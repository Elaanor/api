const Post = require("../models/Post")

class PostService {
    async create(post){
        const createdPost = await Post.create(post)
        return createdPost
    }

    async getAll(){
        const posts = await Post.find().lean()
        return posts
    }

    async getOne(){
        const post = await Post.findOne()
        return post
    }
    
    async update(post){
        if (!post._id) {
            throw new Error('id not found')
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatePost
    }

    async delete(){
        const post = await Post.findByIdAndDelete()
        return post
    }

}

module.exports =  PostService