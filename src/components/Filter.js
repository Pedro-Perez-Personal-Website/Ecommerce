//Here will create our filter for products 
const array = [1,32,4,12,33];

function min2max(a,b){
    return a - b;
}
function max2min(a,b){
    return b - a;
}

const max = array.sort(max2min);//sorts method
console.log("max to min:",max);
const min = array.sort(min2max);//
console.log("min to max:",min);