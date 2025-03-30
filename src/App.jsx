import './App.css'
import Dummy from './components/Dummy'
import { createContext, useState } from 'react'
import Test2 from './components/Test2'
import Button from './components/Button'


const CountContext = createContext(null);
function App() {
  const[count,setCount]= useState(10)

  return (
    <CountContext.Provider value={{count,setCount}}>
      <p>count in App component {count}</p>
<Button text='increment' onClick={()=>setCount(count+1)} />
      <Test2  />
    </CountContext.Provider>
  )
}
export { CountContext }
export default App
