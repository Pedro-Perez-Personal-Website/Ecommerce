//

import { useEffect, useState } from "react";

export default function CheckoutProcess(props){

    const [name, setName]= useState("");
    const [cardNumber, setCardNumber] = useState(0)
    const [exp, setExp] = useState("");
    const [cvc, setCvc] = useState(0);

    
    const cartIds = window.localStorage.getItem("listaId");
    console.log("Lista de ids:", cartIds);
    const car = JSON.parse(cartIds);
    console.log("cart IDs:", car);
    

    const usuario = window.localStorage.getItem('user');
    const user = JSON.parse(usuario);
    console.log("usuario:", user)
    window.localStorage.setItem('user', JSON.stringify(user));

    useEffect(()=>{
        try {
            console.log("hello")
        } catch (error) {
            
        }
    },[name]);

    const buy = ()=>{
        console.log("Clicked")
        alert(`Thank you for buying ${user.name.firstname}
        your payment has been proces to this card${cardNumber}`);


    }

    return(
        <>
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
                    <tr>
                        <td>{e.product.title}</td>
                        <td>{e.quantity}</td>
                        <td>{e.product.price}</td>
                        <td>{e.product.price*e.quantity}</td>
                    </tr>

                )
            })}
            <tr>
                <td>Name:</td>
                <td>{user.name.firstname} {user.name.lastname}</td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>{user.address.street} {user.address.number} {user.address.city}</td>
            </tr>
            </table>
            <form   id="card-form" className="container-column">
                <label htmlFor="">Name
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} required/>
                    
                </label>
                <label htmlFor="">Number
                    <input type="text" onChange={(e)=>{setCardNumber(e.target.value)}} required/>
                </label>
                <label htmlFor="">exp
                    <input type="text" onChange={(e)=>{setExp(e.target.value)}} required/>
                </label>
                <label htmlFor="">cvc
                    <input type="text" onChange={(e)=>{setCvc(e.target.value)}} required/>
                </label>
                <button onClick={buy}>Submit</button>
            </form>
        </>
    )
}