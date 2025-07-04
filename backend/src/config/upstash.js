import {Ratelimit} from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import dotenv from "dotenv"
 
// activate the environment variable
dotenv.config()
// Create a rate limit object (that allows  10 request 20 seconds)
const rateLimit = new Ratelimit({
    redis:Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100,"20 s") // If per user then userid would ve the input parameter
})

export default rateLimit