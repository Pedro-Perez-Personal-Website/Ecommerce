//here we are going to make our api requests

//base url for our api
const baseUrl = "https://fakestoreapi.com";

//1.- Get products!--------------------------------------------
//get all the products
export async function getProducts(){
    try {
        const response = await fetch(`${baseUrl}/products`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error
    }
}
//getProducts();

//by the category
export async function getCategories(){
    try {
        const response = await fetch(`${baseUrl}/products/categories`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getCategories();

//by id
export async function getProductsById(id){
    try {
        const response = await fetch(`${baseUrl}/products/${id}`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getProductsById(2);

//get by specific category
export async function getSpecificCategory(category){
    try {
        const response = await fetch(`${baseUrl}/products/category/${category}`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getSpecificCategory('jewelery');

//2.- Get users-------------------------------------------------
//all users
export async function getUsers(){
    try {
        const response = await fetch(`${baseUrl}/users`);
        const res = await response.json();
        console.log("users:",res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getUsers();

//single user
export const getSingleUser = async (id)=>{
    try {
        const response = await fetch(`${baseUrl}/users/${id}`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getSingleUser(2);


//3.- Get kart --------------------------------------------------
//all products from kart
export const getKart = async ()=>{
    try {
        const response = await fetch(`${baseUrl}/carts`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getKart();

//get user kart
export const getUserKart = async (id)=>{
    try {
        const response = await fetch(`${baseUrl}/carts/user/${id}`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getUserKart(2);

//update kart
export const addToKart = async (id, cartId, productId, quantity)=>{
    try {
        const response = await fetch(`https://fakestoreapi.com/carts/${cartId}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    userId:id,
                    date:2019-12-10,
                    products:[{productId:1,quantity:3}]
                }
            )
        });
        console.log("response:",response);
        const res = await response.json();
        console.log("res:",res);
        console.log("item succesfully added")
        return res;
    } catch (error) {
        console.error
    }
}


/*Login--------------------------------------------------------------------------- */
export const login = async(username, password)=>{
    try {
        const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password
            })
        });
        const res = await response.json();
        return res;

    }catch (error) {
        console.error
    }
}