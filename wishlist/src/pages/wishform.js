import Header from '../components/Header'
let state = {
    name: "",
    description: ""
}

let handleChage = e =>{
    
    switch (e.target.name){
        case "name": state.name = e.target.value; break;
        case "description": state.description = e.target.value
    } 
    console.log("state name: "+ state.name)
    console.log("state description: "+state.description )

}

let handleSubmit = e =>{
    fetch ()
}

export default function wishform(req,res){
    return (
        <div>
            <Header title = "Wish Form"></Header>
        <card className = "card w-50 m-auto mt-3">
        <form className='form  '>
            <div className='form-group p-2'>
                <input className='form-control' type="text" placeholder="Name" onChange={handleChage} name = "name"/>  
                
            </div>
            <div className='form-group p-2'>
            <textarea className='form-control' placeholder="Description" onChange= {handleChage} name = "description"></textarea>
            </div>
        </form>
        </card>
    </div>
    )
}