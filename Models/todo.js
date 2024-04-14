let mongoose=require("mongoose")

let todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('todo-data',todoSchema)