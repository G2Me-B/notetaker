// Dependencies
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"

// Activate the environment variables
dotenv.config()
const PORT = process.env.PORT || 5001

// Instantiate the app
const app = express()


// Instantiate a middleware for parsing
app.use(cors({
    origin: "http://localhost:5173"
}
))
app.use(express.json())
app.use(rateLimiter)

// custom middleware function
/*app.use((req,res,next)=>{
    console.log(`Request method is ${req.method} & Request URL is  ${req.url}`)
    next()
    }) */

// Instantiate the routes
app.use("/api/notes", routes)


// Activate Database connection
connectDB().then(() => {

    // And then listen on port
    app.listen(PORT, () => {
        console.log(`Server started on PORT:`, PORT)
    })

})

