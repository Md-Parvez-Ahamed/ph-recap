// default ==> if value is not provided ,take this a default


function add(num1,num2=0){
    const result = num1 + num2
    return result
    console.log(result);
}

const sum = add(5,7)
const sum2 = add(5)
const sum3 = add(6)
console.log(sum,sum2,sum3);

function fullName (firstName,lastName=''){
    const name = firstName + '' + lastName
    return name
}

const student = fullName('Pavel')