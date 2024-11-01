const heights = [65,68,66,72,78,60,65,66];

function getMax(numbers){
    // console.log(numbers);
    let max = numbers[0]
    for(const num of numbers){
        
        if(num > max){
            max =num
        }
        // console.log(num);
    }
    return max
}

const max = getMax(heights);
console.log(max);
