//Navigation bar
import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { getKart, getProductsById, getUserKart } from "../apiCalls";
import Kart from "./Kart"

//navbar-----------------------------------------------------------------------------------
export default function Navbar(props){
    //nav states
    const [sidebar, setSidebar] = useState(false);
    const [cart, setCart] = useState(false);
    const [list, setList] = useState([]);
    const [titles, setTitles] = useState([]);


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
                const productos = carrito.products;
                let lista = [];
                let titles = [];
                productos.map(async (e)=>{
                let product = await getProductsById(e.productId);
                console.log("title:",product.price)
                lista.push(product.price);
                titles.push(product.title);

                })
                setList(lista);
                setTitles(titles);
                console.log("lista:",lista)
                let sum = 0;
                list.map((e)=>{
                    console.log("precio:", e.price)
                })
                console.log("Suma:",sum);
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

    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        const setData = async ()=>{
            try {
                // console.log("hello world", props.cart);
                // let listOfName = [];
                // const productos = props.cart.products.map(async (e)=>{
                // let product = await getProductsById(e.productId);
                // listOfName.push(product.title);
                // });
                // setProducts(listOfName);
                // console.log("list:",listOfName);
                
            } catch (error) {
                console.error
            }
        }
        setData();

    },[]);

    
    const list = [];
    const totales = [];
    let i = -1;
    let sum = 0;

    
    return(
    <>
        {props.loggedIn && <div id="kart">
                                <h4>Kart</h4>
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        
                                    </tr>
                                {props.cart.products.map((e)=>{
                                    console.log("in!", e);
                                    console.log("producto id:",e.productId);
                                    console.log("Cantidad:", e.quantity)
                                    console.log("precio:", props.lista[i])
                                    console.log("total:", props.lista[i]*e.quantity);
                                    totales.push(props.lista[i]*e.quantity)
                                    console.log("titles", props.titles[i])
                                    console.log("totales", totales)
                                    
                                    i++;
                                    return(
                                        <tr>
                                            <td>{props.titles[i]}</td>
                                            <td>{e.quantity}</td>
                                            <td>{props.lista[i]}</td>
                                            
                                        </tr>
                                        
                                    )
                                    
                                })}

                                </table>
                                <Link to={'/checkout'}>checkout</Link>
                            </div>}
    </>  
    )
}




export {Sidebar};