import React, { useState } from 'react';

function Login(){


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = () => {
      
  
      name === 'yash7773@gmail.com' && password === '1234'? alert(`Welcome, ${name}!`):setError('Incorrect username or password');
      // if (name === 'yash7773@gmail.com' && password === '1234') {
        
      //   alert(`Welcome, ${name}!`);
      // } else {
   
      //   setError('Incorrect username or password');
      // }
    };
 return   (
    <div>
    


      {/* Step 1: Create name, email, and password input form elements */}
   
     
      <form onSubmit={handleSubmit}>
     
        <div>
        
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Step 4: Display error message if login fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>



 )
}



export default Login