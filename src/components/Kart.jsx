//this is our kart where we will store our quantity and subtotal price

//here we have our Kart preview----------------------------------
const KartDisplay = (props)=>{
    //we have to decompose kart
    

    return(
        <div>
            
        </div>
    )
}



//This is our kart component, an icon that stores the # of items-------------------------
export default function Kart(props){//props: user,

    return(
        <>
            <button>
                <span id="counter">n</span>{//n is the number of items store on our kart
            }   <img src="https://github.com/Pedro-Perez-Personal-Website/Ecommerce/blob/dev-navbar/src/images/kart.png?raw=true" alt="" />
            </button>
            <KartDisplay kart={props.kart}/>
        </>
    )
}