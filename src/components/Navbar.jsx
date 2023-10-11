//Navigation bar
import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { getKart, getProductsById, getUserKart } from "../apiCalls";
import CheckoutPage from "../pages/CheckoutPage";
import Kart from "./Kart"
import useLocalStorage from "./useLocalStorage";

//navbar-----------------------------------------------------------------------------------
export default function Navbar(props){
    //nav states
    const [sidebar, setSidebar] = useState(false);
    const [cart, setCart] = useState(false);
    const [list, setList] = useState([]);
    const [titles, setTitles] = useState([]);
    const [localKart, setLocalKart] = useLocalStorage("kartId", "")
    const [car, setCar] = useLocalStorage("carrito", "");


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
            {cart && <Cart loggedIn={data} titles={titles} cart={props.kart} true={cart} products={props.products} lista={list}/>}
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


    
    return(
    <>
        <div className="container" id="nav-kart">
        <CheckoutPage/>
        <Link to={'/checkout'}>Checkout</Link>
        </div>
    </>  
    )
}




export {Sidebar};