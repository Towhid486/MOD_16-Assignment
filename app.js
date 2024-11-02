 import express from 'express'
 import cors from 'cors'
 import mongoose from 'mongoose'
 import rateLimit from 'express-rate-limit'
 import helmet from 'helmet'
 import cookieParser from 'cookie-parser'
 import hpp from 'hpp'
 import * as path from 'path'
 import router from './routes/api.js'
 import {MONGODB_CONNECTION,MAX_JSON_SIZE,URL_ENCODED,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER,WEB_CACHE,PORT,} from './app/config/config.js'



 const app = express();


//Global Application Middleware
 app.use(cors());
 app.use(express.json({limit: MAX_JSON_SIZE}));
 app.use(express.urlencoded({ extended: URL_ENCODED }));
 app.use(hpp())
 app.use(helmet())
 app.use(cookieParser())


//Rate Limiter
 const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER})
 app.set('etag',WEB_CACHE)


 //MongoDB Connection
 /*
 You Need to connect mongoDB Here
 */


 //Set Api Routes
 app.use('/api',router)

 //Set Application Storage
 app.use(express.static('storage'))


 //Run Your Express Mini Blog Project
app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
})












