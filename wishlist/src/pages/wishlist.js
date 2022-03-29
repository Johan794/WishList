import Header from '../components/Header'

export default function wishList({wishes}){
   
    return (
        <div className='w-50 m-auto mt-5'>
            <Header title = "WishList"></Header>
            <h1 className='text-center'>Lista de deseos</h1>
            <div className='list-group'>
              {wishes.map(e=>(
                  <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{e.name}</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">{e.description}</p>
                  <small>And some small print.</small>
                </a>
              ))}

              </div>  
            
        </div>
    )
}

wishList.getInitialProps = async() =>{
    const res = await fetch('http://localhost:3000/api/wishes')
    const wishes = await res.json()
    return {wishes: wishes}
}

