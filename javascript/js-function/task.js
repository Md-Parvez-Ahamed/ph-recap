function multiply (a,b,c,d,){
    console.log(a,b,c,d);
    const multi = a*b*c*d;
    console.log(multi);
    return multi
}

// const result = multiply(2,3,4,5)
// console.log(result);

// odd even task
function oddEven (number){
    console.log(number);
    if(number % 2 ===1 ){
       const oddResult= number *2
       console.log("odd result",oddResult)
       return oddResult
    } else if(number % 2 === 0 ){
        const evenResult = number / 2
        console.log("even result",evenResult);
        return evenResult
    }
    return          
}

// const result = oddEven(3)
// console.log(result);

function make_Avg (arr,num){
    const size = arr.length
    console.log(size);
    let sum = 0
        for(let i = 0 ; i<size ; i++){
         sum += arr[i]
         console.log(sum);
    }  
  console.log(arr);
}

const arr = [10,20,30,40,50]
make_Avg(arr)