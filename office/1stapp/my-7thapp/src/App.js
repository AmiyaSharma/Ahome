import Layout from './componants/Layout';
import Registration from './componants/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';


const App = () => {


  
  return (

  <div>


   <BrowserRouter>
      <Routes>
      <Route path="/Registration" element={<Layout/>}>

      <Route path="Registration" element={<Registration/>}>   
      </Route>
            
        </Route>
      </Routes>
    </BrowserRouter> 
    
 <>
 < Login/>
 </>
   
  </div>
  
  )
  

};

export default App;
