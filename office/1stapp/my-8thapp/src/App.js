
import React, { useState } from 'react';

const App=()=>{
  const [data , setdata] = useState([])

  

  const fetchdata =async ()=>{
    try {

      const responce = await fetch('https://jsonplaceholder.typicode.com/todos')
      const result = await responce.json();
     
      
      setdata(result)
    } catch (error) {
      console.log("this is the error"+error)
    }
console.log(data)
  }


  
  return (

   
 
    <div>
<h1>React Fetch API Example</h1>

<button onClick={fetchdata}>Click</button>
<div>

  <ul>

{  data.map((item)=>(
    <li key={item.id}>{item.title}</li>
    ))}

    
  </ul>
</div>


    </div>
  )



}


export default App