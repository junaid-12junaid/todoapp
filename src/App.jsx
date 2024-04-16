import { useState,useEffect } from 'react'

import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {
let [todo,setTodo]=useState([])


useEffect(()=>{
fetch("http://localhost:3000/todos").then(async(res)=>{
  let json=await res.json()
  console.log(json)
  setTodo(json.result)
})
},[])



  return (
   <div>
    <CreateTodo/>
    <Todos todos={todo}/>
   </div>
  )
}

export default App
