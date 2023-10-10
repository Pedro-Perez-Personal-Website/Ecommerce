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
            console.log("were in!",props.product.id)
            let item = window.localStorage.getItem(props.product.id);
            console.log("item",item)
            if(item){
                alert("Already in cart")
            }else{
                console.log("not register")

                const res = window.localStorage.getItem('listaId');
                console.log("Response", res);

                let lista = JSON.parse(res);
                console.log("respuesta de listID",lista);

                lista.push(props.product.id);
                console.log("Despues:", lista);

                window.localStorage.setItem('listaId', JSON.stringify(lista));
                window.localStorage.setItem(props.product.id, JSON.stringify(props.product));

            }


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