//Navigation bar
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getKart, getProductsById, getUserKart } from "../apiCalls";
import Kart from "./Kart"

//navbar-----------------------------------------------------------------------------------
export default function Navbar(props){
    //nav states
    const [sidebar, setSidebar] = useState(false);
    const [cart, setCart] = useState(false);


    const eventHandler =()=>{//open side
        console.log("Clicked");
        setSidebar(!sidebar);
    }
    const openCart = ()=>{
        console.log("clicked!")
        setCart(!cart);
    }

    let data = window.localStorage.getItem("loggedIn");
    console.log("logged in", data);
    
    //use Efect to run each time a user is logged in 
    useEffect(()=>{
        const setData = async ()=>{
            try {
                console.log("we are in!")
                const kart = await getUserKart(localStorage.getItem('localUser'));
                console.log("cart:", kart[0]);
                const carrito = kart[0];
                props.setKart(carrito);
                console.log("carrito:", carrito)
                return carrito;
            } catch (error) {
                console.error
            }
        }
        setData();
    },[props.login]);

    return(
        <nav className="container" id="nav-bar">
            <button onClick={eventHandler} >
                <img src='https://github.com/Pedro-Perez-Personal-Website/Ecommerce/blob/dev-navbar/src/images/sidemenu.png?raw=true' 
                alt="sidebar"
                className="button"
                id="imagenDmenu" />
            </button>
            {sidebar && <Sidebar categories={props.categories} setCategory={props.setCategory} />}
            <label>Search:
                <input type="text" />
            </label>
            <ol className="container" id="menu-list">
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                {data ? <Link to={`/users/${props.user.id}`}>{window.localStorage.getItem("username")}</Link> : <Link to={`/login`}>Login</Link>}
            </ol>
            {data && <button onClick={openCart}>kart</button>}
            {cart && <Cart loggedIn={data} cart={props.kart} true={cart} />}
            {/* <Kart user={props.user} kart={props.kart} login={props.login} products={props.products}/> */}
        </nav>
    )
}



//Sidebar ------------------------------------------------------------------------
const Sidebar = ({categories, setCategory})=>{

    return(
        <div id="sidebar">
           <h4>Categories</h4>
           
            {categories.map((e)=>{
                return <Link to={`/products/category/${e}`} onClick={()=>{setCategory(e)}}>{e}</Link>
            })}
           
        </div>
    )
}


//kart ------------------------------------
const Cart = (props)=>{

    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        const setData = async ()=>{
            try {
                console.log("hello world", props.cart);
                let listOfName = [];
                const productos = props.cart.products.map(async (e)=>{
                let product = await getProductsById(e.productId);
                listOfName.push(product.title);
                });
                console.log("list:",listOfName);
                
            } catch (error) {
                console.error
            }
        }
        setData();

    },[props.true]);
    
    

    return(
    <>
        {props.loggedIn && <div id="kart">
                                <h4>Kart</h4>
                                
                            </div>}
    </>  
    )
}




export {Sidebar};