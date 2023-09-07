//here well render the details of a single product
import Products from "./Products"


export default function Product(props){

    return(
        <section>
            <img src={props.product.image} alt="" />
            <h3>{props.product.title}</h3>
            <span>{props.product.category}</span>
            <p>Rating: {props.product.rating.rate}</p>
            <p>$ {props.product.price}</p>
            <p>{props.product.description}</p>
            <button>add kart</button>
            {//<Products products={props.products} category={props.product.category} key={'1'} />
        }</section>
        
    )
}