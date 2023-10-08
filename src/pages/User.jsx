import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { getSingleUser } from "../apiCalls";
import useLocalStorage from "../components/useLocalStorage";

export default function User(props){
    const [user, setUser] = useState({});
    const nav = useNavigate();

    //logged Out button function
    const loggedOut = ()=>{
        window.localStorage.clear();
        nav('/');
    }

    useEffect(()=>{
        const setData = async ()=>{
            try {
                const usuario = await getSingleUser(window.localStorage.getItem("localUser"));
                console.log("local storage:",usuario);
                console.log("set user:",setUser(usuario));
                
                
            } catch (error) {
                console.error;
            }
        }
        setData();

    },[]);

    return(
        <>
            <section>
                <h4>User: {user.username}</h4>
                <ol className="personalInfo">Personal Data:
                    <br/>
                    <li>email: {user.email}</li>
                    <li>password:{user.password}</li>

                   
                </ol>

                <button onClick={loggedOut}>log out</button>
            </section>
        </>
    )
}