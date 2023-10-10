//here well create our form components for registration
import { getSingleUser, getUserKart, getUsers, login } from "../apiCalls";
import { useState } from "react"
import { useNavigate} from "react-router-dom";
import useLocalStorage from "./useLocalStorage";



// Login using a post request
export function LoginForm(props){
    //state variables
    const [error, setError]= useState(null);
    const [localUser, setLocalUser] = useLocalStorage("localUser", "" );
    const [localUsername, setLocalUsername] = useLocalStorage("username", props.username);
    const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", null);
    //declare navigation hook
    const navigate = useNavigate();
    

    //submit handler
    const submitHandler = async(e)=>{
        e.preventDefault();
        try {
            console.log("On submit")//send user name and password
            const res = await login(props.username, props.password);
            console.log("response:", res);
            props.setToken("token:",res.token);//if we get a token ..
            if (props.token){
                console.log("user match")
                const list = await getUsers();//get users
                console.log("list of users:", list);
                console.log("loop tru the user list and find the user");
                const u = list.find((user)=> user.username === props.username);
                console.log("User found:", u)
                setLocalUsername(u.username);//username----- persistance
                props.setLogin(true);
                setLoggedIn(true);
                //we find a match to our user so we need to assign it locally 
                setLocalUser(u.id);//we set our local user 
                // const usuario = await getSingleUser(localUser);
                // console.log("Local user id:", usuario);
                props.setUser(u);
                //
                window.localStorage.setItem("listaId", JSON.stringify([]));
                //window.localStorage.setItem("cantidad", JSON.stringify([]));
                console.log("User id:", props.user)
                // const kar = await getUserKart(props.user.id);
                // console.log("carrito:",kar);
                navigate(`/users/${props.user.id}`)//send to the user page
            }
        } catch (error) {
            setError(console.error);
            alert(error);
        }
    }


    return(
        <form >
            <h4>Login</h4>
            <label htmlFor="">Username:
                <input type="text" onChange={(e)=>{props.setUsername(e.target.value)}}/>
            </label>
            <label htmlFor="">Password:
                <input type="text" onChange={(e)=>{props.setPassword(e.target.value)}}/>
            </label>
            <button type="submit" onClick={submitHandler}>Submit</button>
        </form>
    )
}

export function RegisterForm(props){

    const eventHandler = ()=>{
        alert("Congrats now log in with : user:johnd    pass:m38rmF$")
        nav('/login')
        props.setOpenRegister(!props.openRegister);
    };
    const nav = useNavigate();

    return(
        <div className="container-column" >
            
            <article className="container-column" id="home-registry">
                <label htmlFor="">Name:
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">Lastname:
                    <input type="text" />
                </label>
                <label htmlFor="">Email:
                    <input type="text" />
                </label>
                <label htmlFor="">Username:
                    <input type="text" />
                </label>
                <label htmlFor="">Password:
                    <input type="text" />
                </label>
                <label htmlFor="">Password:
                    <input type="text" />
                </label>
                <button onClick={eventHandler} >Register</button>
            </article>
        </div>
    )
}
