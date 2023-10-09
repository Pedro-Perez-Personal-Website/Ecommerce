//here we will create our cart

import { getUserKart } from "./apiCalls/index";






const setCart = async ()=>{
    try{
        const cart = getUserKart(2);
        console.log("cart:");
    }catch{
        console.error
    }

}
setCart();