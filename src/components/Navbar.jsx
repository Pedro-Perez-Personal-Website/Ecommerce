//Navigation bar
import { getCategories } from "../apiCalls"
import { useEffect,useState } from "react"

//Sidebar
const Sidebar = ({categories})=>{

    return(
        <div>
           <h4>Categories</h4>
           <ol id='categories'>
            {categories.map((e)=>{
                return <li>{e}</li>
            })}
           </ol>
        </div>
    )
}




export default function Navbar({setCategories, categories}){

    const [sidebar, setSidebar] = useState();
    
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
        <nav>
            <Sidebar categories={categories}/>
            <label>Search:
                <input type="text" />
            </label>
            <ol>
                <li>Home</li>
                <li>Products</li>
                <li>User</li>
            </ol>
            <span>kart</span>
        </nav>
    )
}