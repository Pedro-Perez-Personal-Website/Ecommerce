import Products from "../components/Products";




//This will be our Products page
export default function Productos({products, setProducts, categories}){

    return(
        <>
            <h2>Products</h2>
            <Products 
                products={products} 
                setProducts={setProducts}
                categories={categories}/>
        </>
    )
}