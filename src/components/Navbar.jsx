//Navigation bar
import { useState } from "react"
import { Link } from "react-router-dom"
import Kart from "./Kart"


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

//navbar-----------------------------------------------------------------------------------
export default function Navbar(props){

    const [sidebar, setSidebar] = useState(false);
    const eventHandler =()=>{//open side
        console.log("Clicked");
        setSidebar(!sidebar);
    }
    let data = window.localStorage.getItem("loggedIn");
    console.log("logged in", data);

    return(
        <nav className="container" id="nav-bar">
            <button onClick={eventHandler} >
                <img src='https://github.com/Pedro-Perez-Personal-Website/Ecommerce/blob/dev-navbar/src/images/sidemenu.png?raw=true' 
                alt="sidebar"
                className="button"
                id="imagenDmenu" />
            </button>
            {sidebar && <Sidebar categories={props.categories} setCategory={props.setCategory}/>}
            <label>Search:
                <input type="text" />
            </label>
            <ol className="container" id="menu-list">
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                {data ? <Link to={`/users/${props.user.id}`}>{window.localStorage.getItem("username")}</Link> : <Link to={`/login`}>Login</Link>}
            </ol>
            <button>kart</button>
            {/* <Kart user={props.user} kart={props.kart} login={props.login} products={props.products}/> */}
        </nav>
    )
}


export {Sidebar};