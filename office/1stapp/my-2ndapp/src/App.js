
import './App.css';
import React, {useState} from 'react'
let App=()=>{
 const [count , setCount]= useState(0)

 const incriment= ()=>{
  setCount(count+1)
 }

 const dicriment =()=>{
  setCount(count-1)
 }


 return <>
  <div>
    <span>Number:{count}</span>
    <button onClick={incriment}>Incriment</button>
    <button onClick={dicriment}>dicriment</button>
  </div>
 </>
}

export default App