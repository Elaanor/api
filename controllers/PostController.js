const { model } = require("mongoose")
const { post } = require("../router/router")
const PostService = require("../services/PostService")

const postService = new PostService()

class PostController {

   async create(req,res){
    try {
        const post = await postService.create(req.body)
         res.json(post)
    } catch (error) {
        res.status(403).json(error)
    }

   }

   async getAll(req,res){
       try {
           const posts = await postService.getAll()
           console.log(post)
           return res.json(posts)
       } catch (error) {
        res.status(403).json(error)
       }
   }
   
   async getOne(req,res){
       try {
           const {id} = req.params
       } catch (error) {
           
       }
   }

}

module.exports =  new PostController