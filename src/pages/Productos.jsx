import {Products} from "../components/Products";
import {getProducts} from '../apiCalls'
import { useEffect, useState } from 'react'




//This will be our Products page
export default function Productos({products, setProducts, categories}){
    //Sort from max # to min
    const maxToMin = ()=>{
        console.log("productos:",products);
        const max = products.sort((a,b)=>b.price - a.price);
        console.log("sorted products:", max);
        setInversa(!inversa);
    }
    //sort from min to max
    const minToMax = ()=>{
        console.log("productos:",products);
        const max = products.sort((a,b)=>a.price - b.price);
        console.log("sorted products:", max);
        setInversa(!inversa);

    }
    //state variable that saves our boolean value
    const [inversa, setInversa] = useState(true);


    return(
        <div className="container-column">
            <h2>Products</h2>
                <span className="container" id="sort">
                    <button onClick={minToMax}>min</button>
                    <button onClick={maxToMin}>max</button>  
                </span>

            {categories.map((e,i)=>{
                return(
                    <>
                        <Products 
                            products={products} 
                            category={e}
                            key={i}/>
                    </>
                )

            })}
        </div>
    )
}