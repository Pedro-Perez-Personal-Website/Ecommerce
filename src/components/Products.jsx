//here we will render our products page
import { useEffect } from 'react'
import {getProducts, getCategories} from '../apiCalls'

//Here well render the products image
const Gallery = ({products, category})=>{

    return(
        <section>
            <h3>{category}</h3>
            <div>
                {products.map((e,i) =>{//should be a filter method that matches the category
                return(
                    <>
                    <span>
                        <img src={e.image} alt={e.title} key={i}/>
                        <p>Nombre de Producto</p>
                        <p>{e.price}</p>
                    </span>
                    </>
                )
                })}
            </div>
        </section>
    )
}

//here we have our Products page component!
export default function Products({products, setProducts, categories, setCategories}){

    useEffect(()=>{
        const setData = async ()=>{
            try {
                console.log("Were are setting the products..")
                const res = await getProducts();
                setProducts(res);
                const cat = await getCategories();
                setCategories(cat);
            } catch (error) {
                console.error;
            }
        }
        setData();
    },[])

    return(
        <>
            {categories.map((e,i)=>{//for each category will add a gallery of components
                return(
                    <Gallery category={e} key={i} products={products}/>
                )
            })}
        </>
    )
}//