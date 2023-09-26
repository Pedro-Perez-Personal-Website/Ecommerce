//here well render our details 
import Product from "../components/Product";
import { useParams } from "react-router";
import { getProductsById } from "../apiCalls";
import { useEffect, useState } from "react";

export default function Producto(props){

    let params = useParams();//get dynamic content
    console.log("id:", params)
    
    const [product, setProduct] = useState({}); 

    useEffect(()=>{
        const setData = async()=>{
            try {
                const res = await getProductsById(params.id);//get single product with the params
                console.log(res);
                setProduct(res);
            } catch (error) {
                console.error
            }
        }
        setData();
    },[params]);//added dependency to track the params

    return(
        <>
        <Product product={product} products={props.products}/>
        </>
    )
}