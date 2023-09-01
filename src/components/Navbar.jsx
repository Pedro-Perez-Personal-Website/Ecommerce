//Navigation bar
import { getCategories } from "../apiCalls"
import { useEffect,useState } from "react"
import { Link, Outlet } from "react-router-dom"

//Sidebar
const Sidebar = ({categories})=>{

    return(
        <div>
           <h4>Categories</h4>
           <ol id='categories'>
            {categories.map((e)=>{
                return <Link to={`/products/category/${e}`}>{e}</Link>
            })}
           </ol>
        </div>
    )
}



const Header = ({setCategories, categories})=>{

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
            {sidebar && <Sidebar categories={categories}/>}
            <label>Search:
                <input type="text" />
            </label>
            <ol>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/user'}>User</Link>
            </ol>
            <span>kart</span>
        </nav>
        </>
    )
}



export default function Navbar({setCategories, categories}){

    return(
        <>
            <Header setCategories={setCategories} categories={categories}/>
            <Outlet/>
        </>
    )
    
}

export {Header, Sidebar};