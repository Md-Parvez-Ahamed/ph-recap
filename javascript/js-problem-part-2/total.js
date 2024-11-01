const cartProducts = [
    { name: "Shampoo", price: 300 },
    { name: "Chiruni", price: 100 },
    { name: "Shirt", price: 700 },
    { name: "Pan", price: 1200 },
];

function getShoppingTotal(products) {
    let total = 0 ;
    for( let product of products){
        console.log(product);
        total = total + product.price
    }
    return total
    
}

let total = getShoppingTotal(cartProducts);
console.log(total);
