import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'//get routes
import '../style/index.css'
import Navbar from './Navbar' //import navbar component

const App = () => {
  const [products, setProducts] = useState([])

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
    </Routes>
  )
}

export default App
