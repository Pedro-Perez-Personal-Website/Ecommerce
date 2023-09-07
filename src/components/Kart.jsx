//this is our kart where we will store our quantity and subtotal price
import {getUserKart} from '../apiCalls/index'
import { useEffect, useState } from 'react'

//This is our kart component, an icon that stores the # of items
export default function Kart(props){//props: user,
    //set our state for the current kart
    const [kart, setKart] = useState(null);

    //useEffect to fetch the kart data from the api
    useEffect(()=>{
        console.log("user:",props.user)
        const setData = async()=>{
            const res = await getUserKart(props.user.id);//declare a variable for the response and send the user id to the function
            console.log('Kart:',res[0]);
            setKart(res[0]);
        setData();//invoke function
        }
    },[props.user]);//each time we change our user will get a different kart

    return(
        <button>
            <span id="counter">n</span>{//n is the number of items store on our kart
        }   <img src="https://github.com/Pedro-Perez-Personal-Website/Ecommerce/blob/dev-navbar/src/images/kart.png?raw=true" alt="" />
        </button>
    )
}