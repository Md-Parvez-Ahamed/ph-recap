const person = {
    name : "Hero Alom",
    age: 34,
    phone : '039945924',
    address : {
        district : "Dhaka",
        policeStation : "Keranigonj",

    },
    p: [1,2,3,4,5]
}

const {name,age,phone,address,p} = person
const {district} = address
console.log(name);
console.log(district);

// const person1 = {...person};
// person1.email = 'hello@gmail.com';
// console.log(person);
// console.log(person1);