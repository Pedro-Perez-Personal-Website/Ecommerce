//here we are going to make our api requests

//base url for our api
const baseUrl = "https://fakestoreapi.com";

//1.- Get products!--------------------------------------------
//get all the products
async function getProducts(){
    const response = await fetch(`${baseUrl}/products`);
    const res = await response.json();
    //console.log(res);
    return res;
}
//getProducts();

//by the category
async function getCategories(){
    const response = await fetch(`${baseUrl}/products/categories`);
    const res = await response.json();
    console.log(res);
    return res;
}
//getCategories();

//by id
async function getProductsById(id){
    const response = await fetch(`${baseUrl}/products/${id}`);
    const res = await response.json();
    console.log(res);
    return res;
}
//getProductsById(2);

//get by specific category
async function getSpecificCategory(category){
    const response = await fetch(`${baseUrl}/products/category/${category}`);
    const res = await response.json();
    console.log(res);
    return res;
}
//getSpecificCategory('jewelery');

//2.- Get users-------------------------------------------------
//all users
async function getUsers(){
    const response = await fetch(`${baseUrl}/users`);
    const res = await response.json();
    //console.log(res);
    return res;
}
//getUsers();

//single user
const getSingleUser = async (id)=>{
    const response = await fetch(`${baseUrl}/users/${id}`);
    const res = await response.json();
    console.log(res);
    return res;
}
//getSingleUser(2);


//3.- Get kart --------------------------------------------------
//all products from kart
const getKart = async ()=>{
    const response = await fetch(`${baseUrl}/carts`);
    const res = await response.json();
    console.log(res);
    return res;
}
//getKart();

//get user kart
const getUserKart = async (id)=>{
    const response = await fetch(`${baseUrl}/carts/user/${id}`);
    const res = await response.json();
    console.log(res);
    return res;
}
//getUserKart(2);