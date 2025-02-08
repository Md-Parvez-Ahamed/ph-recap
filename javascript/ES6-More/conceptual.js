//primitive 

const x = 5;
const y = true;
const a = "hell";

let z = x;
z= 10;
console.log('x =',x);
console.log('z =',z);

// nonPrimitive

const b = {name: 'hello'};
const numbers = [1,2,3,];
const numbers2 = numbers;

numbers2.push(4);

console.log('numbers2',numbers2);
console.log('numbers',numbers);

const c=b;
c.age = 25
console.log('c',c);
console.log('b',b);

const value = ' '
console.log(!!value);
