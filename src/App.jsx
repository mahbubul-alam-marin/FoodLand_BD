import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Link,Routes, useNavigate } from "react-router-dom";
import Home from './component/Home'

function App() {


  return (
    <Router>

    
    <div className='bg-[#E4E6F1]'>
    <Navbar/>
    <Home/>
    </div>
    </Router>
  )
}

export default App
