export function Todos({todos}){

    async function HandleClick(id){
        let findCall=await fetch("http://localhost:3000/completed",{
            method:"PUT",
            body:JSON.stringify({
                id:id
            }),
            headers:{
                "Content-type":"application/json"
            }
        })

        let res=await findCall.json()
        console.log(res)
    }
    return <div>

        {
            todos.map(x=>{
                return <div>
                    <h1>{x.title}</h1>
        <h2>{x.description}</h2>
        <button onClick={()=>HandleClick(x._id)}>{x.completed==true?"Completed":"Mark as Done"}</button>
                </div>
            })
        }
        
    </div>
}