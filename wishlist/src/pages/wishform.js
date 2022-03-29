
let stat = {
    name: "",
    description: ""
}

let handleChage = e =>{
    console.log(e)
}

export default function wishform(req,res){
    return (
        <div>
        <form>
            <div>
                <input type="text" placeholder="Name" onChange={handleChage}/>  
                
            </div>
            <div>
            <textarea placeholder="Description" ></textarea>
            </div>
        </form>
    </div>
    )
}