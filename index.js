const express = require("express")
const mongoose = require("mongoose")
const router = require("./router/router")


app = express()

app.use(express.json())
app.use('/',router)

PORT = process.env.PORT || 3000 


const DB_URL = 'mongodb+srv://admin:123321@cluster0.3hrknls.mongodb.net/?retryWrites=true&w=majority'


const startApp = async () => {

    try {
       await mongoose.connect(DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log("Server Running on http://localhost:" + PORT))
    } catch (error) {
        console.log(error);  
    }

}


startApp()
