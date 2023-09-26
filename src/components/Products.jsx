//here we will render our categories
import Product from "./Product";
import {useNavigate} from 'react-router-dom'

//Here well render the products image
const Gallery = ({products, category})=>{

    const productos = products.filter((item) => item.category == category);
    console.log(productos);

    let nav = useNavigate();

    return(
            <div>
                {productos.map((e,i) =>{
                return(
                
                    <span key={i} onClick={()=>{nav(`/products/${e.id}`)}}>{//when product clicked send to product details
                    }   <img src={e.image} alt={e.title}/>
                        <p>{e.title}</p>
                        <p>{e.price}</p>
                    </span>
                    //<Product product={e}/>
                )
                })}
            </div>
    )
}

//here we have our Products page component!
export default function Products({products, category, key}){

    return(
        <>
            <h3>{category}</h3>
            <Gallery category={category} products={products} key={key}/>

        </>
    )
}//