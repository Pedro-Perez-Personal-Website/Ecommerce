import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'//get routes
import '../style/index.css'
import Navbar from './Navbar' //import navbar component
import Productos from '../pages/Productos'
import Home from '../pages/Home'
import User from '../pages/User'
import Login from '../pages/Login'
import Category from '../pages/Category'
import Producto from '../pages/Producto'
import Header from './Header'
import { guest, cart } from '../apiCalls/guest'

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);//the navbar will set the categories on the initial state
  const [user, setUser] = useState(guest);
  const [login, setLogin] = useState(false);
  const [category, setCategory] = useState("");
  const [kart, setKart] = useState(cart);
  return (
    <Routes>
      <Route path='/' element={<Header
                                    setCategories={setCategories}
                                    categories={categories}
                                    user={user}
                                    login={login}
                                    setProducts={setProducts}
                                    products={products}
                                    setCategory={setCategory}
                                    setKart={setKart}
                                    kart={kart}/>}>
      <Route index element={<Home/>} />                               
      <Route path='products' element={<Productos 
                                        products={products} 
                                        setProducts={setProducts}
                                        categories={categories}
                                        />}/>
      <Route path='login' element={<Login
                                        setUser={setUser}
                                        user={user}
                                        setLogin={setLogin}
                                        setKart={setKart}
                                        kart={kart}/>}/>   
      <Route path='users/:id' element={<User
                                          user={user}
                                          setUser={setUser}/>}/>     
      <Route path='products/category/:category' element={<Category
                                                            category={category}/>}/>
      <Route path='products/:id' element={<Producto
                                                  products={products}/>}/>                                                                                                                      
      </Route>
    </Routes>
  )
}

export default App
