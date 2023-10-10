//

import { useEffect, useState } from "react";
import { getProductsById, getUserKart } from "../apiCalls";
import { Checkout } from "../components/Checkout"
import useLocalStorage from "../components/useLocalStorage";



export default function CheckoutPage(props){


    const [listOfKart, setListOfKart] = useState([]);//here we will store our products

    const cartId = window.localStorage.getItem("kartId");
    const carrito = window.localStorage.getItem("carrito");
    const car = JSON.parse(carrito);

    console.log("cart ID:", car);
    
    useEffect(()=>{
        const setData = async ()=>{
            try {
                let list = [];//array where we will store our products
                let sum = 0;
                car.map(async (e)=>{
                console.log("were in product",e.productId);
                let product = await getProductsById(e.productId);   
                sum = sum + (e.quantity*product.price);             
                let item = {
                    "title":product.title,
                    "quantity":e.quantity,
                    "precio":product.price,
                    "total": e.quantity*product.price,
                    "id": product.id,
                    "suma":sum
                }
                console.log("Item:",item);
                list.push(item);
                })
                console.log("Lista",list)
                setListOfKart(list);
                
            } catch (error) {
                console.error
            }
        }
        setData();
    },[]);
     

    

    return(
        <>
        <h4>Checkout Process</h4>
        <Checkout listOfKart={listOfKart} />
        
        
        </>
    )
}