import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Test1 from './Test1'

const Users = () => {
    const[product,setProduct]=useState()
      const[loading,setLoading]= useState(true)
      const {id} = useParams()
    
      const fetData = async ()=>{
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
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
    loading ? <>loading</>:   <div>
    <p>product id {id}</p>
    <p>product name {product.title}</p>
    {/* <p>product description {product.description}</p>
    <p>product price {product.price}</p> */}
    <Test1 title={product?.title} />
    
        </div>
 }   

  
    </>

  )
}

export default Users