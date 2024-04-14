const express = require("express")
let todoRoute=require("./routes/todo.js")
let mongoose=require("mongoose")
let app=express()

let cors=require("cors")

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/",todoRoute)



mongoose.connect("").then(()=>{
    console.log("the db is connected")
}).catch(err=>console.log((err)))

app.listen(3000,()=>{
    console.log('Server is running on 3000')
})