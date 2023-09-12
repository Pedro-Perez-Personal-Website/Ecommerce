import { useEffect } from "react";
import { useParams } from "react-router"
import { getSingleUser } from "../apiCalls";

export default function User(props){
    // let params = useParams();
    // console.log(params);

    // useEffect(()=>{
    //     const setData = async()=>{
    //         try {
    //             console.log("getting user....");
    //             const response = await getSingleUser(params.id);//send the id to the api
    //             console.log("Single user:",response);

    //         } catch (error) {
    //             console.error
    //         }
    //     }
    //     setData();
    // },[]);

    return(
        <>
            <section>
                <h4>{props.user.username}</h4>
                <ol className="container">
                    <span className="container">
                        <li>Name:{props.user.name.firstname}</li>
                        <li>Lastname:{props.user.name.lastname}</li>
                    </span>
                    <span>
                        <li>Email:{props.user.email}</li>
                        <li>Password:{props.user.password}</li>
                        <li>Phone:{props.user.phone}</li>
                    </span>
                    <span>
                        <li>City:{props.user.address.city}</li>
                        <li>Num:{props.user.address.number}</li>
                        <li>Street:{props.user.address.street}</li>
                        <li>Zip:{props.user.address.zipcode}</li>
                  </span>
                </ol>
            </section>
        </>
    )
}