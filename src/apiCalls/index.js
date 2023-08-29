//here we are going to make our api requests

//base url for our api
const baseUrl = "https://fakestoreapi.com";

//1.- Get products!--------------------------------------------
//get all the products
async function getProducts(){
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
async function getCategories(){
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
async function getProductsById(id){
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
async function getSpecificCategory(category){
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
async function getUsers(){
    try {
        const response = await fetch(`${baseUrl}/users`);
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error) {
        console.error;
    }
}
//getUsers();

//single user
const getSingleUser = async (id)=>{
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
const getKart = async ()=>{
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
const getUserKart = async (id)=>{
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