let express=require('express')
let zod=require("zod")
let router=express.Router()
let todoModel=require("../Models/todo")

let { createTodo,updateTodo}=require("../types")

router.post("/todo",async (req,res)=>{
    let {title,description}=req.body

    console.log(req.body)

   let parsedPayLoad= createTodo.safeParse(req.body)

   if(!parsedPayLoad.success){
        return res.status(400).json({
            msg:"You sent the wrong inputs"
        })
   }

   await todoModel.create({
    title,description
   })

   return res.status(201).json({
    msg:"The todo is added Successfully"
}) 

})
router.get("/todos",async(req,res)=>{
    let findAll=await todoModel.find()

    return res.status(200).json({
        "msg":"all todo's",
        "result":findAll
    }) 
})
router.put("/completed",async(req,res)=>{
    let parsedPayLoad= updateTodo.safeParse(req.body)

    
   if(!parsedPayLoad.success){
    return res.status(400).json({
        msg:"You sent the wrong inputs"
    })
}

    let findUpdate=await todoModel.findByIdAndUpdate({_id:req.body.id},{$set:{completed:true}},{new:true})

    return res.status(200).json({
        msg:"Updated the todo"
    })

})

router.all('/*/', async function (req, res) {
    return res.status(404).send({ status: false, message: "Page Not Found" })
})

module.exports=router