const {Router} = require("express")
const router = Router()
const PostController = require("../controllers/PostController")

router.post('/create', PostController.create)
router.get('/getAll', PostController.getAll)

module.exports =router