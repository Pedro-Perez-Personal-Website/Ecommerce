import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'//get routes
import '../style/index.css'
import Navbar from './Navbar' //import navbar component
import Productos from '../pages/Productos'
import Home from '../pages/Home'

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);//the navbar will set the categories on the initial state

  return (
    <Routes>
      <Route path='/' element={<Navbar
                                    setCategories={setCategories}
                                    categories={categories}/>}>
      <Route index element={<Home/>} />                               
      <Route path='products' element={<Productos 
                                        products={products} 
                                        setProducts={setProducts}
                                        categories={categories}
                                        />}/>
                                        
      </Route>
    </Routes>
  )
}

export default App
