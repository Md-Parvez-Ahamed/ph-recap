// revers 
//              
const numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers);
numbers.reverse();

// console.log(numbers);

const rev_numbers = [];

// for (const num of numbers){
//     console.log(num);
//     numbers.unshift(num);
// }
// console.log(rev_numbers);
for (let i = numbers.length -1; i >=0 ; i--){
    const num = numbers[i]
    console.log(num);
}