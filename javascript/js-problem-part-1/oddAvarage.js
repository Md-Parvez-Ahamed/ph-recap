/***
 * Function takes an array as parameter
 * give me the average of the odd numbers in the array
 * */ 


/**
 * 
 * Put odd Number in an array
 * 
 * **/


// function oddAverage(numbers){
//     // console.log(numbers);
//     const odds = []
//     for(const number of numbers){
//         // console.log(number);
//         if(number % 2 === 1){
//             // console.log(number);
//             odds.push(number)
           
//         }
//         console.log(odds);
//         let sum = 0;
//         for(const number of odds){
//             console.log(number);
//             sum = sum + number
            
//         }
//         const count = odds.length
//         console.log(sum,count);
//         const avg = sum / count
//         return avg
//     }

// }

// const numbers = [42,13,58,5,65,81,96,7]
// const average = oddAverage(numbers)
// console.log("average of the odd numbers", average);

/****
 * 
 * My recap
 * 
 * */ 

function oddNumberAverage (numbers){
    // console.log(numbers);
    const odds = []
    for (const number of numbers){
        // console.log(number);
        if(number % 2 === 1){
            // console.log(number)
            odds.push(number)
            
        }
    }
    // console.log(odds);
    let sum = 0 ;
    for(const number of odds){
        console.log(number);
        sum = sum+number
    }
    let count = odds.length
    // console.log(sum,count);
    const average = sum / count
    // console.log(average);
    return average
}

const numbers = [22,23,24,25,26,28,52,57,55,105,100,205,]
const avg = oddNumberAverage(numbers)
console.log(avg);