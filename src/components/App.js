import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'//get routes
import '../style/index.css'
import Navbar from './Navbar' //import navbar component
import Productos from '../pages/Productos'
import Home from '../pages/Home'
import User from '../pages/User'
import Login from '../pages/Login'

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);//the navbar will set the categories on the initial state
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  return (
    <Routes>
      <Route path='/' element={<Navbar
                                    setCategories={setCategories}
                                    categories={categories}
                                    user={user}
                                    login={login}/>}>
      <Route index element={<Home/>} />                               
      <Route path='products' element={<Productos 
                                        products={products} 
                                        setProducts={setProducts}
                                        categories={categories}
                                        />}/>
      <Route path='login' element={<Login
                                        setUser={setUser}
                                        setLogin={setLogin}/>}/>   
      <Route path='users/:id' element={<User
                                          user={user}
                                          setUser={setUser}/>}/>                                                                      
      </Route>
    </Routes>
  )
}

export default App
