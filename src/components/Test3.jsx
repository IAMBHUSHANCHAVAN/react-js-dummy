import React, { useContext } from 'react'
import { CountContext } from '../App'
import Button from './Button'

const Test3 = () => {
    const {count,setCount} = useContext(CountContext)
  return (
    <div>Test3  {count} 
    <Button text='increment In compoent 3' onClick={()=>setCount(count+1)} />
    </div>
  )
}

export default Test3