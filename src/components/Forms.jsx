//here well create our form components for registration
import { getUserKart, getUsers, login } from "../apiCalls";
import { useState } from "react"
import { useNavigate} from "react-router-dom";


// Login using a post request
export function LoginForm(props){
    //state variables
    const [error, setError]= useState(null);

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
                props.setLogin(true);
                props.setUser(u);
                console.log("User id:", props.user)
                const kar = await getUserKart(props.user.id);
                console.log("carrito:",kar)
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

export function RegisterForm(){

    return(
        <form>
            <h4>Register</h4>
            <article>
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
                <button type="submit">Register</button>
            </article>
        </form>
    )
}
