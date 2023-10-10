//this is our user page
import { LoginForm,RegisterForm } from "../components/Forms" 
import { useEffect, useState} from "react";
import { getUserKart } from "../apiCalls";

export default function Login(props){

    const [token, setToken]= useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [openRegister, setOpenRegister] = useState(false);

    const openRegistry = ()=>{
        console.log("Clicked");
        setOpenRegister(!openRegister)
    }

    useEffect(()=>{
        try {
            const setData = async()=>{
                if(props.user.id>0){
                    const data = await getUserKart(props.user.id);
                    console.log("data:", data);
                    props.setKart(data[0]);
                }

            }
            setData();
        } catch (error) {
            console.error
        }
    },[props.user]);

    return(
        <div className="container-column">
            <section className="container-column" id="login">
            <h2>User</h2>
                <p>To login use : johnd    m38rmF$</p>
                <LoginForm  username={username}
                            setUsername={setUsername} 
                            password={password}
                            setPassword={setPassword} 
                            token={token} 
                            setToken={setToken}
                            setUser={props.setUser}
                            user= {props.user}
                            setLogin={props.setLogin}
                            kart={props.kart}
                            setKart={props.setKart}/>   
            </section>        
            <section className="container-column" id="register">
                <p>or register /</p>
                <button onClick={openRegistry}>here</button>  
                {openRegister && <RegisterForm openRegister={openRegister} setOpenRegister={setOpenRegister}/>}
            </section>         
        </div>
    )
}