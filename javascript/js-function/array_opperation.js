/****
 * Objective : Write a function to give me the sum of all numbers in array
 * 
*/

function sumOfNumbers (numbers){
    console.log(numbers);
    for(const number of numbers){
        console.log(number);
    }

}
const num = [54,62,12,6]
const sum = sumOfNumbers(num)
console.log(" Sum of numbers is",sum);


/***
 * 
 * create function that will return only the even numbers
 * return the sum of even numbers
 * 
 * */ 

function evenNumbersOnly(numbers){
    const events = []
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            console.log(number);
            events.push(number)
        }
    }
    return events
}

const numbers = [5,8,91,24,6]
const result = evenNumbersOnly(numbers)
console.log(result);