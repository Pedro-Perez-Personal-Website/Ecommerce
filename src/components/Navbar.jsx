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
export default function Navbar({setCategories, categories,user, login, setCategory, setProducts, kart}){

    const [sidebar, setSidebar] = useState(false);
    const eventHandler =()=>{//open side
        console.log("Clicked");
        setSidebar(!sidebar);
    }

    return(
        <nav>
            <button onClick={eventHandler} >
                <img src='https://github.com/Pedro-Perez-Personal-Website/Ecommerce/blob/dev-navbar/src/images/sidemenu.png?raw=true' alt="" />
            </button>
            {sidebar && <Sidebar categories={categories} setCategory={setCategory}/>}
            <label>Search:
                <input type="text" />
            </label>
            <ol>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                {login ? <Link to={`/users/${user.id}`}>User</Link> : <Link to={`/login`}>Login</Link>}
            </ol>
            <Kart user={user} kart={kart}/>
        </nav>
    )
}


export {Sidebar};