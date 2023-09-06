//Navigation bar
import { getCategories } from "../apiCalls"
import { useEffect,useState } from "react"
import { Link, Outlet } from "react-router-dom"

//Sidebar
const Sidebar = ({categories, setCategory})=>{

    return(
        <div>
           <h4>Categories</h4>
           <ol id='categories'>
            {categories.map((e)=>{
                return <Link to={`/products/category/${e}`} onClick={()=>{setCategory(e)}}>{e}</Link>
            })}
           </ol>
        </div>
    )
}



const Header = ({setCategories, categories,user, login, setCategory})=>{

    const [sidebar, setSidebar] = useState(false);
    const eventHandler =()=>{//open side
        console.log("Clicked");
        setSidebar(!sidebar);
    }
    
    useEffect(()=>{
        const setData= async()=>{
            try {
                const res = await getCategories();
                setCategories(res);
            } catch (error) {
                console.error
            }
        }
        setData();
    },[])  

    return(
        <>
        <nav>
            <button onClick={eventHandler}></button>
            {sidebar && <Sidebar categories={categories} setCategory={setCategory}/>}
            <label>Search:
                <input type="text" />
            </label>
            <ol>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                {login ? <Link to={`/users/${user.id}`}>User</Link> : <Link to={`/login`}>Login</Link>}
            </ol>
            <span>kart</span>
        </nav>
        </>
    )
}



export default function Navbar({setCategories, categories,user,login, setCategory}){

    return(
        <>
            <Header setCategory={setCategory} setCategories={setCategories} categories={categories} user={user} login={login}/>
            <Outlet/>
        </>
    )
    
}

export {Header, Sidebar};