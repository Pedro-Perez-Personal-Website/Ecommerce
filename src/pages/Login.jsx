//this is our user page
import { LoginForm,RegisterForm } from "../components/Forms" 
import { useState} from "react";

export default function Login(props){

    const [token, setToken]= useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    return(
        <>
            <h2>User</h2>
            <LoginForm  username={username}
                        setUsername={setUsername} 
                        password={password}
                        setPassword={setPassword} 
                        token={token} 
                        setToken={setToken}
                        setUser={props.setUser}
                        setLogin={setLogin}/>                       
            <RegisterForm/>
            
        </>
    )
}