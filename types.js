let zod=require('zod')

let createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

let updateTodo=zod.object({
    id:zod.string()
    
})


module.exports={
    createTodo,updateTodo
}



