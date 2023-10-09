import {Products} from "../components/Products";
import {getProducts} from '../apiCalls'
import { useEffect, useState } from 'react'




//This will be our Products page
export default function Productos({products, setProducts, categories}){
    //event handler
    const maxToMin = ()=>{
        console.log("productos:",products);
        const max = products.sort((a,b)=>b.price - a.price);
        console.log("sorted products:", max);
        setInversa(!inversa);
    }
    const minToMax = ()=>{
        console.log("productos:",products);
        const max = products.sort((a,b)=>a.price - b.price);
        console.log("sorted products:", max);
        setInversa(!inversa);

    }
    const [inversa, setInversa] = useState(true);

    function eventHandler(){
        console.log("click")
        console.log(inversa);
        setInversa(!inversa);
        return inversa;
    }


    //will render our products on page
    useEffect(()=>{
        const setData = async ()=>{
            try {
                console.log("hi");


            } catch (error) {
                console.error;
            }
        }
        setData();
    },[inversa])


    return(
        <div className="container-column">
            <h2>Products</h2>
            
                <form action="#" id="maxormin">
                    <button onClick={minToMax}>min</button>
                    <button onClick={maxToMin}>max</button>

                </form>
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