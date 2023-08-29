import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import '../style/index.css'
//get our fetch functions
import { getProducts } from '../apiCalls'
import Navbar from './Navbar'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => { 
    const getData = async ()=>{
      try {
        const p = await getProducts();
        setProducts(p);
      } catch (error) {
        console.error;
      }
    }
    getData();
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
    </Routes>
  )
}

export default App
