// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const AuthContext = React.createContext(); // Create a context

const App = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState();

  const loginUser = (username) => {
    setUser(username);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    
    
 <div>  
 {/* <div><TaskList/></div> */}
 <div><TaskForm/></div>
 
  <Router>
 <Routes>
   <Route
     path="/login"
     element={user ? <Navigate to="/" /> : <Login loginUser={loginUser} />}
   />
   <Route
     path="/"
     element={
       user ? (
         <div>
           <h1>Welcome, {user}!</h1>
           <TaskForm addTask={addTask} />
           <input
             type="text"
             placeholder="Filter tasks"
             value={filter}
             onChange={(e) => setFilter(e.target.value)}
           />
           <TaskList tasks={tasks} filter={filter} />
         </div>
       ) : (
         <Navigate to="/login" />
       )
     }
   />
 </Routes>
</Router></div>

    
  );
};

export default App;
