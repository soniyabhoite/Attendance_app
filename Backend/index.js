import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import AllRoutes from './Routes/index.js'

const app=express()
app.use(express.json())
dotenv.config()
app.get('/',(req,res)=>{
   return res.send("Welcome page")
})
 var corsOption={
    origin:"http://localhost:3000",
    Credentials:true

 }
app.use(cors(corsOption))
app.use("/api",AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(()=>
{
    console.log("database connected")
})

app.listen(5000,()=>{
    console.log("server running on port 5000")
})