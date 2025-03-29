import './App.css'
import Dummy from './components/Dummy'
import { useEffect, useState } from 'react'

function App() {


  const[product,setProduct]=useState([])
  const[loading,setLoading]= useState(true)


  const fetData = async ()=>{
    setLoading(true)
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log("data",data)
    setProduct(data)
    setLoading(false)
  }



  useEffect(()=>{
    fetData()
  },[])






  return (
    <>
   {

    loading ? <>loading</>:

    product.map((item,i)=>{
      return <div key={i} style={{display:"flex",gap:"10px"}}>
        <img height={100} width={100} src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <a href={`product/${item.id}`}>Buy</a>
      </div>
    })
   }
    </>
  )
}

export default App
