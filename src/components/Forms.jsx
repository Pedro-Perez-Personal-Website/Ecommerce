//here well create our form components for registration

export function LoginForm(){

    return(
        <form>
            <h4>Login</h4>
            <label htmlFor="">E-mail:
                <input type="text" />
            </label>
            <label htmlFor="">Password:
                <input type="text" />
            </label>
            <button type="submit">Submit</button>
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
