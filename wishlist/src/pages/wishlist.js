export default function wishList({wishes}){
   
    return (
        <div>
            <h1>Lista de deseos</h1>
            <ul>
              {wishes.map(e=>(
                  <li>{e.name}</li>
              ))}  
            </ul>
        </div>
    )
}

wishList.getInitialProps = async() =>{
    const res = await fetch('http://localhost:3000/api/wishes')
    const wishes = await res.json()
    return {wishes: wishes}
}

