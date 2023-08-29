import React, { useEffect, useState } from 'react'
import '../style/index.css'
//get our fetch functions
import { getProducts } from '../apiCalls'

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
    <div>
      <p>Hello World</p>
      {!!products.length &&
        products.map((el, i) => {
          return (
            <div key={i}>
              <h1>{el.title}</h1>
            </div>
          )
        })}
    </div>
  )
}

export default App
