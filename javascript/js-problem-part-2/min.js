

function getMin (numbers){
    // console.log(numbers);
    let min = numbers[0]
    for(const num of numbers){
        // console.log(num);
        if(num < min){
            min = num
        }
    }
    return min
}
const prices = [20000,16000,50000,100000,12000,30000,35000]
const cheap = getMin(prices);
console.log(cheap);