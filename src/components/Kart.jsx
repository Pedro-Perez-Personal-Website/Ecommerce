//this is our kart where we will store our quantity and subtotal price
import { useEffect, useReducer, useState } from "react"
import { getUserKart } from "../apiCalls";
import Product from "./Product";


//here we have our Kart preview----------------------------------
const KartDisplay = (props)=>{
    //we have to decompose kart
    console.log("kart",props.kart);
    const kartList = [];

    return(
        <div id="kart">
            {/* {props.kart.products.map((e)=>{
                return(
                    <p>{e.productId}</p>
                ) */}
            
        </div>
    )
}




//This is our kart component, an icon that stores the # of items-------------------------
export default function Kart(props){//props: user,

    const [idNumber, setIdNumber] = useState('');

    useEffect(()=>{
        
    },[]);
    return(
        <>
            <button>
                <span id="counter">n</span>{//n is the number of items store on our kart
            }   <img src="https://github.com/Pedro-Perez-Personal-Website/Ecommerce/blob/dev-navbar/src/images/kart.png?raw=true" alt="" />
            </button>
            {props.user && <KartDisplay kart={props.kart} products={props.products}/>}
        </>
    )
}



