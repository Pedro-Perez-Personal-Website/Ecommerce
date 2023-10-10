//here we are going to process out paymenx

export const Checkout = (props)=>{


    return(
        <table>
            <thead>Order Review</thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
            {props.listOfKart.map((e)=>{
                console.log("hello",e)
              return(
                <tr key={1}>
                    <td>{e.title}</td>
                    <td>{e.quantity}</td>
                    <td>{e.precio}</td>
                    <td>{e.total}</td>
                </tr>
              )  
            })}
            <tr>
                <td>total</td>
                <td></td>
                <td></td>
                <td>{}</td>
            </tr>
        </table>
    )
};
