//here we render each category
import Products from "../components/Products";
import {useParams} from 'react-router-dom';
import { getSpecificCategory } from "../apiCalls";
import { useEffect, useState } from "react";

export default function Category(category){
    const [products, setProducts]= useState([]);
    let params = useParams();
    console.log(params);
    

    useEffect(()=>{
        const setData= async()=>{
            try {
                const response = await getSpecificCategory(params.category);
                console.log(response);
                setProducts(response);
            } catch (error) {
                console.error
            }
        }
        setData();
    },[category]);

    return(
        <>
            <Products category={params.category} key={19} products={products}/>
        </>
    )
}