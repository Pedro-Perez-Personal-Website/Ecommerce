//here well render the details of a single product
import { addToKart } from "../apiCalls";
import Products from "./Products"


export default function Product(props){

    const loggedIn = window.localStorage.getItem('loggedIn');
    const id = window.localStorage.getItem('localUser');
    console.log("user id:",id);
    const cartId = window.localStorage.getItem('kartId')
    console.log("cart id", cartId);
    
    const addCart = async()=>{
        try {
            console.log("were in!")
            const cart = await addToKart(id,cartId,props.product.id,1);
            console.log("product id",props.product.id);
            console.log("cart requ", cart);
        } catch (error) {
            console.error
        }
    }
    
    return(
        <section>
            <img src={props.product.image} alt="" />
            <h3>{props.product.title}</h3>
            <span>{props.product.category}</span>
            
            <p>$ {props.product.price}</p>
            <p>{props.product.description}</p>
            {loggedIn && <button onClick={addCart}>add kart</button>}
            {<Products products={props.products} category={props.product.category} key={'1'} />
        }</section>
        
    )
}