const express = require('express')
const fs=require("fs")
const app = express()
const cors=require("cors")
const bodyperser= require('body-parser')
app.use (express.json())


app.use(cors())
app.use(bodyperser.json())
app.get('/',(req,res)=>{
    res.send("home Page")
})

app.get("/staff",(req,res)=>{
   const data= JSON.parse(fs.readFileSync("./db.json","utf-8"))
   res.send(data.staff)
//    res.end(data)
})

app.listen(8080,()=>{
    console.log("running")
})