//

import { useEffect, useState } from "react";
import { getProductsById, getUserKart } from "../apiCalls";
import { Checkout } from "../components/Checkout"
import useLocalStorage from "../components/useLocalStorage";



export default function CheckoutPage(props){


    const [listOfKart, setListOfKart] = useState([]);//here we will store our products
    const [reload, setReload] = useState(true);

    const cartIds = window.localStorage.getItem("listaId");
    console.log("Lista de ids:", cartIds);
    const car = JSON.parse(cartIds);
    console.log("cart IDs:", car);
    useEffect(()=>{
        //hello
        console.log("hello!")
    },[reload]);

    let sum = 0;

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
                sum = sum + (e.quantity*e.price);
                return(
                <>
                    <Item   key={e.id} id={e.id} title={e.product.title} 
                            quantity={e.quantity} price={e.price}
                            car={car} 
                            reload={reload}
                            setReload={setReload}
                            
                    />
                </>
                )
            })}
            <tr>
                <td>subtotal</td>
                <td></td>
                <td></td>
                <td>{sum}</td>
            </tr>


        </table>
        
        </>
    )
}


export const Item =(props)=>{


    //remove button
    const remove = ()=>{
        console.log("Clicked remover");

        window.localStorage.setItem('listaId', JSON.stringify(props.car));
        let res = window.localStorage.getItem('listaId');
        let cart = JSON.parse(res);//parse our cart to loop in it
        let i = 0;
        cart.forEach(element => {
            console.log("Element:", element.id);
            if(element.id == props.id){
                console.log("its a match!",i);
                cart.splice(i,1);
                let itemRemove = window.localStorage.removeItem(element.id)
                props.setReload(!props.reload);
                
                
            }
            
            i++;
        });
        window.localStorage.setItem('listaId',JSON.stringify(cart));
        console.log("found",i);
        i=0;
        
    }
    //Add button
    const add = ()=>{
        console.log("Add");
        let res = window.localStorage.getItem('listaId');
        let cart = JSON.parse(res);//parse our cart to loop in it
        console.log("cart", cart);
        let i = 0; //index 
        cart.forEach(e=>{
            console.log("Element id:", e.id);
            if(e.id == props.id){
                console.log("Its a match! index:", i);
                console.log("cantidad", e.quantity);
                e.quantity++;
                props.setReload(!props.reload)
            }
            i++;
        })      
    
        i=0;
        window.localStorage.setItem('listaId', JSON.stringify(cart));

    };

    //Add button
    const resta = ()=>{
        console.log("restar");
        let res = window.localStorage.getItem('listaId');
        let cart = JSON.parse(res);//parse our cart to loop in it
        console.log("cart", cart);
        let i = 0; //index 
        cart.forEach(e=>{
            console.log("Element id:", e.id);
            if(e.id == props.id){
                console.log("Its a match! index:", i);
                console.log("cantidad", e.quantity);
                e.quantity--;
                props.setReload(!props.reload)
            }
            i++;
        })      
    
        i=0;
        window.localStorage.setItem('listaId', JSON.stringify(cart));

    };


    return(
        <tr id={`item-${props.id}`} key={`item-${props.id}`}>
            <td>{props.title}</td>
            <td><button onClick={add}>+</button>{props.quantity}<button onClick={resta}>-</button></td>
            <td>{props.price}</td>
            <td>{props.price*props.quantity}</td>
            <button onClick={remove}>delete</button>
        </tr>
    )

}