import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyRoutes from './components/MyRoutes';

function App() {
  
  return (

    <BrowserRouter basename="/blog">
      <div className="mx-auto overflow-hidden">
 
        <Navbar /> 
        <MyRoutes />
       
      </div>
    </BrowserRouter>

  )

}

export default App;