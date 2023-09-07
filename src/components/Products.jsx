//here we will render our categories
import Product from "./Product";

//Here well render the products image
const Gallery = ({products, category})=>{

    const productos = products.filter((item) => item.category == category);
    console.log(productos);

    return(
            <div>
                {productos.map((e,i) =>{
                return(
                
                    <span key={i}>
                        <img src={e.image} alt={e.title}/>
                        <p>Nombre de Producto</p>
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