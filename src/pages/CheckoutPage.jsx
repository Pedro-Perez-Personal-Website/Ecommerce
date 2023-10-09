//

import { useEffect, useState } from "react";
import { getProductsById, getUserKart } from "../apiCalls";



export default function CheckoutPage(props){

    const [products, setProducts] = useState([])
    const listOfName = [];
    const listOfPrice = [];
    const cartId = window.localStorage.getItem("kartId");
    console.log("cart ID:", cartId);
    
    useEffect(()=>{
        const setData = async ()=>{
            try {

                props.cart.products.map((e)=>{
                    console.log("were in producst");
                    
                })
                
            } catch (error) {
                console.error
            }
        }
        setData();
    },[]);
     
    console.log("Products->:", products);
    

    return(
        <>
        <h4>Checkout Process</h4>
        <table>
                <tr>
                    <th>Order</th>
                </tr>
                <tr>
                    <td>Product</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Total</td>
                </tr>
                
                {props.cart.products.map((e)=>{
                    console.log("aver :", listOfName)
                    return(
                        <tr>
                            <td>{}</td>
                            <td><button>+</button>  n  <button>-</button></td>
                            <td></td>
                        </tr>
                    )
                })}
                
            </table>
        </>
    )
}