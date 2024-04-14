import { useState } from 'react'

export function CreateTodo(){
    let [title,setTitle]=useState(0)
    let [description,setDescription]=useState(0)

    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={(value)=>{
            setTitle(value.target.value)
        }}></input>
        <br></br>
        <br></br>

        <input style={{
            padding:10,
            margin:10
        }} onChange={(value)=>{
            setDescription(value.target.value)
        }} type="text" placeholder="decription"></input>
        <br></br>
        <br></br>


<button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async(res)=>{
  let json=await res.json()
  console.log(json)
  alert(json.msg)
})


        }}>Add a Todo</button>
    </div>
}