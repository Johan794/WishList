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
    

}

let handleSubmit = async e =>{
    e.preventDefault();
    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      }
    let r = await fetch ("http://localhost:3000/api/insert",config)
    console.log(r);
}

export default function wishform(req,res){
    return (
        <div>
            <Header title = "Wish Form"></Header>
        <card className = "card w-50 m-auto mt-3 bg-primary">
        <form className='form  ' onSubmit={handleSubmit}>
            <div className='form-group p-2'>
                <input className='form-control' type="text" placeholder="Name" onChange={handleChage} name = "name"/>  
                
            </div>
            <div className='form-group p-2'>
            <textarea className='form-control' placeholder="Description" onChange= {handleChage} name = "description"></textarea>
            </div>
            <div className='form-group p-2'>
                <button type='submit'>let's go</button>
            </div>
        </form>
        </card>
    </div>
    )
}