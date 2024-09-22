// for (let i= 0 ; i< 20 ; i++){
//     if(i %2 === 1 ){
//         console.log(i);
//     }
// }

// give me the list numbers between 1 to 30 divisible by 5

// for (let i = 1 ; i<=30 ; i++){
//     if(i%5 === 0){
//         console.log(i);
//     }
// }

// give me the sum of numbers from 1 to 20 and that a divisible by 3
let sum = 0;
for(let i = 1 ; i<= 20 ; i++){
    if( i % 3 ===0){
        console.log(i);
        sum = sum+i

    }
}
console.log('Total result',sum);