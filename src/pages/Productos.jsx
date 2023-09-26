import Products from "../components/Products";
import {getProducts} from '../apiCalls'
import { useEffect } from 'react'




//This will be our Products page
export default function Productos({products, setProducts, categories}){
    //will render our products on page
    // useEffect(()=>{
    //     const setData = async ()=>{
    //         try {
    //             console.log("Were are setting the products..")
    //             const res = await getProducts();
    //             setProducts(res);

    //         } catch (error) {
    //             console.error;
    //         }
    //     }
    //     setData();
    // },[])

    return(
        <>
            <h2>Products</h2>
            {categories.map((e,i)=>{
                return(
                    <Products 
                        products={products} 
                        category={e}
                        key={i}/>
                )

            })}
        </>
    )
}