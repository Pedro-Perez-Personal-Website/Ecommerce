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
getSpecificCategory('jewelery');

