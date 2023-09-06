//here well create our form components for registration
import { getUsers, login } from "../apiCalls";
import { useState } from "react"
import { useNavigate} from "react-router-dom";


export function LoginForm(props){
    //state variables
    const [error, setError]= useState(null);

    //get users
    const navigate = useNavigate();

    //submit handler
    const submitHandler = async(e)=>{
        e.preventDefault();
        try {
            console.log("On submit")
            const res = await login(props.username, props.password);
            console.log(res);
            props.setToken(res.token);
            const list = await getUsers();
            console.log("list",list);
            list.map((e)=>{
                if(e.username == props.username){
                    props.setUser(e);
                    props.setLogin(true);
                    navigate(`/users/${e.id}`)
                }
            })
        } catch (error) {
            console.error
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
