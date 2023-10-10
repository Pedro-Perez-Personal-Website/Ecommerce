//

import { useEffect, useState } from "react";
import { getProductsById, getUserKart } from "../apiCalls";
import { Checkout } from "../components/Checkout"
import useLocalStorage from "../components/useLocalStorage";



export default function CheckoutPage(props){


    const [listOfKart, setListOfKart] = useState([]);//here we will store our products

    const cartIds = window.localStorage.getItem("listaId");
    console.log("Lista de ids:", cartIds);
    const car = JSON.parse(cartIds);
    console.log("cart IDs:", car);

    //delete
    const del = (val)=>{
        console.log("Clicked",val);
        let item = window.localStorage.getItem(val);
        console.log("item",item)

    }


    return(
        <>
        <h4>Checkout Process</h4>
        <table>
            <thead>Order Review</thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
            {car.map((e)=>{
                console.log("Were in car :", e);
                return(
                <>
                    <tr id={e.id}>
                        <td>{e.product.title}</td>
                        <td>{e.quantity}</td>
                        <td>{e.price}</td>
                        <td>{e.price*e.quantity}</td>
                        <button>delete</button>
                    </tr>
                </>
                )
            })}


        </table>
        
        </>
    )
}