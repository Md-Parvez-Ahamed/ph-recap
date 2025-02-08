// JavaScript Object Notation

const user = {id:1, name:"Abir",job:"Student"}

const stringified = JSON.stringify(user);

// console.log(user);

const shop = {
    owner : 'Alia',
    address:{
        policeStation :"keranigonj",
        city: "Dhaka",
        country : 'BD'
    },
    products : ["Laptop","mic","monitor"],
    revenue: 45000,
    isOpen: true,
    inNew: false,
}
const shopJSON = JSON.stringify(shop)
console.log(shopJSON);
console.log(shop);