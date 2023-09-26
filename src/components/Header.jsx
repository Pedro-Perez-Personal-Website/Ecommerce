//This is my header
import { useEffect } from "react"
import { Outlet } from "react-router"
import { getCategories, getProducts, getUserKart } from "../apiCalls";
import Navbar from "./Navbar"

export default function Header(props){//props: kart, setKart, setCategories, categories,user,login, setCategory, setProducts
    //create states

    //Set data
    useEffect(()=>{
        const setData = async ()=>{
            let res = await getCategories();
            console.log("Categories:", res);
            props.setCategories(res);
            let pro = await getProducts();
            console.log("Products:",pro);
            props.setProducts(pro);
            // let kar = await getUserKart(props.user.id);
            // console.log("kart:", kar[0]);
            // props.setKart(kar[0]);
        }
        setData();
    },[props.user]);

    return(
        <>
            <Navbar 
                setCategory={props.setCategory} 
                setCategories={props.setCategories} 
                categories={props.categories} 
                user={props.user}
                setProducts={props.setProducts} 
                products={props.products}
                login={props.login}
                kart={props.kart}
                setKart={props.kart}/>
            <Outlet/>
        </>
    )
}