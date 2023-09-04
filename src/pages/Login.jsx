//this is our user page
import { LoginForm,RegisterForm } from "../components/Forms" 
import { useState, useEffect } from "react";
import { getUsers } from "../apiCalls";

export default function Login(){

    const [token, setToken]= useState(null);
    const [username, setUsername] = useState("mor_2314");
    const [password, setPassword] = useState("83r5^_");
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        const setData = async()=>{
            try {
                console.log("Fetching users...");
                const res = await getUsers();
                setUsers(res);
            } catch (error) {
                console.error
            }
        }
        setData();
        console.log("outside setting data")
        users.map((e)=>{ 
            if(e.username == username){
                setUser(e);
                console.log("user:",user)
            }
        })
    },[token])

    

    return(
        <>
            <h2>User</h2>
            <LoginForm  username={username}
                        setUsername={setUsername} 
                        password={password}
                        setPassword={setPassword} 
                        token={token} 
                        setToken={setToken}/>
            <RegisterForm/>
            
        </>
    )
}